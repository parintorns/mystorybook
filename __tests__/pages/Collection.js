import React from 'react'
import { shallow } from 'enzyme'

import Collection from '../../src/pages/Collection'

describe('Render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Collection />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
