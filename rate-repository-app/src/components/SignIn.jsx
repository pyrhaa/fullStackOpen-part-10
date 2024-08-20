import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  textInput: {
    margin: 10,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: "#b6b6b6",
  },
  signButton: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 9,
  },
  textColor: {
    color: "white",
  },
})

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInForm = ({onSubmit}) => {

  const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  return (
    <View style={styles.container}>
    <Text>The sign-in view</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
  <Text style={{ color: '#d73a4a' }}>{formik.errors.username}</Text>
 )}
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
  <Text style={{ color: '#d73a4a' }}>{formik.errors.password}</Text>
 )}
      <Pressable style={styles.signButton} onPress={formik.handleSubmit}>
        <Text style={styles.textColor}>Sign in</Text>
      </Pressable>
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