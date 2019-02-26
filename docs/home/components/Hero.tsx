import * as React from 'react'
import styled from 'react-emotion'
import GitHubButton from 'react-github-button'
import { withRouter } from 'react-router'

import { Button, Container, Logo } from '@components/ui'
import banner from '@images/ert-banner.png'

const Wrapper = styled('div')`
  width: 100%;
  
  background-position: center;
  border-bottom: 1px solid ${p => p.theme.colors.grayLight};

  ${Container.toString()} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  ${p =>
    p.theme.mq({
      padding: ['10px 0', '26px 0', '26px 0', '50px 0'],
    })};
`

const Buttons = styled('div')`
  display: flex;
`

export const Hero = withRouter(({ history }) => (
  <Wrapper>
    <Container>
      <Logo src={banner}  style={{ maxWidth: '100%'}} />
      <GitHubButton
        type="stargazers"
        size="large"
        namespace="atlassian"
        repo="extract-react-types"
      />
      <Buttons>
        <Button
          scale="big"
          onClick={() => history.push('/introduction/getting-started')}
        >
          Try is out
        </Button>
        <Button scale="big" onClick={() => history.push('/documentation')}>
          Documentation
        </Button>
      </Buttons>
    </Container>
  </Wrapper>
))
