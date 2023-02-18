import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, ScrollViewComponent, StatusBar } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import { Input } from "../Component/TextInput";
import { Button } from "../Component/Button";
import {PasswordIn} from '../Component/PasswordInput'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'



export default function Signup({ navigation }) {
    return (
        <LinearGradient
            // colors={['#B9BBE4' ,'#A197C9']}
            // colors={['#f2e3e3', '#f9f8fb', '#E0D9F2']}
            colors={['#B9BBE4', '#A197C9', '#B0A6A6']}
            //  colors={['#B0A6A6','#ead1d1' ,'#E6C1C1']}
            // colors={['#b6c3ca' ,'#FFFFFF']}

            style={{ flex: 1 }}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.3, height: 180, alignItems: "center", justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hello</Text>
                        <Text style={{ fontSize: 24, marginHorizontal: 30, textAlign: "center", marginTop: 10, marginBottom: 10 }}>Happy you are here again.</Text>
                    </View>
                    <View style={{ flex: 0.45, height: 540, paddingTop:10 }}>
                        <Input placeholder='Enter your name' />
                        <Input placeholder='Enter email address' />
                        <Input placeholder='Enter phone number' />
                        <PasswordIn placeholder='Enter password' />
                        <PasswordIn placeholder='Confirm password' />
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginHorizontal: 25, marginTop: 8 }}>
                            <TouchableOpacity style={{backgroundColor:'#3a1759',height:50,justifyContent:'center',flexDirection:'row',alignItems:'center',borderRadius:10,width:140}}>
                                <Text style={{ fontSize: 18, marginRight: 6,color:'white' }}>Add Photo</Text>
                                <Icon name="insert-photo" color={'white'} size={30} />
                            </TouchableOpacity>
                        </View>
                        <Button buttonText='Signup' />
                    </View>
                    <View style={{ flex: 0.1,height: 100 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Already a member?</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                                <Text style={{ color: 'darkslateblue', marginLeft: 5 }}>Login Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    logo: {
        width: 60,
        height: 60,
        margin: 20,
        borderRadius: 50
    },
})