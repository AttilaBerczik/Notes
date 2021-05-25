import React, { useState } from "react";
import { View } from "react-native";
import Notes from "./Notes";
import firebase from "../../fire";
var db = firebase.firestore();

function HomeScreen({ route, navigation }) {
    const [noteData, setNoteData] = useState([
        { t: "First note", d: "Description 1" },
        {
            t: "Second note",
            d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ]);
    const { userId } = route.params;

    return (
        <View>
            <Notes noteData={noteData} navigation={navigation} />
        </View>
    );
}

export default HomeScreen;
