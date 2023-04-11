import React from 'react';
import { useAuth } from '../hook/useAuth';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function RootNavigation() {
    const { user } = useAuth();
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return user ? <AppStack /> : <AuthStack />;
}
export type RootStackParamList={
    Root:undefined;
    Home:undefined;
    LogIn:undefined;
    SignUp:undefined;

}