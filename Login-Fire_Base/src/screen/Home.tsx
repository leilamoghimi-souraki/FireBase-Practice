import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Index";
import { initializeApp } from "firebase/app";
import { useAuth } from "../hook/useAuth";

const App: FC = () => {
    const {user}= useAuth();
    

    return (
        <View style={styles.container}>
            <Text>Welcome {user?.email}!</Text>
            {/* <Button title="Sign Out" onPress={useAuth}/> */}
        </View>
    )
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})