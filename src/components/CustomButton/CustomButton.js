import { View, Text ,StyleSheet,Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "grey",
        borderRadius: 10,
        marginVertical:10,
},
    text: {

        textAlign: "center", 
        padding:10,
        fontSize: 19,
        color:"white",
}
});
export default CustomButton