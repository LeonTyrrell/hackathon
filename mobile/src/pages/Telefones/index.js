import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import logoTelefone from "../../assets/emergency.png"
import { useNavigation } from "@react-navigation/native"

import styles from "./style";
import api from "../../services/api";

import bombeiro from "../../assets/firefighter.png"
import ambulancia from "../../assets/ambulance.png"
import ccr from "../../assets/customer-service.png"

export default function Telefones(){

    const navigation = useNavigation();

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
            <Image style={styles.logo} source={logoTelefone}/>
        </View>
        <Text style={styles.title}>Emergência</Text>
        <View style={styles.footerButtons}>
            <TouchableOpacity onPress={navigationToTelefones} style={ {flexDirection:'row', flexWrap:'wrap' }}>
                <Image source={ccr} style={{ width: 65, height: 65, marginTop: 25}}/>
                <Text style={{marginLeft: 25, marginTop: 30, fontSize: 20}}>CCR NovaDutra {"\n"} 0800 0173536</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigationToSaude} style={ {flexDirection:'row', flexWrap:'wrap' }}>
                <Image source={ambulancia} style={{ width: 65, height: 65, marginTop: 50}}/>
                <Text style={{marginLeft: 25, marginTop: 70, fontSize: 20}}>Resgate - 192</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigationToSaude} style={ {flexDirection:'row', flexWrap:'wrap' }}>
                <Image source={bombeiro} style={{ width: 65, height: 65, marginTop: 50}}/>
                <Text style={{marginLeft: 25, marginTop: 70, fontSize: 20}}> Bombeiros - 193</Text>
            </TouchableOpacity>
        </View>
    </View>

    );
}
