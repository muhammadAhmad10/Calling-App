import React from "react";
import {useState} from 'react'
import { View, TextInput, TouchableWithoutFeedback, StyleSheet } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export const PasswordIn = (props) => {
    const [locked,setLocked] = useState(true);
    const [showPassword, setShowPassword] = useState(true);
    return (
        <View style={styles.view}>
            <TextInput secureTextEntry={showPassword} placeholder={props.placeholder} style={styles.input} ></TextInput>
            <TouchableWithoutFeedback onPress={()=>{
                    setLocked(!locked);
                    if(locked===true){
                        setShowPassword(false);
                    }
                    else{
                        setShowPassword(true)
                    }
                }}
            >
                <View style={styles.icon}>
                    {locked? <EvilIcons name="lock" size={35} />: <EvilIcons name="unlock" size={35} />}
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        width: '90%',
        height: '100%',
        paddingHorizontal: 10,
        // borderRadius:10
    },
    view: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 25,
        height: 60,
        marginVertical: 10,
        flexDirection: 'row',
    },
    icon: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})