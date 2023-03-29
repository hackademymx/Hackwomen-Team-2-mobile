import React, {useState} from 'react';
import{Text, View, StyleSheet} from 'react-native';
import MyTextInput from '../../components/textInput';
import Button from '../../components/button';
import AñadirFoto from '../../components/buttonpic';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const RegistroLugares = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [suburb, setSuburb] = useState('');
    const [street, setStreet] = useState('');
    const [postcode, setPostcode] = useState('');

    const [errorName, setErrorName] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorState, setErrorState] = useState("");
    const [errorCity, setErrorCity] = useState("");
    const [errorSuburb, setErrorSuburb] = useState("");
    const [errorStreet, setErrorStreet] = useState("");
    const [errorPostcode, setErrorPostcode] = useState("");

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
                    postcode
                }
            });
            console.log(response.data);
            setName("")
            setDescription ("")
            setState ("")
            setCity ("")
            setSuburb ("") 
            setStreet ("")
            setPostcode ("") 

            alert("Registro exitoso :D ")
            return {response}
       
        }catch (error){
         alert("Ocurrio un error al hacer la peticion")
        console.log(error)
        }
    }

    const Registrar=() => {
        console.log(name);

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
        
        if (postcode=== ""){
            return setErrorPostcode("Completar el campo codigo postal");


        }

        setErrorPostcode("")


        alert(`${name} ha sido registrado correctamente`);



    };

    return (

        <View style={styles.container}> 
            
            <FontAwesomeIcon  style= {styles.plus} icon={faPlus} size={80} color="white"/><Text style={styles.title}>Añadir</Text>
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
                   value= {postcode} 
                   setValue= {setPostcode}
                   errorMsg={errorPostcode} 
                   />


                <AñadirFoto onClick={Registrar}/>
                <Button text= "Registrar lugar"
                 onClick={savePlace}/>
                
            
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

// const RegistroLugares = () => {

//     const [place, setPlace] = useState({
//         name: "",
//         description: "",
//         address: "",
//     });

//     const [errors,setErrors] = useState({
//         name: {
//             text: 'Complete el campo nombre',
//             status: false,
//         },

//         description: { 
//             text: 'Complete el campo descripción',
//             status: false,
//         },
//         address: {
//             text: 'Complete el campo dirección',
//             status: false,
//         }
//     })
   

//     const [errorName, setErrorName] = useState("");
//     const [errorDescription, setErrorDescription] = useState("");
//     const [errorAddress, setErrorAddress] = useState("");

    
//     const Registrar = () => {
//         let newErrors = errors;
//          for (let property in place) {
            
//              if (place[property] === ""){
//                  newErrors = {
//                     [property]: {
//                     ...newErrors[property],
//                         status: true}
//                  }
//              };
//         }
//          setErrors(newErrors);
//     }


    
  
  

// //minuto 6 video automatizacion
//     const changePlaceProperties = (property, text) => {
//         setPlace({
//             ...place,
//             [property]: text,
//         });
//     }

//     return (
//         <View style={styles.container}> 
            
//             <FontAwesomeIcon  style= {styles.plus} icon={faPlus} size={80} color="white"/><Text style={styles.title}>Añadir</Text>
//                 <MyTextInput
                    
//                     label="Nombre"
//                     value= {place.name} 
//                     setValue= {(text) => changePlaceProperties("name", text)}
//                     errorMsg={errors.name.status && errors.name.text}
//                     />

//                 <MyTextInput 
                    
//                     label="Descripcion" 
//                     value= {place.description} 
//                     setValue= {(text) => changePlaceProperties("description", text)}
//                     errorMsg={errors.description.status && errors.description.text}
//                     />

//                 <MyTextInput 
                    
//                     label="Address" 
//                     value= {place.address}  
//                     setValue={(text) => changePlaceProperties("Address", text)}
//                     errorMsg={errors.address.status && errors.address.text} 
//                     />

        

//                 <AñadirFoto onClick={Registrar}/>
//                 <Button text= "Registrar lugar"
//                  onClick={Registrar}/>
                
            
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { 
//     flex:1,
//     display:'flex',
//     flexDirection:'column',
//     padding:10, 
//     marginBottom: 5,   
//     },
//     title: {
//         fontSize:40,
//         fontWeight:'bold',
//         letterSpacing:2,
//         marginBottom:10,
//         justifyContent:'center',
//         marginLeft:130,
//         marginTop:10,
//         color: "#ffffff",
        
//     },

//     plus:{
        
//     }


// });

// export default RegistroLugares;


