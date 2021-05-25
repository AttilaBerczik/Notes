import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";

function Note({ description, title, index, navigation }) {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("NewNote", { description: description, title: title, index: index })}>
            <View style={styles.div}>
                <Text
                    style={{
                        fontWeight: "bold",
                    }}
                    numberOfLines={1}
                >
                    {title}
                </Text>
                <Text numberOfLines={2}>{description}</Text>
            </View>
        </TouchableWithoutFeedback>
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
export default Note;
