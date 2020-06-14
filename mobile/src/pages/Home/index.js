import React, {useState, useEffect, Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import logoImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native"


import styles from "./style";
import api from "../../services/api";


export default function Home(){

    const navigation = useNavigation();

    function navigationToLogin(){
        navigation.navigate("Login")
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
        
        <View style={{marginTop: 100}}>
            <Button title="Login" onPress={navigationToLogin}></Button>
        </View>
        <View style={{marginTop: 20}}>
            <Button title="Cadastro" onPress={navigationToCadastro}></Button>
        </View>
        
    </View>
    

    );
}
