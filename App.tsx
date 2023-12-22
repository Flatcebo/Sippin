/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 //  * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
