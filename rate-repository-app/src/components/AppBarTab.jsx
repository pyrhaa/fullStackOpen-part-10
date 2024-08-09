import { StyleSheet, Pressable, Text, View } from 'react-native';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
container: {
  padding: 10,
  paddingTop: 35,
  flexDirection: 'row',
  justifyContent:'space-between',
},
barBackColor: {
  backgroundColor: '#24292e'
  },
  titleText: {
    fontFamily: 'Cochin',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
  },
  textColorTab: {
    color: '#FFFFFF'
  }
  });
  
  const AppBarTab = () => {
    return <View style={styles.container}>
        <Pressable style={styles.barBackColor}>
          <Link to="/">
          <Text style={styles.textColorTab}>Repositories</Text>
          </Link>
        </Pressable>

        <Text style={styles.titleText}>Rate Repository Application</Text>
        
        <Pressable style={styles.barBackColor}>
        <Link to="/signin">
         <Text style={styles.textColorTab}>Sign in</Text>
        </Link>
        </Pressable>
    </View>;
  };

export default AppBarTab;