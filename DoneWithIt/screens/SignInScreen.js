import React, { useState } from "react";
import { TouchableOpacity, Button, TextInput, Text } from "react-native";
import firebase from "../fire";
const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    console.log("here");
    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate("Home");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <>
            <TextInput value={email} onChangeText={setEmail} />
            <TextInput value={password} onChangeText={setPassword} secureTextEntry />
            {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
            <Button title="SignIn" onPress={() => signIn()} />
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </>
    );
};

export default SigninScreen;
