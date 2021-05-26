import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Notes from "./Notes";
import firebase from "../../fire";
var db = firebase.firestore();

function HomeScreen({ route, navigation }) {
    const [noteData, setNoteData] = useState([]);
    const { userId } = route.params;
    const docRef = db.doc("users/" + userId);
    /* docRef.set({
        n: [
            { t: "First note", d: "Description 1" },
            {
                t: "Second note",
                d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
        ],
    });*/
    useEffect(() => {
        const unsubscribe = docRef.onSnapshot((snapshot) => {
            setNoteData(snapshot.data());
        });
        return () => {
            unsubscribe();
        };
    }, [docRef]);
    return <View>{noteData.n ? <Notes noteData={noteData.n} navigation={navigation} userId={userId} /> : <></>}</View>;
}

export default HomeScreen;
