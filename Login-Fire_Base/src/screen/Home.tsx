import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Index";
import { initializeApp } from "firebase/app";

const App: FC = () => {
    const signOut= ()=>{
        initializeApp.auth().signOut();
    }
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Sign Out" onPress={signOut}/>
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