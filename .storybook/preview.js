import { View } from 'react-native';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  (Story) => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fffff',
        padding: 16
      }}
    >
      <Story />
    </View>
  )
];
