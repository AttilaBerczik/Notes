import React from "react";
import { Text, View, StyleSheet } from "react-native";

function HomeScreen({ description, title }) {
    return (
        <View style={styles.div}>
            <Text style={styles.title} numberOfLines={1}>
                {title}
            </Text>
            <Text numberOfLines={2}>{description}</Text>
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
    title: {
        fontWeight: "bold",
    },
});
export default HomeScreen;
