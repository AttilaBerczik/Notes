import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Notes from "./Notes";
import CreateNoteButton from "./CreateNoteButton";
import firestore from "@react-native-firebase/firestore";

function HomeScreen({ route, navigation }) {
    const [noteData, setNoteData] = useState([]);
    const { userId } = route.params;
    const docRef = firestore().doc("users/" + userId);
    useEffect(() => {
        const unsubscribe = firestore()
            .collection("users")
            .doc(userId)
            .onSnapshot((snapshot) => setNoteData(snapshot.data()));
        return () => unsubscribe();
    }, [docRef]);
    return (
        <View style={{ height: "100%" }}>
            {noteData.n ? (
                <>
                    <Notes noteData={noteData.n} navigation={navigation} docRef={docRef} userId={userId} />
                    <CreateNoteButton navigation={navigation} noteData={noteData.n} userId={userId} />
                </>
            ) : (
                <></>
            )}
        </View>
    );
}

export default HomeScreen;
