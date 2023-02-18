import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image, StatusBar } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import { Input } from "../Component/TextInput";
import { Button } from "../Component/Button";
import { PasswordIn } from "../Component/PasswordInput";


export default function Login({ navigation }) {
    return (
        <LinearGradient
            colors={['#B9BBE4', '#A197C9', '#B0A6A6']}
            style={{ flex: 1 }}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.3, height: 230, alignItems: "center", justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hello Again</Text>
                        <Text style={{ fontSize: 24, marginHorizontal: 30, textAlign: "center", marginTop: 10, marginBottom: 10 }}>Welcome back. Happy you are here again</Text>
                    </View>
                    <View style={{ flex: 0.45, height: 350, paddingTop: 30 }}>
                        <Input placeholder='Enter email address' />
                        <PasswordIn placeholder='Enter your password' />
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginHorizontal: 25, marginVertical: 8 }}>
                            <TouchableOpacity><Text style={{ fontSize: 18, marginRight: 6 }}>Recover password</Text></TouchableOpacity>
                        </View>
                        <Button buttonText='Login' />
                    </View>
                    <View style={{ flex: 0.3, height: 240 }}>
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>Or continue with</Text>
                        </View>
                        <View style={{ flex: 0.4, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity><Image style={styles.logo} source={require('./google.png')} /></TouchableOpacity>
                            <TouchableOpacity><Image style={styles.logo} source={require('./Apple-Logo.png')} /></TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Not a member?</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
                                <Text style={{ color: 'darkslateblue', marginLeft: 5 }}>Register Now</Text>
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