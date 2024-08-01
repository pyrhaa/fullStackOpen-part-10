import { StatusBar } from 'expo-status-bar';
//import Main from './src/components/Main';
import Test from './src/components/Test';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Azul!</Text>
      <StatusBar style="auto" />
      <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
