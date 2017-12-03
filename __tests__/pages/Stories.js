import React from 'react'
import { shallow } from 'enzyme'

import Stories from '../../src/pages/Stories'

describe('Render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Stories />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
