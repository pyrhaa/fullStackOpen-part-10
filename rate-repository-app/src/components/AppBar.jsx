import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
    paddingTop: Constants.statusBarHeight,
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab />
  </View>;
};

export default AppBar;