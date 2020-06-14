import React, {useState, useEffect, Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import logoSaude from "../../assets/health.png"
import { useNavigation } from "@react-navigation/native"


import styles from "./style";
import api from "../../services/api";


export default function Saude(){

    const navigation = useNavigation();

    function navigationToLombar(){
        navigation.navigate("Lombar")
    }
    function navigationToMembros(){
        navigation.navigate("MemSuperiores")
    }
    function navigationToCervical(){
        navigation.navigate("Cervical")
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.logo} source={logoSaude} />
        </View>
        <Text style={styles.title}>Dicas de Saúde</Text>
        <View style={styles.bottom}>
            <Button title="Dores na Lombar" onPress={navigationToLombar}></Button>
        </View>
        <View style={styles.bottom}>
            <Button title="Dores nos Membros Superiores" onPress={navigationToMembros}></Button>
        </View>
        <View style={styles.bottom}>
            <Button title="Dores na Cervical" onPress={navigationToCervical}></Button>
        </View>
    </View>
    );
}
