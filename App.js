import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, SafeAreaView} from 'react-native';
import RegistroLugares from './Views/RegistroLugares';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';




export default function App() {
  return (
    <ScrollView>
   <SafeAreaView style={styles.container}> 
      <RegistroLugares/>
      
  </SafeAreaView>
  </ScrollView>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#841881',
   
  },
});
