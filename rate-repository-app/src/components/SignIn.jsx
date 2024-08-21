import { Text, View, StyleSheet } from 'react-native';
import HandleRequiredSign from './HandleRequiredSign'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
})

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.container}>
    <Text>The sign-in view</Text>
    <HandleRequiredSign onSubmit={onSubmit}/>
    </View>
  )
};

const SignIn = () => {
  const onSubmit = values => {
    const username = values.username;
    const password = values.password;

    console.log(`Your username: ${username} and your password: ${password}`);
    
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;