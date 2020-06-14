import React, {useState, useEffect} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import logoImg from "../../assets/icon.png";

// import MapBoxGL from '@react-native-mapbox-gl/maps'

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
    {/* <MapBoxGL.MapView style={{ flex: 1 }} styleURL={MapBoxGL.StyleURL.Dark}>
            <MapBoxGL.Camera 
            centerCoordinate={[-95.099215, 29.583299]}
            zoomLevel={11}
            />
        </MapBoxGL.MapView> */}
    </View>
    

    );
}
