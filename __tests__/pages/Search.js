import React from 'react'
import { shallow } from 'enzyme'
import {
  ListItem
} from 'native-base'

import Search from '../../src/pages/Search'

const spyHandleGoToPlace = jest.spyOn(Search.prototype, 'handleGoToPlace')

const props = {
  navigation: {
    navigate: jest.fn
  }
}

let wrapper

beforeEach(() => {
  wrapper = shallow(
    <Search {...props} />
  )
})

describe('Render', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Actions', () => {
  it('should go to place profile', () => {
    const listItem = wrapper.find(ListItem)
    listItem.map(item => {
      expect(item).toHaveLength(1)
      item.simulate('press')
    })

    expect(spyHandleGoToPlace).toHaveBeenCalledTimes(listItem.length)
  })

})
