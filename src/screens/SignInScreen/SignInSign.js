import { View, Text ,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react';
import Logo from '../../../assets/images/download.jpg'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
const SignInSign = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const onSignIn=() => {
        console.warn("Successfully logged in.");
    }
    const SignUp=() => {
        console.warn("Don't have a Account.");
    }
    const Forgot=() => {
        console.warn("Forgot Password.");
    }
    return (
      <ScrollView >
      <View style={styles.root}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />

          <Text style={styles.title}>Sign in to the App </Text>
          <CustomInput
              placeholder="User Name"
              value={userName}
              secureTextEntry={false}
              setValue={setUserName}
          />
          <CustomInput
              placeholder="User Password"
              secureTextEntry={true}
              value={userPassword}
              setValue={setUserPassword}
          />
    <CustomButton text="Sign in" onPress={onSignIn}type="PRIMARY" />
    <CustomButton text="Forgot Password" onPress={Forgot} type="SECONDARY"/>
    <CustomButton text="Don't have account" onPress={SignUp}  bgColor="#e3e3e3"/>

            </View>
            </ScrollView>
  )
}
const styles = StyleSheet.create({
    root: {
alignItems: 'center',
padding:30,
    },
    title: {
        alignItems: 'center',
        fontSize: 30,
        color: "blue",
fontWeight:"500",
    },
    logo: {
        width: "70%",
        maxWidth: 300,

        maxHeight:200,
    }
})
export default SignInSign