import React, { useState } from "react";
import { TouchableOpacity, Button, TextInput, Text, View } from "react-native";
import firebase from "../fire";

const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const signIn = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
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
