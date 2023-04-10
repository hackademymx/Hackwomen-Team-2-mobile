import React, { Component, useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Button} from '@rneui/themed';
import axios from "axios";
import Tarjeta from "../components/cards"
//import { border } from 'native-base/lib/typescript/theme/styled-system';
 
class Lista extends Component {
    state = {
        places: [],
       
      }
      componentDidMount() {
        console.log('componentDidMount Home')
        axios.get('https://lugaressegurosv3.azurewebsites.net/places').then((response) =>
            {
                this.setState({
                    places: response.data,
                  })
            }
        )
      }
        
    render() {
     
        return (
            <>
              <ScrollView>
                <View style={styles.container}>
                    <Tarjeta places= {this.state.places}  />
                </View>
              </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    
    });

    export default Lista

// function Lista(props) {
//     const [places, setPlaces] = useState([]);
  
//     useEffect(() => {
//       axios
//         .get('https://lugaressegurosv3.azurewebsites.net/places')
//         .then((response) => {
//           setPlaces(response.data);
//         });
//     }, []);
  
//     const navigation = useNavigation();
  
//     return (
//       <>
//         <ScrollView>
//           <View style={styles.container}>
//             {places.map((place) => {
//               return (
//                 <Card style={{ borderColor: '#C190C6' }}>
//                   <Card.Title style={{ fontSize: 25 }}>
//                     {place.name}
//                   </Card.Title>
//                   <Card.Divider />
//                   <Card.Image
//                     style={{ width: '100%', height: 300 }}
//                     source={{
//                       uri:
//                         place.image ||
//                         'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
//                     }}
//                   />
  
//                   <Text style={{ fontStyle: 'italic', marginBottom: 10 }}>
//                     {`${place.address.street} ${place.address.suburb} ${place.address.city} ${place.address.state} ${place.address.postal_code}`}
//                   </Text>
//                   <Text style={{ marginBottom: 10 }}>
//                     {place.description}
//                   </Text>
  
//                   <Button
//                     buttonStyle={{
//                       borderRadius: 0,
//                       marginLeft: 0,
//                       marginRight: 0,
//                       marginBottom: 0,
//                       backgroundColor: '#C190C6',
//                     }}
//                     title="Ver lugar"
//                     onPress={() => navigation.navigate('Ver')}
//                   />
//                 </Card>
//               );
//             })}
//           </View>
//         </ScrollView>
//       </>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     fonts: {
//       marginBottom: 8,
//     },
//     user: {
//       flexDirection: 'row',
//       marginBottom: 6,
//     },
//     image: {
//       width: 30,
//       height: 30,
//       marginRight: 10,
//     },
//     name: {
//       fontSize: 16,
//       marginTop: 5,
//     },
//   });
  
//   export default Lista;