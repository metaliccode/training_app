import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CallApiAxios, CrudApi, Splash} from '../pages';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Splash"
    //       component={Splash}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen name="ApiGlobal" component={CallApiAxios} />
    //     <Stack.Screen name="CRUD" component={CrudApi} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // ini Tab Navigation
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        /> */}
        <Tab.Screen name="ApiGlobal" component={CallApiAxios} />
        <Tab.Screen name="CRUD" component={CrudApi} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
