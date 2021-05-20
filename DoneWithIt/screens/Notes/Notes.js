import React from "react";
import Note from "./Note";

function HomeScreen({ noteData }) {
    return (
        <>
            {noteData.map((c, index) => (
                <Note description={c.d} key={index} title={c.t} />
            ))}
        </>
    );
}

export default HomeScreen;
