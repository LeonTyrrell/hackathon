import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Cadastro from './pages/Cadastro';
import Mapa from './pages/Mapa';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Validacao from "./pages/Validacao";
import Telefones from "./pages/Telefones";
import Saude from "./pages/Saude";
import Restaurantes from "./pages/Restaurantes";


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component= {Home} />
               <AppStack.Screen name="Cadastro" component= {Cadastro} />
               <AppStack.Screen name="Login" component= {Login} />
               <AppStack.Screen name="Validacao" component= {Validacao} />
               <AppStack.Screen name="Mapa" component= {Mapa} />
               <AppStack.Screen name="Telefones" component= {Telefones} />
               <AppStack.Screen name="Saude" component= {Saude} />
               <AppStack.Screen name="Restaurante" component= {Restaurantes} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}