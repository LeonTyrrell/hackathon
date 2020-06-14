import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import logoImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native"

import styles from "./style";
import api from "../../services/api";

import bombeiro from "../../assets/firefighter.png"
import ambulancia from "../../assets/ambulance.png"
import ccr from "../../assets/customer-service.png"

export default function Telefones(){



    const navigation = useNavigation();

    function ccrNovaDutra(){
        Linking.openURL(`tel:08000173536`)
    };
    function resgate(){
        Linking.openURL(`tel:192`)
    };
    function bombeiros(){
        Linking.openURL(`tel:193`)
    };

    function navigationToLocais(){
        navigation.navigate("Locais")
    }
    
    function navigationToTelefones(){
        navigation.navigate("Telefones")
    }
    function navigationToSaude(){
        navigation.navigate("Saude")
    }


    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.Logo} source={logoImg} />
        </View>
        <Text style={styles.title}>Emergência</Text>
        <View style={styles.footerButtons}>
            <TouchableOpacity onPress={ccrNovaDutra} style={ {flexDirection:'row', flexWrap:'wrap' }}>
                <Image source={ccr} style={{ width: 65, height: 65, marginTop: 25}}/>
                <Text style={{marginLeft: 25, marginTop: 30, fontSize: 20}}>CCR NovaDutra {"\n"} 0800 0173536</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={resgate} style={ {flexDirection:'row', flexWrap:'wrap' }}>
                <Image source={ambulancia} style={{ width: 65, height: 65, marginTop: 50}}/>
                <Text style={{marginLeft: 25, marginTop: 70, fontSize: 20}}>Resgate - 192</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={bombeiros} style={ {flexDirection:'row', flexWrap:'wrap' }}>
                <Image source={bombeiro} style={{ width: 65, height: 65, marginTop: 50}}/>
                <Text style={{marginLeft: 25, marginTop: 70, fontSize: 20}}> Bombeiros - 193</Text>
            </TouchableOpacity>
        </View>
    </View>

    );
}