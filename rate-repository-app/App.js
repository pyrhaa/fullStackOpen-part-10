import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <Main />
    </View>
    </NativeRouter>
    
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
