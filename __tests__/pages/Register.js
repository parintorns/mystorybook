import React from 'react'
import { shallow } from 'enzyme'

import Register from '../../src/pages/Register'

const spyHandleGoBack = jest.spyOn(Register.prototype, 'handleGoBack')
const spyHandleGoNext = jest.spyOn(Register.prototype, 'handleGoNext')

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

let wrapper

beforeEach(() => {
  wrapper = shallow(
    <Register
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
  it('should go to back' ,() => {
    const btnBack = wrapper.find({ id: 'btnBack'})
    expect(btnBack).toHaveLength(1)

    btnBack.simulate('press')
    expect(spyHandleGoBack).toHaveBeenCalledTimes(1)
  })

  it('should go to next', () => {
    const btnNext = wrapper.find({ id: 'btnNext'})
    expect(btnNext).toHaveLength(1)

    btnNext.simulate('press')
    expect(spyHandleGoNext).toHaveBeenCalledTimes(1)
  })
})
