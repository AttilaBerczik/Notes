import React, { useState } from "react";
import { TouchableOpacity, Button, TextInput, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../fire";

const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const checkSignin = () => {
        //check if the user is already signed in
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem("userId");
                if (value !== null) {
                    navigation.navigate("Home");
                }
            } catch (e) {
                setError(e);
            }
        };
        getData();
    };
    checkSignin();
    const signIn = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const storeData = async (value) => {
                    try {
                        await AsyncStorage.setItem("userId", value);
                    } catch (e) {
                        setError(e);
                    }
                };
                //saving the user id in local storage
                storeData(userCredential.user.uid);
                navigation.navigate("Home");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setError(errorCode, errorMessage);
            });
    };
    return (
        <View>
            <Text>Email</Text>
            <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" />
            <Text>Password</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry />
            {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
            <Button title="Sign In" onPress={() => signIn()} />
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SigninScreen;
