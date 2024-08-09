import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
    paddingTop: Constants.statusBarHeight,
    height: 200,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal={true}>
      <AppBarTab />
    </ScrollView>
    
  </View>;
};

export default AppBar;