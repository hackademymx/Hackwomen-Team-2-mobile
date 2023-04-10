import React, { Component, useState} from 'react'
import { View, ScrollView, StyleSheet} from 'react-native';
import { Text, Card, Button, Dialog} from '@rneui/themed';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import Tarjeta from "../components/cards"
import { Image } from 'react-native';
//import { border } from 'native-base/


const Ver=({route}) => {
const [visible2, setVisible2] = useState(false);
const {place}= route.params
const navigation = useNavigation();


  const DeletePlace = async(data) => {
    try {
      console.log(data)
    const response = await axios.delete(`https://lugaressegurosv3.azurewebsites.net/places/${data.id}`, data)
    console.log(response)
    setVisible2(!visible2)

    alert("Eliminado Satisfactoriamente:D ") 
    navigation.navigate ("LugaresSeguros")
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
    <ScrollView>
    <View> 
    <Card style= {{borderColor:"#C190C6"}} key={place.id}>
                    <Card.Title style={{fontSize: 25 }} > {place.name}</Card.Title>
                    <Card.Divider />
                    <Card.Image
                      style={{ width: "100%", height: 300 }}
                      source={{
                        uri:
                        place.image || 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                      }}
                    />
                    
                    
                    
                    <Text style={{fontSize:12}}> {place.address.street}, {place.address.suburb},  </Text>
                    <Text style={{fontSize:12}} > {place.address.city}, {place.address.state}, {place.address.postal_code} </Text>
                    
                    <Text>  </Text>
                    <Text style={{ marginBottom: 10 }}>
                      {place.description}
                      
                    </Text>

                    
                    <Button
                        
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor: "#C190C6"
                        }}
                        title="Editar"
                        onPress={() => navigation.navigate("Editar", {place: place})}

                        
                    />

                    <Text>

                    </Text>
                        

                    <Button
                        
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor: "#C190C6"
                        }}
                        title="Eliminar "
                        onPress={() => setVisible2(!visible2)}

                        
                    />
                        
                    
                  </Card>
                
                      <Dialog
                            isVisible={visible2}
                            onBackdropPress={() => setVisible2(!visible2)}
                          >
                            <Dialog.Title title="Dialog Title"/>
                            <Text>Vas a eliminar un Lugar Seguro, estas seguro?</Text>
                            <Dialog.Actions>
                              <Dialog.Button title="Cancelar" onPress={() => setVisible2(!visible2)}/>
                              <Dialog.Button title="Confirmar" onPress={() => DeletePlace(place)}/>
                              
                            </Dialog.Actions>
                          </Dialog>
      </View>
    </ScrollView>
  </>
  ) 
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
export default Ver
    