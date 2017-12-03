import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Image
} from 'react-native'
import {
  View,
  Button,
  Icon,
  Text
} from 'native-base'

export class Login extends Component {
  constructor() {
    super()

    this.handleLoginWithFacebook = this.handleLoginWithFacebook.bind(this)
    this.handleLoginWithGoogle = this.handleLoginWithGoogle.bind(this)
  }

  handleLoginWithFacebook () {
    this.props.navigation.navigate('Register')
  }

  handleLoginWithGoogle() {
    this.props.navigation.navigate('Register')
  }

  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} />
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat facilisis augue, at finibus orci molestie sit amet. Nulla efficitur tincidunt justo, vel cursus ligula sodales ut.
        </Text>
        <View style={styles.btnWrapper}>
          <Button
            block
            id='btnFacebook'
            style={[styles.blockButton, styles.facebook]}
            onPress={() => this.handleLoginWithFacebook()}>
            <Icon name='logo-facebook' />
            <Text uppercase={false} style={styles.buttonText}> Sign in with Facebook </Text>
          </Button>
        </View>
        <View style={styles.btnWrapper}>
          <Button
            block
            id='btnGoogle'
            style={[styles.blockButton, styles.google]}
            onPress={() => this.handleLoginWithGoogle()}>
            <Icon name='logo-google' />
            <Text uppercase={false} style={styles.buttonText}> Sign in with Google </Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  logo: {
    height: 120,
    width: 120,
    aspectRatio: 1,
    borderRadius: 60,
    backgroundColor: '#ebebeb'
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
    color: 'grey'
  },
  blockButton: {
    borderRadius: 40
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  btnWrapper: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  google: {
    justifyContent: 'center',
    backgroundColor: '#dd4b39'
  },
  facebook: {
    justifyContent: 'center',
    backgroundColor: '#3b5998'
  }
})


Login.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Login
