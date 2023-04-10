import React, {useState} from 'react';
import{ScrollView,Text, View, StyleSheet} from 'react-native';
import MyTextInput from '../components/textInput';
import Button from '../components/button';
import AñadirFoto from '../components/buttonpic';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { ImagePicker } from 'react-native-image-picker';





const EditarLugar = ({route}) => {

    const navigation = useNavigation();

    const {place}= route.params


    const [name, setName] = useState(place.name);
    const [description, setDescription] = useState(place.description);
    const [state, setState] = useState(place.address.state);
    const [city, setCity] = useState(place.address.city);
    const [suburb, setSuburb] = useState(place.address.suburb);
    const [street, setStreet] = useState(place.address.street);
    const [postal_code, setPostal_code] = useState(place.address.postal_code);

    const [errorName, setErrorName] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorState, setErrorState] = useState("");
    const [errorCity, setErrorCity] = useState("");
    const [errorSuburb, setErrorSuburb] = useState("");
    const [errorStreet, setErrorStreet] = useState("");
    const [errorPostal_code, setErrorPostal_code] = useState("");

    const baseUrl = 'https://lugaressegurosv3.azurewebsites.net/places'
    const savePlace = async () => {
        try{
            const response = await axios({
                method:'put',
                url: `${baseUrl}/${place.id}`,
                data: {
                    name, 
                    description, 
                    state, 
                    city, 
                    suburb, 
                    street, 
                    postal_code,
                    // aqui va image !!!!!!
                }
            });
            console.log(response.data);
           

            alert("Edicion exitosa :D ") 
            navigation.navigate ("LugaresSeguros")
            return {response}
       
        }catch (error){
         alert("Ocurrio un error al hacer la peticion")
        console.log(error)
        }
    }

    //añadir foto

  
    // const [image, setImage] = useState(null);
    // }

    // const pickImage = async () => {  
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes : ImagePicker.MediaTypeOptions.Images,
    //         allowsEditing: true
    //     })

    //     if (!result.canceled){
    //         setImage(result.uri)
    //     }
       
    

    const Editar=() => {
        

        /*// Mensajes de Error /*/
        if (name=== ""){
            return setErrorName("Completar el campo nombre");
         
        }


        setErrorName("")

    
        if (description=== ""){
            return setErrorDescription("Completar el campo descripcion");

        }

        setErrorDescription("")
        
        if (state=== ""){
            return setErrorState("Completar el campo estado");

        }

        setErrorState("")
        
        if (city=== ""){
            return setErrorCity("Completar el campo ciudad");

        }

        setErrorCity("")



        if (suburb=== ""){
            return setErrorSuburb("Completar el campo colonia");

        }

        setErrorSuburb(" ")
        
        if (street=== ""){
            return setErrorStreet("Completar el campo calle");

        }

        setErrorStreet("")
        
        if (postal_code=== ""){
            return setErrorPostal_code("Completar el campo codigo postal");


        }

        setErrorPostal_code("")


        alert(`${name} ha sido registrado correctamente`);



    };

    return (

        <View style={styles.container}> 
            <ScrollView>
            <Text style={styles.title}>Editar</Text>
                <MyTextInput
                    
                    label="Nombre"
                    value= {name} 
                    setValue= {setName}
                    errorMsg={errorName}
                    />

                <MyTextInput 
                    
                    label="Descripcion" 
                    value= {description} 
                    setValue=  {setDescription}
                    errorMsg={errorDescription}
                    />

                <MyTextInput 
                    
                    label="Estado" 
                    value= {state}  
                    setValue= {setState}
                    errorMsg={errorState} />

                <MyTextInput 
                    
                    label="Ciudad" 
                    value= {city} 
                    setValue= {setCity}
                    errorMsg={errorCity}
                    />

                <MyTextInput 
                    
                    label="Colonia" 
                    value= {suburb}
                    setValue= {setSuburb}
                    errorMsg={errorSuburb}
                    />

              
                <MyTextInput 
                     
                    label="Calle" 
                    value= {street} 
                    setValue= {setStreet}
                    errorMsg={errorStreet}
                    />

                <MyTextInput 
                   
                   label="Codigo postal" 
                   value= {postal_code} 
                   setValue= {setPostal_code}
                   errorMsg={errorPostal_code} 
                   />


                <AñadirFoto onClick={Editar}/>
                <Button text= "Editar lugar"
                 onClick={savePlace} 
                 activeOpacity= {0.5}
                 />

                </ScrollView>
            
                
            
        </View>
    );
};
    


const styles = StyleSheet.create({
    container: { 
    flex:1,
    display:'flex',
    flexDirection:'column',
    padding:10, 
    marginBottom: 5,   
    backgroundColor: "#C190C6",
    
    },
    title: {
        fontSize:40,
        fontWeight:'bold',
        letterSpacing:2,
        marginBottom:10,
        justifyContent:'center',
        marginLeft:130,
        marginTop:10,
        color: "#ffffff",
        
    },

    plus:{
        
    }


});

export default EditarLugar;
