import React, { FC, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, Input } from "../components/Index";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../constants/FireBase";
import firebase from "firebase/compat/app";



export default function SignUp( Props: any) {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const signUp = async () => {
        if (name && email && password) {
            try {
                const auth = getAuth();
                const user = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                if (user) {
                    const db = firebase.firestore();
                    await db
                        .collection("users")
                        .doc(user.user.uid)
                        .set({ name, email, password });
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            Alert.alert("Error", "Missing Fields");
        }
    };
    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <Input placeholder="Name" onChangeText={(text) => setName(text)} />
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Sign Up" onPress={signUp} />
            <View style={styles.loginText}>
                <Text style={{ marginHorizontal: 5 }}> Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => Props.navigation.navigate("LogIn")}
                    style={{ marginHorizontal: 5 }}
                >
                    <Text style={{ color: "rgba(81,135,200,1)" }}>Login Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginText: {
        flexDirection: "row",
        marginVertical: 20,
    },
});