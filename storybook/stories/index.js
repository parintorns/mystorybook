import React from 'react'
import { Text } from 'react-native'
import { StyleProvider } from 'native-base'

import { storiesOf, addDecorator } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import getTheme from '../../native-base-theme/components'
import commonColor from '../../native-base-theme/variables/commonColor'
import CenterView from './CenterView'
import Login from '../../src/pages/Login'
import Feed from '../../src/pages/Feed'
import Collection from '../../src/pages/Collection'
import PlaceProfile from '../../src/pages/PlaceProfile'
import Campaigns from '../../src/pages/Campaigns'
import Dashboard from '../../src/pages/Dashboard'
import Stories from '../../src/pages/Stories'
import Search from '../../src/pages/Search'

const navigation = {
  navigate: (e) => {
    //action('navigating')(e)
    linkTo('Page: ', e)(e)
  }
}

addDecorator((story) => (
  <StyleProvider style={getTheme(commonColor)}>
    { story() }
  </StyleProvider>
))

storiesOf('Page: ', module)
  .add('Login', () =>
    <Login
      navigation={navigation}
    />
  )
  .add('Feed', () =>
    <Feed
      navigation={navigation}
    />
  )
  .add('Collection', () =>
    <Collection
      navigation={navigation}
    />
  )
  .add('PlaceProfile', () =>
    <PlaceProfile
      navigation={navigation}
    />
  )
  .add('Campaigns', () =>
    <Campaigns
      navigation={navigation}
    />
  )
  .add('Dashboard', () =>
    <Dashboard
      navigation={navigation}
    />
  )
  .add('Stories', () =>
    <Stories
      navigation={navigation}
    />
  )
  .add('Search', () =>
    <Search
      navigation={navigation}
    />
  )

storiesOf('Component: ', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
