import React from 'react'
import {StyleSheet,TextInput} from 'react-native'

export const Input = (props) => {
    return (
        <TextInput placeholder={props.placeholder} style={styles.input}></TextInput>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: 'white',
        fontSize: 18,
        borderRadius: 10,
        marginHorizontal: 25,
        height: 60,
        paddingHorizontal: 10,
        marginVertical: 10
    }
})