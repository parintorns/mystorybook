import React from 'react'
import { Text } from 'react-native'

import { storiesOf, addDecorator } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CenterView from './CenterView'
import App from '../../src/App'

storiesOf('Page: ', module)
  .add('Sample', () =>
    <App />
  )

storiesOf('Component: ', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
