import React from 'react'
import { View,Text,StyleSheet,TextInput,Image} from 'react-native'
import searchicon from 'C:\Users\kpriy\ImageWhiz\assets\searchicon.png'

const Navbar  = () => {
  return ( 
    <View style={styles.box}>
      <Text>Navbar</Text>
    <View style={styles.searchbox}>
      <TextInput>
        
        <Image source={searchicon}/>
      </TextInput>
      
       </View>
    </View>
  )
}



const styles = StyleSheet.create({
  box: {
    //flex: 1,
    paddingVertical: 10,
    width:"100%",
    //height:"100%",
    backgroundColor: "red",
    alignItems: 'center',
    //justifyContent: 'center',
  },
  searchbox: {
    alignItems: 'center', 
  },
});
export default Navbar 