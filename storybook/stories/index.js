import React from 'react'
import { Text } from 'react-native'
import { StyleProvider } from 'native-base'

import { storiesOf, addDecorator } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import getTheme from '../../native-base-theme/components'
import commonColor from '../../native-base-theme/variables/commonColor'
import CenterView from './CenterView'
import App from '../../src/App'
import Feed from '../../src/pages/Feed'
import Collection from '../../src/pages/Collection'
import PlaceProfile from '../../src/pages/PlaceProfile'
import Campaigns from '../../src/pages/Campaigns'
import Dashboard from '../../src/pages/Dashboard'
import Stories from '../../src/pages/Stories'
import Search from '../../src/pages/Search'

addDecorator((story) => (
  <StyleProvider style={getTheme(commonColor)}>
    { story() }
  </StyleProvider>
))

storiesOf('Page: ', module)
  .add('Sample', () =>
    <App />
  )
  .add('Feed', () =>
    <Feed />
  )
  .add('Collection', () =>
    <Collection />
  )
  .add('Place Profile', () =>
    <PlaceProfile />
  )
  .add('Campaigns', () =>
    <Campaigns />
  )
  .add('Dashboard', () =>
    <Dashboard />
  )
  .add('Stories', () =>
    <Stories />
  )
  .add('Search', () =>
    <Search />
  )

storiesOf('Component: ', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
