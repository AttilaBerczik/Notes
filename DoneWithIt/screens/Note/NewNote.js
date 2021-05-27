import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, BackHandler } from "react-native";
import firebase from "../../fire";
var db = firebase.firestore();

const NewNote = ({ route, navigation }) => {
    const { index, userId, noteData } = route.params;
    const docRef = db.doc("users/" + userId);
    const [title, setTitle] = useState(route.params.title);
    const [description, setDescription] = useState(route.params.description);
    //when the user leaves the page save the changes
    const save = () => {
        let copy = [...noteData];
        copy[index] = { t: title, d: description };
        docRef
            .set({ n: copy })
            .then(() => console.log("Document successfully written!"))
            .catch((error) => console.log("Error writing document: ", error));
    };
    useEffect(() => navigation.addListener("blur", save), [description, title]);

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
