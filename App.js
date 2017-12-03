import StorybookUIHMRRoot from './storybook'
import App from './src/App'

module.exports = __DEV__ ? StorybookUIHMRRoot : App
