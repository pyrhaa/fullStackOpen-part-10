import Constants from 'expo-constants';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1
  }
});

const Separator = () => {
  <View style={styles.separator} />;
};

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Rate Repository Application</Text>
        <Button
          title="Press me!"
          onPress={() => Alert.alert('You pressed the button my friend')}
        />
      </View>
      <Separator />
    </SafeAreaView>
  );
};

export default Main;
