import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>

      {/* <LoginForm /> */}
      {/* <Saludar /> */}
      <Saludar firstname="Juan" lastname="Cart"/>
      <Saludar firstname="Daniela" lastname="Alvez"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
