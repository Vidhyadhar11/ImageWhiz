import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

const Screen1 = () => {
  return (
    <View style={styles.box}> 
      <Text>Screen1</Text>
      </View>
  )
}


const styles = StyleSheet.create({
  box: {
    //flex: 1,
    paddingVertical: 20,
    width:"100%",
    //height:"100%",
    backgroundColor: "yellow",
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
export default Screen1