import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Body
} from 'native-base'

export class Campaigns extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Campaigns</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    )
  }
}

export default Campaigns
