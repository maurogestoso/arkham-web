import React from 'react'
import styled from 'styled-components'

import Navigation from './Navigation'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

export default () => (
  <Header>
    <h1>🐙 Arkham</h1>
    <Navigation />
  </Header>
)