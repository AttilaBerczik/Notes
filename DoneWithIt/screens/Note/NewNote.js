import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import firestore from "@react-native-firebase/firestore";

const NewNote = ({ route, navigation }) => {
    const { index, userId, noteData } = route.params;
    const [title, setTitle] = useState(route.params.title);
    const docRef = firestore().doc("users/" + userId);
    const [description, setDescription] = useState(route.params.description);
    //when the user leaves the page save the changes
    const save = () => {
        let copy = [...noteData];
        if (noteData) copy[index] = { t: title, d: description };
        else copy = [{ d: description, t: title }];
        docRef.set({ n: copy }).catch((error) => console.log("Error writing document: ", error));
    };
    useEffect(() => navigation.addListener("blur", save), [description, title, docRef]);

    return (
        <View style={styles.div}>
            <TextInput value={title} placeholder="Title" style={{ fontWeight: "bold" }} multiline={true} onChangeText={setTitle} />
            <TextInput value={description} placeholder="Description" multiline={true} onChangeText={setDescription} />
        </View>
    );
};

const styles = StyleSheet.create({
    div: {
        borderWidth: 1,
        borderColor: "#575009",
        alignSelf: "stretch",
        margin: 7,
        padding: 5,
        borderRadius: 6,
        paddingHorizontal: 10,
    },
});
export default NewNote;
