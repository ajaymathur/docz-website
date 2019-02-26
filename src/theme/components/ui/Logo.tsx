import * as React from 'react'
import { SFC } from 'react'

import logo from '@images/logo.png'

export interface LogoProps {
  width?: number
  height?: number
}

export const Logo: SFC<LogoProps> = props => <img src={logo} {...props}  />
