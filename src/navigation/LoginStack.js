import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Pages/Splash/Splash';
import Login from '../Pages/Login/Login';
import DashBoard from '../Pages/DashBoard/DashBoard';
import VehicleMap from '../../VehicleMap';


const Stack = createNativeStackNavigator();
export default LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="DashBoard"
        component={DashBoard}
      />
      <Stack.Screen name="VehicleMap" component={VehicleMap} />


    </Stack.Navigator>
  );
};
