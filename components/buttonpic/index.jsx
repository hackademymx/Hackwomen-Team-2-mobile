import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react';
import { FlatList } from "react-native-web";


export  default function AñadirFoto({onClick, text}){
    const [images, setImages] = useState([]);
    return(
     
        <TouchableOpacity onPress= {onClick} >
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
                <FontAwesomeIcon icon={ faCamera } size={70} color= 'white' />
            </View>
        </TouchableOpacity>
          
    );
    
};
 
const styles = StyleSheet.create({
    button: {
      
        display:"flex", 
        justifyContent:"center",
        alignItems: "center",
        paddingVertical: 30, 
        width:"50%",
        height: 20,
        marginLeft: 95,
       paddingBottom:50,
        
    },
    
})
