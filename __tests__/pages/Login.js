import React from 'react'
import { shallow } from 'enzyme'

import Login from '../../src/pages/Login'

const handleLoginWithFacebook = jest.spyOn(Login.prototype, 'handleLoginWithFacebook')
const handleLoginWithGoogle = jest.spyOn(Login.prototype, 'handleLoginWithGoogle')

const props = {
  navigation: {
    navigate: jest.fn
  }
}

let wrapper

beforeEach(() => {
  wrapper = shallow(
    <Login
      {...props}
    />
  )
})

describe('Render', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Actions', () => {
  it('should go to Facebook login' ,() => {
    const btnFacebook = wrapper.find({ id: 'btnFacebook'})
    expect(btnFacebook).toHaveLength(1)

    btnFacebook.simulate('press')
    expect(handleLoginWithFacebook).toHaveBeenCalledTimes(1)
  })

  it('should go to Google login', () => {
    const btnGoogle = wrapper.find({ id: 'btnGoogle'})
    expect(btnGoogle).toHaveLength(1)

    btnGoogle.simulate('press')
    expect(handleLoginWithGoogle).toHaveBeenCalledTimes(1)
  })
})
