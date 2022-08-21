import { View, Text ,Image,StyleSheet} from 'react-native'
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
  return (
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
    <CustomButton text="Submit" onPress={onSignIn}/>
    </View>
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
        height:"90%",
        maxHeight:200,
    }
})
export default SignInSign