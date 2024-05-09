import './global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './src/pages/Home';
import { Meeting } from './src/pages/Meeting';


const RootStack = createStackNavigator();

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          component={Home}
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          component={Meeting}
          name="Meeting"
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
