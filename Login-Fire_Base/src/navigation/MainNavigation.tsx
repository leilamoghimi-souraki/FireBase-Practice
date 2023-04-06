import React, { FC, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { auth } from "../constants/FireBase";

const MainNav: FC = () => {
    const [user, setUser] = useState(null);
    const bootstrap = () => {
        auth.onAuthStateChanged((_user: any) => {
            if (_user) {
                setUser(_user)
            }
        })
    }
    useEffect(()=> {
        bootstrap()
    }, [])


    return (
        <NavigationContainer>
            {user !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>

    )
}
export default MainNav;