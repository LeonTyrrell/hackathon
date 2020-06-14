import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import logoImg from "../../assets/icon.png";
import restaurante from "../../assets/restaurante.jpg";
import dormitorio from "../../assets/dormitorio.jpg";



import styles from "./style";



export default function Locais(){

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.Logo} source={logoImg} />
            </View>
            <Text style={styles.title}>Locais mais próximos</Text>
            <Text style={styles.description}>- Dormitório a 500m</Text>
            <Image source={dormitorio}></Image>
            <Text style={styles.description}>- restaurante a 850m</Text>
            <Image source={restaurante}></Image>
            <ScrollView style={styles.bottom}>
               {/* <Image source={}></Image> */}
            </ScrollView>
        </View>
        );
}
