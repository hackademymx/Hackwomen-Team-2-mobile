import React from 'react';

import{Text, View, StyleSheet} from 'react-native';

import MyTextInput from '../../components/textInput';

import Button from '../../components/button';

const RegistroLugares = () => {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [state, setState] = React.useState('');
    const [city, setCity] = React.useState('');
    const [province, setProvince] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [zipcode, setZipcode] = React.useState('');

    const [errorName, setErrorName] = React.useState("");
    const [errorDescription, setErrorDescription] = React.useState("");
    const [errorState, setErrorState] = React.useState("");
    const [errorCity, setErrorCity] = React.useState("");
    const [errorProvince, setErrorProvince] = React.useState("");
    const [errorStreet, setErrorStreet] = React.useState("");
    const [errorZipcode, setErrorZipcode] = React.useState("");


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



        if (province=== ""){
            return setErrorProvince("Completar el campo colonia");

        }

        setErrorProvince(" ")
        
        if (street=== ""){
            return setErrorStreet("Completar el campo calle");

        }

        setErrorStreet("")
        
        if (zipcode=== ""){
            return setErrorZipcode("Completar el campo codigo postal");


        }

        setErrorZipcode("")


        alert(`${name} ha sido registrado correctamente`);



    };

    return (
        <View style={styles.container}> 
            <Text style={styles.title} >Añadir</Text>
                <MyTextInput
                    
                    label="Nombre"
                    value= {name} 
                    setValue= {setName}
                    errorMsg={errorName}
                    />

                <MyTextInput 
                    
                    label="Descripcion" 
                    value= {description} 
                    setValue= {setDescription}
                    errorMsg={errorDescription}
                    />

                <MyTextInput 
                    
                    label="Estado" 
                    value= {state}  
                    setValue={setState}
                    errorMsg={errorState} />

                <MyTextInput 
                    
                    label="Ciudad" 
                    value= {city} 
                    setValue={setCity}
                    errorMsg={errorCity}
                    />

                <MyTextInput 
                    
                    label="Colonia" 
                    value= {province}
                    setValue={setProvince}
                    errorMsg={errorProvince}
                    />

                <MyTextInput 
                     
                    label="Calle" 
                    value= {street} 
                    setValue={setStreet}
                    errorMsg={errorStreet}
                    />

                <MyTextInput 
                   
                    label="Codigo postal" 
                    value= {zipcode} 
                    setValue={setZipcode}
                    errorMsg={errorZipcode} 
                    />
                <Button text= "Registrar lugar" onClick={Registrar}/>
                
            
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


});

export default RegistroLugares;
