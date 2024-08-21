import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import theme from '../theme'

const styles = StyleSheet.create({
    textInput: {
      margin: 10,
      paddingHorizontal: 9,
      paddingVertical: 3,
      borderWidth: 1,
      borderRadius: 9,
      borderColor: "#b6b6b6",
    },
    textInputFalse: {
      margin: 10,
      paddingHorizontal: 9,
      paddingVertical: 3,
      borderWidth: 1,
      borderRadius: 9,
      borderColor: "#d73a4a",
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

const HandleRequiredSign = ({onSubmit}) => {
    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });
  
    if (formik.touched.username && formik.errors.username && formik.touched.password && formik.errors.password) {
      return (
        <View>
       <TextInput
      style={styles.textInputFalse}
      placeholder="Username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
    />
     <Text style={{ color: '#d73a4a' }}>{formik.errors.username}</Text>
     <TextInput
          secureTextEntry={true}
          style={styles.textInputFalse}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        <Text style={{ color: '#d73a4a' }}>{formik.errors.password}</Text>
        <Pressable style={styles.signButton} onPress={formik.handleSubmit}>
          <Text style={styles.textColor}>Sign in</Text>
        </Pressable>
     </View>
      )
    } else if (formik.touched.username && formik.errors.username) {
      return (
      <View>
      <TextInput
      style={styles.textInputFalse}
      placeholder="Username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
    />
     <Text style={{ color: '#d73a4a' }}>{formik.errors.username}</Text>
     <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
       <Pressable style={styles.signButton} onPress={formik.handleSubmit}>
          <Text style={styles.textColor}>Sign in</Text>
        </Pressable>
     </View>
    )
    } else if (formik.touched.password && formik.errors.password) {
      return (
        <View>
      <TextInput
      style={styles.textInput}
      placeholder="Username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
    />
     <TextInput
          secureTextEntry={true}
          style={styles.textInputFalse}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        <Text style={{ color: '#d73a4a' }}>{formik.errors.password}</Text>
        <Pressable style={styles.signButton} onPress={formik.handleSubmit}>
          <Text style={styles.textColor}>Sign in</Text>
        </Pressable>
     </View>
      )
    } else {
      return (
        <View>
      <TextInput
      style={styles.textInput}
      placeholder="Username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
    />
      <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
       <Pressable style={styles.signButton} onPress={formik.handleSubmit}>
          <Text style={styles.textColor}>Sign in</Text>
        </Pressable>
     </View>
      )
    }
  }

export default HandleRequiredSign;