import React, {useState, useEffect, Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import logoImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native"


import styles from "./style";
import api from "../../services/api";


export default function Saude(){

    const navigation = useNavigation();

    function navigationToMap(){
        navigation.navigate("Mapa")
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.Logo} source={logoImg} />
        </View>
        <Text style={styles.title}>Dicas de Saúde</Text>
        <View style={styles.bottom}>
            <Button title="Dores na Lombar" onPress={navigationToMap}></Button>
        </View>
        <View style={styles.bottom}>
            <Button title="Dores nos Membros Superiores" onPress={navigationToMap}></Button>
        </View>
        <View style={styles.bottom}>
            <Button title="Confirmar" onPress={navigationToMap}></Button>
        </View>
    </View>
    );
}
