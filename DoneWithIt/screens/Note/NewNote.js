import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

function NewNote({ route, navigation }) {
    const { index } = route.params;
    const [title, setTitle] = useState(route.params.title);
    const [description, setDescription] = useState(route.params.description);
    return (
        <View style={styles.div}>
            <TextInput
                value={title}
                placeholder="Title"
                style={{
                    fontWeight: "bold",
                }}
                multiline={true}
                onChangeText={setTitle}
            />
            <TextInput value={description} placeholder="Description" multiline={true} onChangeText={setDescription} />
        </View>
    );
}

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
