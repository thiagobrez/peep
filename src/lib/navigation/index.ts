import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CompositeNavigationProp } from '@react-navigation/native';
import Draft from '../../database/model/Draft';

export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
  NewDraft: undefined;
  DraftDetails: {
    draft: Draft;
  };
};

export type RootTabParamList = {
  Drafts: undefined;
  Settings: undefined;
};

export type NavigationProp<
  S extends keyof RootStackParamList,
  T extends keyof RootTabParamList,
> = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, S>,
  BottomTabNavigationProp<RootTabParamList, T>
>;

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootTab = createBottomTabNavigator<RootTabParamList>();

export const RootDrawer = createDrawerNavigator<RootTabParamList>();
