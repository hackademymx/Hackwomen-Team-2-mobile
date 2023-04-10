import React, {useState} from 'react';
import{ScrollView,Text, View, StyleSheet} from 'react-native';
import MyTextInput from '../components/textInput';
import Button from '../components/button';
import AñadirFoto from '../components/buttonpic';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker'


const RegistroLugares = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [suburb, setSuburb] = useState('');
    const [street, setStreet] = useState('');
    const [postal_code, setPostal_code] = useState('');

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
                method:'post',
                url: baseUrl,
                data: {
                    name, 
                    description, 
                    state, 
                    city, 
                    suburb, 
                    street, 
                    postal_code
                }
            });
            console.log(response.data);
            setName("")
            setDescription ("")
            setState ("")
            setCity ("")
            setSuburb ("") 
            setStreet ("")
            setPostal_code ("") 

            alert("Registro exitoso :D ")
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
       
    

    const Registrar=() => {
        

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
        <ScrollView>
        <View style={styles.container}> 
            
            <FontAwesomeIcon  /><Text style={styles.title}>Añadir</Text>
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


                <AñadirFoto onClick={Registrar}/>
                <Button text= "Registrar lugar"
                 onClick={savePlace} 
                 activeOpacity= {0.5}
                 />

                
            
                
            
        </View>
        </ScrollView>
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

export default RegistroLugares;
