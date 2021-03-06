import * as path from 'path'
import externalLinks from 'remark-external-links'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

export default {
  src: './docs',
  title: 'Extract React Types',
  indexHtml: 'src/index.html',
  theme: 'src/theme/index',
  ordering: 'ascending',
  propsParser: false,
  mdPlugins: [externalLinks.default],
  modifyBundlerConfig: config => {
    config.module.rules.push({
      test: /(babel-file-loader)/,
      use: 'null-loader',
    })
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    })
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@fonts': `${PUBLIC}/fonts`,
      '@images': `${PUBLIC}/images`,
      '@components': `${SRC}/theme/components`,
      '@styles': `${SRC}/theme/styles`,
    })

    return config
  },
}
