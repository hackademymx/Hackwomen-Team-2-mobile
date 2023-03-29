import React from 'react';

import {Text, TextInput , StyleSheet, View} from 'react-native';
//import { View } from 'react-native-web';

const MyTextInput = ({label = "", value, setValue, errorMsg}) => {
    return(
        <View>
            <Text style={styles.label}> {label} </Text>
            <TextInput
             value={value} 
             style={styles.contenedor} 
             onChangeText= {(text) => setValue(text)}/>
        <Text style={styles.errorMsg}>{errorMsg}</Text>
        </View>
        
    );
    };

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor:'#f8f7f6',
        borderColor: '#f8f7f6',
        borderWidth: 1,
        borderRadius: 200/2,
        padding: 10,
        margin: 10,
        
        },
    
    label:{
       
        fontSize: 20,
        color:'#f8f7f6',
        fontWeight: 'bold',
        
        
    },

        
    errorMsg:{
       
        fontSize: 20,
        color:'#bc1000',
        fontWeight: 'bold',
        
        
    },


    });
   

    

export default MyTextInput;   