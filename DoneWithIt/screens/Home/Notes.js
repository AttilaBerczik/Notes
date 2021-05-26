import React from "react";
import Note from "./Note";

function Notes({ noteData, navigation, userId }) {
    return (
        <>
            {noteData.map((c, index) => (
                <Note userId={userId} key={index} index={index} noteData={noteData} navigation={navigation} />
            ))}
        </>
    );
}

export default Notes;
