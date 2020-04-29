/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/views/splash'
import Page1 from './src/views/page1';
import Page2 from './src/views/page2';
import Page3 from './src/views/page3';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const NAV_ICON_MAP = {
  '翻译': {
    active: require('./assets/nav_translate_hover.png'),
    nactive: require('./assets/nav_translate.png'),
  },
  '每句': {
    active: require('./assets/nav_calendar_hover.png'),
    nactive: require('./assets/nav_calendar.png'),
  },
  '我的': {
    active: require('./assets/nav_mine_hover.png'),
    nactive: require('./assets/nav_mine.png'),
  },
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    console.log(route)
    return <Image style={styles.icon} source={NAV_ICON_MAP[route.name][focused ? 'active' : 'nactive']}/>
  },
});

const tabBarOptions = {
  activeTintColor: '#F83843',
  nactiveTintColor: '#484848',
};

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
        <Tab.Screen name='翻译' component={Page1} />
        <Tab.Screen name='每句' component={Page2} />
        <Tab.Screen name='我的' component={Page3} />
      </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen name='tab' component={TabNav}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 22.5,
    height: 22.5,
  },
  scrollView: {
    backgroundColor: '#FFF',
  },
});

export default App;
