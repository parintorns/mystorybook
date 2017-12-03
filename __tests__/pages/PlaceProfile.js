import React from 'react'
import { shallow } from 'enzyme'

import PlaceProfile from '../../src/pages/PlaceProfile'

describe('Render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <PlaceProfile />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
