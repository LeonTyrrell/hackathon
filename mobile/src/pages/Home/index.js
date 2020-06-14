import React, {useState, useEffect, Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import logoImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native"
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from "./style";
import api from "../../services/api";


export default function Home(){

    const navigation = useNavigation();

    function navigationToValidacao(){
        navigation.navigate("Validacao")
    }
    function navigationToCadastro(){
        navigation.navigate("Cadastro")
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.Logo} source={logoImg} />
        </View>
        <Text style={styles.title}>Bem-vindo ao {"\n"} Parada Certa!</Text>
        <Text style={styles.login}>Login:</Text>
        <View style={styles.formLogin}>
            <Input placeholder='WhatsApp' leftIcon={{ type: 'font-awesome', name: 'whatsapp' }} keyboardType="number-pad" maxLength = {11}/>
            <Button title="Entrar" onPress={navigationToValidacao}></Button>
        </View>
        <View style={{marginTop: 40}}>
            <Button type="clear" icon={<Icon name="user-plus" size={20} color="#2089dc" style={{marginRight: 10}}/>} title="Cadastro" onPress={navigationToCadastro}></Button>
        </View>
        
    </View> 

    );
}
