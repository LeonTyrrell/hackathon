import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import logoImg from "../../assets/icon.png";

import styles from "./style";
export default function PaginaInicial(){
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.Logo} source={logoImg} />
        </View>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.cadastro}>Preencha os dados abaixo para começar:</Text>
        <ScrollView style={styles.formCadastro}>
            <Input placeholder='Nome Completo' leftIcon={{ type: 'font-awesome', name: 'user' }}/>
            <Input placeholder='Data de Nascimento' leftIcon={{ type: 'font-awesome', name: 'calendar' }}/>
            <Input placeholder='WhatsApp' leftIcon={{ type: 'font-awesome', name: 'whatsapp' }} keyboardType="number-pad"/>
            <Button title="Confirmar"></Button>
        </ScrollView>
    </View>
    

    );
}
