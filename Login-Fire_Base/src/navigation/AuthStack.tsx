import React, { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp, Login } from '../screen/Index';
const { Navigator, Screen } = createNativeStackNavigator();
const AuthStack: FC = () => {
    return (
        <Navigator>
            <Screen name="SignUp" component={SignUp} />
            <Screen name="LogIn" component={Login} />
        </Navigator>
    )
}
export default AuthStack;