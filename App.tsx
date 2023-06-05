import Constants from 'expo-constants';
import Home from './app/home';

function App() {
  return <Home />;
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}
export default AppEntryPoint;
