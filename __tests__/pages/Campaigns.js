import React from 'react'
import { shallow } from 'enzyme'

import Campaigns from '../../src/pages/Campaigns'

describe('Render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Campaigns />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
