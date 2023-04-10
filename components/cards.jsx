import React from 'react'
import { Text, Card, Button} from '@rneui/themed';
// import Ver from './Ver';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { TabActions } from '@react-navigation/native';

 export default function Tarjeta(props) {
    const navigation = useNavigation();
    

    async function GetItem(id){
        await axios.get(`https://lugaressegurosv3.azurewebsites.net/places/${id}`).then((response) =>
        { 
          
             navigation.replace("Ver", {place: response.data})
                
        }      
    )
    }
        return (
            <>
                {
                    
                    props.places.map(place => {
                       
                        return (
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
                    
                    <Text style={{ fontStyle: 'italic', marginBottom: 10 }}>
                      {`${place.address.street} ${place.address.suburb} ${place.address.city} ${place.address.state} ${place.address.postal_code}`}
                    </Text>
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
                        title="Ver lugar"
                        onPress={() => GetItem(place.id)}

                        
                        />
                    
                  </Card>
                        )
                    })
                }
                
                
            </>
        )
    }

