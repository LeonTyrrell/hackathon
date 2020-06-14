import React, {useState, useEffect, Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import logoImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native"
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./style";
import api from "../../services/api";


export default function Home(){
    const [ telefone, setTelefone ] = useState('');


    const navigation = useNavigation();

    function navigationToValidacao(){
        navigation.navigate("Validacao")
    }
    function navigationToCadastro(){
        navigation.navigate("Cadastro")
    }
    const logar = async ()=> {
        try {
            const response = await api.get('/caminhoneiro/' + telefone);
            const [{id}] = response.data;
            //console.log(id);
            console.log(response.status)
            navigationToValidacao();
        } catch (response) {
            console.log(response.data);
        }
        

    };

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.Logo} source={logoImg} />
        </View>
        <Text style={styles.title}>Bem-vindo ao {"\n"} Parada Certa!</Text>
        <Text style={styles.login}>Login:</Text>
        <View style={styles.formLogin}>
            <Input onChangeText={telefone => setTelefone(telefone)} placeholder='WhatsApp' leftIcon={{ type: 'font-awesome', name: 'whatsapp' }} keyboardType="number-pad" maxLength = {11}/>
            <Button onPress={logar} title="Entrar" ></Button>
        </View>
        <View style={{marginTop: 40}}>
            <Button type="clear" icon={<Icon name="user-plus" size={20} color="#2089dc" style={{marginRight: 10}}/>} title="Cadastro" onPress={navigationToCadastro}></Button>
        </View>
        
    </View> 

    );
}
/*onPress={navigationToValidacao}*/