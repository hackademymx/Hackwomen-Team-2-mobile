/** @format */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'

import TabBarIcon from '../components/comp/tab_bar_icon'
import Home from '../screens/Home'
import Lista from '../screens/Lista'
import RegistroLugares from '../screens/RegistroLugares'
import Ver from '../screens/Ver'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Lista'



export default function BottomTabNavigator({ navigation, route }) {
	// Set the header title on the parent stack navigator depending on the
	// currently active tab. Learn more in the documentation:
	// https://reactnavigation.org/docs/en/screen-options-resolution.html
	// navigation.setOptions({ headerTitle: getHeaderTitle(route) })
	
	return (
		<BottomTab.Navigator  
		    screenOptions={{
            tabBarStyle: { position: 'absolute' },
			headerShown: false,
			tabBarShowLabel:true,
            }}
		    
			style={{ backgroundColor: '#242424' }}
			initialRouteName={INITIAL_ROUTE_NAME}>
			<BottomTab.Screen
				name='Home'
				component={Lista}
				options={{
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-home' />,
				}}
			/>

			<BottomTab.Screen
				name='Registrar'
				component={RegistroLugares}
				options={{
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='add-circle' />,
				}}
			/>
			


			
		</BottomTab.Navigator>
	)
}

