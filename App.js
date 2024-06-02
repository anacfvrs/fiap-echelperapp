import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import PresentationScreen from './screens/PresentationScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SocialScreen from './screens/SocialScreen';
import SignupScreen from './screens/SignupScreen';
import CompleteSignupScreen from './screens/CompleteSignupScreen';
import MainScreen from './screens/MainScreen';
import NewPostScreen from './screens/NewPostScreen';
import ProfileScreen from './screens/ProfileScreen';
import FAQScreen from './screens/FAQScreen';
import Sidebar from './screens/Sidebar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="Main" component={MainScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Presentation" component={PresentationScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Social" component={SocialScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="CompleteSignup" component={CompleteSignupScreen} />
        <Stack.Screen name="MainDrawer" component={MainDrawer} />
        <Stack.Screen name="NewPost" component={NewPostScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



