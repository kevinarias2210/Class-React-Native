import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";

const Stack = createNativeStackNavigator();

export default function NavigationStack () {
    return(
        <Stack.Navigator initialRouteName="Home">{/* Con este
        initialRouteName declaramos quien va a verse de primero */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}