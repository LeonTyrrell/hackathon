import React, {useState, useEffect, Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import logoImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native"


import styles from "./style";
import api from "../../services/api";


export default function Login(){

    const navigation = useNavigation();

    function navigationToValidacao(){
        navigation.navigate("Validacao")
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.Logo} source={logoImg} />
        </View>
        <Text style={styles.title}>Login:</Text>
        <View style={styles.formLogin}>
            <Input placeholder='WhatsApp' leftIcon={{ type: 'font-awesome', name: 'whatsapp' }} keyboardType="number-pad" maxLength = {11}/>
            <Button title="Entrar" onPress={navigationToValidacao}></Button>
        </View>
    </View>
    

    );
}
