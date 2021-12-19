import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton({title , onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#F28B44",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        margin: 10,
    },
    text:{
        color: "white",
        fontSize: 18,
        textTransform : "uppercase",
        fontWeight : "bold"
    }
})

export default AppButton;