import React from 'react'
import { shallow } from 'enzyme'

import Feed from '../../src/pages/Feed'

describe('Render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Feed />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
