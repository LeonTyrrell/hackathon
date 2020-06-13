import React, {useState, useEffect} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import logoImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native"

import styles from "./style";
import api from "../../services/api";


export default function Cadastro(){

    const navigation = useNavigation();

    function navigationToMap(){
        navigation.navigate("Mapa")
    }

    cadastrar = async() => {
        const response = await api.post('/caminhoneiro', {
            nome: nome,
            data_nascimento: data_nascimento,
            telefone: telefone
        })
    }; 

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.Logo} source={logoImg} />
        </View>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.cadastro}>Preencha os dados abaixo para começar:</Text>
        <ScrollView style={styles.formCadastro}>
            <Input value={cadastrar.nome} placeholder='Nome Completo' leftIcon={{ type: 'font-awesome', name: 'user' }}/>
            <Input value={cadastrar.data_nascimento} placeholder='Data de Nascimento' leftIcon={{ type: 'font-awesome', name: 'calendar' }}/>
            <Input value={cadastrar.telefone} placeholder='WhatsApp' leftIcon={{ type: 'font-awesome', name: 'whatsapp' }} keyboardType="number-pad"/>
            <Button title="Confirmar" onPress={navigationToMap}></Button>
        </ScrollView>
    </View>
    

    );
}
