import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { YellowBox } from 'react-native';
import Home from './src/screens/Home';
import ResultDetailsScreen from './src/screens/ResultDetailScreen';

const Stack = createStackNavigator();
YellowBox.ignoreWarnings(['Remote debugger']);

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="ResultDetails"
          component={ResultDetailsScreen}
          options={{title: 'Details'}}
        />
        {/*<Stack.Screen name="Profile" component={Profile} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;