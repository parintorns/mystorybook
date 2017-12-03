import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Header,
  Content,
  Title,
  Left,
  Right,
  Body,
  View,
  List,
  ListItem,
  Icon,
  Item,
  Input,
  Text,
  Segment,
  Button
} from 'native-base'

export class Search extends Component {
  render () {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
            />
            <Icon
              name="ios-close-circle-outline"
            />
          </Item>
        </Header>
        <Content>
          <Segment>
            <Button>
              <Text>Recents</Text>
            </Button>
            <Button>
              <Text>People</Text>
            </Button>
            <Button>
              <Text>Keywords</Text>
            </Button>
            <Button active>
              <Text>Places</Text>
            </Button>
          </Segment>
          <List>
            <ListItem avatar button>
              <Left>
                <Icon name='ios-pin-outline' />
              </Left>
              <Body>
                <Text>Result Title</Text>
                <Text note>result note</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' />
              </Right>
            </ListItem>
            <ListItem avatar button>
              <Left>
                <Icon name='ios-pin-outline' />
              </Left>
              <Body>
                <Text>Result Title</Text>
                <Text note>result note</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' />
              </Right>
            </ListItem>
            <ListItem avatar button>
              <Left>
                <Icon name='ios-pin-outline' />
              </Left>
              <Body>
                <Text>Result Title</Text>
                <Text note>result note</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

export default Search
