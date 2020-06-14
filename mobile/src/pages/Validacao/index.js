import React, {useState, useEffect, Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import logoImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native"


import styles from "./style";
import api from "../../services/api";


export default function Validacao(){

    const navigation = useNavigation();

    function navigationToMap(){
        navigation.navigate("Mapa")
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.Logo} source={logoImg} />
        </View>
        <Text style={styles.title}>Validação do Número</Text>
        <Text style={styles.textValidacao}>Insira o número de 6 dígitos enviado ao seu Whatsapp!</Text>
        <ScrollView style={styles.formCadastro}>
            <Input placeholder='Código' leftIcon={{ type: 'font-awesome', name: 'whatsapp' }}/>
            <Button title="Confirmar" onPress={navigationToMap}></Button>
        </ScrollView>
    </View>
    

    );
}
