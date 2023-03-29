import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, SafeAreaView} from 'react-native';
import RegistroLugares from './Views/RegistroLugares';
import Login from './Views/LogIn';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import { faTemperature1 } from '@fortawesome/free-solid-svg-icons';




export default function App() {
  return (
    <ScrollView>
   <SafeAreaView style={styles.container}> 
      <RegistroLugares />
    </SafeAreaView>
  </ScrollView>);
};

// constructor(props){
//     super(props);

//     this.state = { 
//       loading: false,
//       registrar:[],
//     url: "https://lugaressegurosv3.azurewebsites.net/"
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#841881',
   
  },
});
