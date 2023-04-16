import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './views/Navbar';
import Screen1 from './views/Screen1';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar  />
      <Screen1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 50,
    width:"100%",
    height:"100%",
    backgroundColor: 'blue',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
