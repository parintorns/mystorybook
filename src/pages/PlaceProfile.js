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

export class PlaceProfile extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Place Profile</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    )
  }
}

export default PlaceProfile
