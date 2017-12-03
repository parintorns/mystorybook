import React from 'react'
import { shallow } from 'enzyme'

import Search from '../../src/pages/Search'

describe('Render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Search />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
