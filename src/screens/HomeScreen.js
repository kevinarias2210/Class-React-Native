import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";/*El 
SafeAreaView sirve para que no se ponga debajo del Note de los teléfonos
*/

export default function HomeScreen (props) {
    const { navigation } = props;
    console.log(props)

    const goToSettings = () => {
        navigation.navigate("Settings");
    }

    return(
        <SafeAreaView>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Button onPress={goToSettings} title="Ir a Settings" />
        </SafeAreaView>
    )
}