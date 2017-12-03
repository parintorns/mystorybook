import React from 'react'
import { shallow } from 'enzyme'

import Dashboard from '../../src/pages/Dashboard'

describe('Render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Dashboard />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
