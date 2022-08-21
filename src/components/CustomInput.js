import { View, Text ,TextInput,StyleSheet,} from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder ,secureTextEntry}) => {


  return (
    <View style={styles.container}>
          <TextInput
              value={value}
              onChangeText={setValue}  
              placeholder={placeholder}
              style={styles.input} secureTextEntry={secureTextEntry} />
          
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical:10,
    },
    input: {
        
    },
});
export default CustomInput