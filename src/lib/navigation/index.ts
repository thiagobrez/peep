import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
};

export type RootTabParamList = {
  Drafts: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootTab = createBottomTabNavigator<RootTabParamList>();

export const RootDrawer = createDrawerNavigator<RootTabParamList>();
