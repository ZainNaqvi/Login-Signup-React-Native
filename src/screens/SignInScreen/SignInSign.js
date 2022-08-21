import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/download.jpg'
const SignInSign = () => {
  return (
      <View style={styles.root}>
          <Image source={Logo} style={styles.logo} resizeMode="contain"/>
      <Text>Sign to the form </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
padding:30,
    },
    logo: {
        width: "70%",
        maxWidth: 300,
        height:"90%",
        maxHeight:200,
    }
})
export default SignInSign