/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Components/LoginPage'
import MenuPage from './Components/MenuPage'
import Materiel from './Components/Materiel'
import DetailTable from './Components/DetailTable'

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: 'Login' }}/>
          <Stack.Screen name="MenuPage" options={{ title: '', headerLeft: null, gesturesEnabled: false }} component={MenuPage} />
          <Stack.Screen name="Matériel" options={{ title: '' , headerLeft: null}} component={Materiel} />
          <Stack.Screen name="DetailTable" options={{ title: '' , headerLeft: null}} component={DetailTable} />

        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};


export default App;
