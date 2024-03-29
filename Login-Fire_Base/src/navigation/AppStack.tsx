import React, { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Dashboard } from '../screen/Index';
const { Navigator, Screen } = createNativeStackNavigator();
const AppStack: FC = () => {
    return (
        <Navigator>
            <Screen name="home" component={Home} />
            <Screen name="dashboard" component={Dashboard} />
        </Navigator>
    )
}
export default AppStack;