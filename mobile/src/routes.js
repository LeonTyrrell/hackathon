import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Cadastro from './pages/Cadastro';
import Mapa from './pages/Mapa';
import Home from "./pages/Home";
import Login from "./pages/Login"

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component= {Home} />
               <AppStack.Screen name="Cadastro" component= {Cadastro} />
               <AppStack.Screen name="Login" component= {Login} />
               <AppStack.Screen name="Mapa" component= {Mapa} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}