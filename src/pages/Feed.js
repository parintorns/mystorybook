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

export class Feed extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Feed</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    )
  }
}

export default Feed
