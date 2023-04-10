import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {ScrollView,StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Navigation from './Navigation/Navigation.jsx';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { faListAlt, faTemperature1 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';




export default function App() {
  return (
    
      <SafeAreaView style={styles.container}>
        
          <Navigation/>
        
      </SafeAreaView>
    
    
  );
}

// <ScrollView>
/* <SafeAreaView style={styles.container}> 
{<RegistroLugares/>}
</SafeAreaView
</ScrollView> */ 

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
    backgroundColor: '#c190c6',
   
  },
});


