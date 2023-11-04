import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
};

export type RootTabParamList = {
  Drafts: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootTab = createBottomTabNavigator<RootTabParamList>();
