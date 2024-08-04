import { StyleSheet, Pressable, Text, View } from 'react-native';

const styles = StyleSheet.create({

barBackColor: {
  backgroundColor: '#24292e'
  },
  textColorTab: {
    color: '#FFFFFF'
  }
  });
  
  const AppBarTab = () => {
    return <View>
        <Pressable style={styles.barBackColor}>
            <Text style={styles.textColorTab}>Repositories</Text>
        </Pressable>
    </View>;
  };

export default AppBarTab;