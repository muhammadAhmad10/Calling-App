import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Button = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3a1759',
        marginHorizontal: 25,
        height: 60,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: 'center',
        marginVertical:30
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 800
    }
})