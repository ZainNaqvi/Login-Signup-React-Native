import { View, Text ,StyleSheet,Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type,bgColor}) => {
  return (
      <Pressable onPress={onPress}
          style={
              [styles.container,
                  styles[`container_${type}`],
                ,bgColor?{backgroundColor:bgColor}:{}
          
              ]
          
          }>
      <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
   
        borderRadius: 10,
        marginVertical:10,
    },
    container_PRIMARY:{
        backgroundColor: "grey",
         
    },
    container_SECONDARY:{
         
    },
    text: {

        textAlign: "center", 
        padding:10,
        fontSize: 19,

    },
    text_PRIMARY: {

    color:"white",

    },
    text_SECONDARY: {

    color:"blue",

    }
    
});
export default CustomButton