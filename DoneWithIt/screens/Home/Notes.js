import React from "react";
import Note from "./Note";

function Notes({ noteData, navigation }) {
    return (
        <>
            {noteData.map((c, index) => (
                <Note description={c.d} key={index} index={index} title={c.t} navigation={navigation} />
            ))}
        </>
    );
}

export default Notes;
