import React, { FC, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, Input } from "../components/Index";
import firebase from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { RootStackParamList } from "../navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

export default function LogIn({ navigation }: Props) {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const signIn = async () => {
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
            <Text>Login Now</Text>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Button title="Login" onPress={signIn} />
            <View style={styles.loginText}>
                <Text style={{ marginHorizontal: 5 }}> You dont have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ marginHorizontal: 5 }}>
                    <Text style={{ color: 'rgba(81,135,200,1)' }}>Sign Up Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    loginText: {
        flexDirection: 'row',
        marginVertical: 20,
    }
})