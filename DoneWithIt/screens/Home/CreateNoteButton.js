import React from "react";
import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native";

const CreateNoteButton = ({ navigation, noteData, userId }) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("NewNote", { noteData: noteData, index: noteData.length, userId: userId })}>
            <Image style={styles.button} source={require("../../assets/plus.png")} />
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    button: { width: 80, height: 80, position: "absolute", bottom: "5%", right: "5%" },
});
export default CreateNoteButton;
