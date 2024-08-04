import { Pressable, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}> <Pressable>
    <Text>Repositories</Text>
</Pressable></View>;
};

export default AppBar;

// The background color of the app bar in the image is #24292e