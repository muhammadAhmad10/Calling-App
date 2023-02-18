import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";


import Login from './Screens/Authentication/Login';
import Signup from './Screens/Authentication/Signup';
import UploadImage from './Screens/Media/UploadImage';
import UploadVideo from './Screens/Media/UploadVideo';
export default function App() {
    const Stack = createStackNavigator();
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: '#09031C' },
                        headerTitleStyle: { color: 'white', fontSize: 24 },
                        headerTintColor: 'white', headerTitleAlign: 'center',
                    }}
                >
                    <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
                    <Stack.Screen name='UploadImage' component={UploadImage} options={{ headerShown: false }} />
                    <Stack.Screen name='UploadVideo' component={UploadVideo} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}