/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 //  * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import RootStack from './src/screens/RootStack';
// import 'react-native-gesture-handler';
export default function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <Toast />
    </>
  );
}

// #571d1d
