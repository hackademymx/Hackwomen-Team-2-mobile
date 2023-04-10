import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Scrollview, StyleSheet} from 'react-native';
//screens
import Lista from '../screens/Lista';
import BottomTabNavigator from './bottom_navigation';
import RegistroLugares from '../screens/RegistroLugares';
import Login from '../screens/Login';
import Ver from '../screens/Ver';
import EditarLugar from '../screens/EditarLugar';



const Tab= createNativeStackNavigator();

export default function Navigation () {
    return (
        
            <NavigationContainer >
            
                <Tab.Navigator  screenOptions={{
                headerShown: false
                    }}
    >
                
                    <Tab.Screen name= "LugaresSeguros" component={BottomTabNavigator}/>
                    <Tab.Screen name="Lista" component={Lista}/>
                    <Tab.Screen name="RegistroLugares" component={RegistroLugares}/>
                    <Tab.Screen name="Ver" component={Ver}/>
                    <Tab.Screen name="Login" component={Login}/>
                    <Tab.Screen name="Editar" component={EditarLugar}/>
                
                    
                    

                </Tab.Navigator> 
            
            </NavigationContainer>
        
        
    );
}

