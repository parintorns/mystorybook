import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Image,
  Alert
} from 'react-native'
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Title,
  Right,
  View,
  Button,
  Icon,
  Text,
  Form,
  Item,
  Input
} from 'native-base'

export class Register extends Component {
  constructor() {
    super()

    this.handleGoBack = this.handleGoBack.bind(this)
    this.handleGoNext = this.handleGoNext.bind(this)
  }

  handleGoBack () {
    const self = this

    Alert.alert(
      'Cancel Registration',
      'Your input data will clear and go back to login page. Are you sure?',
      [
        {text: 'Cancel'},
        {text: 'OK', onPress: () => self.props.navigation.navigate('Login')}
      ],
      { cancelable: false }
    )
  }

  handleGoNext () {
    this.props.navigation.navigate('Feed')
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
              id='btnBack'
              onPress={this.handleGoBack}>
              <Title>Cancel</Title>
            </Button>
          </Left>
          <Right>
            <Button transparent
              id='btnNext'
              onPress={this.handleGoNext}>
              <Title>Next</Title>
              <Icon
                name='ios-arrow-round-forward-outline'
              />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} />
          </View>
          <Form>
            <Item first>
              <Input placeholder="Firstname" />
            </Item>
            <Item>
              <Input placeholder="Lastname" />
            </Item>
            <Item>
              <Input placeholder="Phone" />
            </Item>
            <Item>
              <Input placeholder="City" />
            </Item>
            <Item last>
              <Input placeholder="Country" />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  avatarWrapper: {
    alignItems: 'center',
    marginVertical: 20
  },
  avatar: {
    height: 140,
    width: 140,
    aspectRatio: 1,
    borderRadius: 70,
    backgroundColor: '#aaa'
  }
})


Register.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Register
