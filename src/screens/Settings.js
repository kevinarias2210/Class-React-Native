import React from "react";
import { View, Text, Button } from "react-native";

export default function Settings (props) {
    const { navigation } = props;

    const goHome = (pageName) => {
        navigation.navigate(pageName);
    }

    return(
        <View>
            <Text>Estamos en Settings</Text>
            <Text>Estamos en Settings</Text>
            <Text>Estamos en Settings</Text>
            <Button onPress={() => goHome("Home")} title="ir al home"/>
        </View>
    )
}