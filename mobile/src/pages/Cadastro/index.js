import React, {useState, useEffect, Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import logoImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native"


import styles from "./style";
import api from "../../services/api";


export default function Cadastro(){
    const [state, setState] = useState(''); // Deixado para próxima atualização
    const navigation = useNavigation();

    function navigationToMap(){
        navigation.navigate("Mapa")
    }

    const [telefone, setTelefone] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');
    const [nome, setNome] = useState('');


    const cadastrar = async() => {

        try {
            const response = await api.post('/caminhoneiro', {
                nome: nome,
                data_nascimento: data_nascimento,
                telefone: telefone
            });
            const { id } = response.data;
            console.log(id)
            navigationToMap();
        } catch (response) {
            //this.setState = ({ errorMessage: response.data.error });
            console.log(response.status); // deixado para a próxima atualização
        }

    }; 
    /*signIn = async () => {
        try {
            const response = await api.post('/caminhoneiro', {
                nome: nome,
                data_nascimento: data_nascimento,
                telefone: telefone
            });

            const { id } = response.data;
            console.log(id);
        }

    }*/

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.Logo} source={logoImg} />
        </View>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.cadastro}>Preencha os dados abaixo para começar:</Text>
        <ScrollView style={styles.formCadastro}>
            <Input onChangeText={nome => setNome(nome)} placeholder='Nome Completo' leftIcon={{ type: 'font-awesome', name: 'user' }}/>
            <Input onChangeText={data_nascimento => setData_nascimento(data_nascimento)} placeholder='Data de Nascimento' leftIcon={{ type: 'font-awesome', name: 'calendar' }} keyboardType="number-pad" maxLength = {8}/>
            <Input onChangeText={telefone => setTelefone(telefone)} placeholder='WhatsApp' leftIcon={{ type: 'font-awesome', name: 'whatsapp' }} keyboardType="number-pad" maxLength = {11}/>
            <Button title="Confirmar" onPress={cadastrar}></Button>
        </ScrollView>
    </View>
    

    );
}
/*
value={cadastrar.nome}
value={cadastrar.data_nascimento}
value={cadastrar.telefone}
*/