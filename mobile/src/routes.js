import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import PaginaInicial from './pages/PaginaInicial';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
               <AppStack.Screen name="Pagina Inicial" component= {PaginaInicial} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}