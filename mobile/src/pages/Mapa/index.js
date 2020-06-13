import React, {useState, useEffect} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import MapView from 'react-native-maps';
import logoImg from "../../assets/icon.png";

import styles from "./style";
import api from "../../services/api";


export default function Mapa(){

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
        <Text style={styles.title}>Mapa</Text>
        <MapView
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        />
    </View>
    

    );
}
