import React, { useState } from "react";
import { TouchableOpacity, Button, TextInput, Text, View } from "react-native";
import firebase from "../fire";

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const signUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
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
            <Button title="Sign Up" onPress={() => signUp()} />
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Text>Already have an account? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupScreen;
