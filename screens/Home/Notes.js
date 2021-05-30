import React from "react";
import Note from "./Note";
import GestureRecognizer from "react-native-swipe-gestures";

const Notes = ({ noteData, navigation, userId, docRef }) => {
    const deleteNote = (index) => {
        const copy = [...noteData];
        copy.splice(index, 1);
        docRef.set({ n: copy }).catch((error) => console.log("Error writing document: ", error));
    };
    return (
        <>
            {noteData.map((c, index) => (
                <GestureRecognizer key={index} onSwipeLeft={() => deleteNote(index)} onSwipeRight={() => deleteNote(index)}>
                    <Note userId={userId} index={index} noteData={noteData} navigation={navigation} />
                </GestureRecognizer>
            ))}
        </>
    );
};

export default Notes;
