import Constants from 'expo-constants';
import { Text, StyleSheet, View, Pressable } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository Application</Text>
      <Pressable
      onPress={() => console.log('You pressed the text!')}
    >
      <Text>You can press me</Text>
    </Pressable>
    </View>
  );
};

export default Main;