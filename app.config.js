export default ({ config }) => ({
  ...config,
  name: 'React Native Storybook',
  slug: 'react-native-storybook',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED
  }
});
