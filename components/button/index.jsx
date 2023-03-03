import react from "react";
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";

export  default function Button({onClick, text}){
    return(
        <TouchableOpacity onPress= {onClick} >
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
    
};
 
const styles = StyleSheet.create({
    button: {
        backgroundColor:"#ffffff",
        borderRadius: 8,
        display:"flex", 
        justifyContent:"center",
        alignItems: "center",
        paddingVertical: 10, 
        width:"50%",
        padding: 20,
        marginLeft: 95,
       
        
    },
    text: {
        fontWeight:"bold",
        color:"#fffff",
    }
})






//    return (
//        <TouchableOpacity>
//            <View style={styles.button}>
//                <Text style={styles.text}> Aceptar </Text>
//            <View/>
//         <TouchableOpacity/>
//     );
//}}

//const styles = StyleSheet.create({
//    button: {
//        backgroundColor: "#55000",
//        borderRadius: 8,
//        display: "flex",
//        justifyContent: "center",
//        alignItems: "center",
//        paddingVertical: 10,
//        width" : "50%",

//    },

//});

