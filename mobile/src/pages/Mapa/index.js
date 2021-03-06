import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import logoImg from "../../assets/icon.png";
import logoSaude from "../../assets/health.png"
import logoLocal from "../../assets/location.png"
import logoTelefone from "../../assets/emergency.png"
import marcadorMapa from "../../assets/sleep.png"
import { useNavigation } from "@react-navigation/native"
import Constants from 'expo-constants';
import Mapview, { Marker } from 'react-native-maps';

// import MapBoxGL from '@react-native-mapbox-gl/maps'

import styles from "./style";
import api from "../../services/api";


export default function Mapa(){

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
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Parada Certa</Text>
                    <Image style={styles.Logo} source={logoImg} />
                </View>
                <View style={styles.containerMapa}>
                    <View>
                        <Mapview 
                            style={styles.styleMapa}
                            initialRegion={{
                                latitude: -23.621239,
                                longitude: -46.598182,
                                latitudeDelta: 0.008,
                                longitudeDelta: 0.008
                            }}
                        >
                            <Marker
                                coordinate={{
                                    latitude: -23.621239,
                                    longitude: -46.598182,
                                }}
                            >
                                <Image style={styles.marcadorMapaIcon} source={marcadorMapa}  />
                            </Marker> 
                        </Mapview>
                    </View>
                </View>
                <View style={styles.footerButtons}>
                    <TouchableOpacity onPress={navigationToLocais}>
                        <Image source={logoLocal} style={{ width: 45, height: 45}}/>
                        <Text style={{marginLeft: 5, marginTop: 4}}>Locais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigationToTelefones}>
                        <Image source={logoTelefone} style={{ width: 45, height: 45, marginLeft: 60}}/>
                        <Text style={{marginLeft: 45, marginTop: 3}}>Emergência</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigationToSaude}>
                        <Image source={logoSaude} style={{ width: 45, height: 45, marginLeft: 50}}/>
                        <Text style={{marginLeft: 53}}>Saúde</Text>
                    </TouchableOpacity>
                </View>
            {/* <MapBoxGL.MapView style={{ flex: 1 }} styleURL={MapBoxGL.StyleURL.Dark}>
                    <MapBoxGL.Camera 
                    centerCoordinate={[-95.099215, 29.583299]}
                    zoomLevel={11}
                    />
                </MapBoxGL.MapView> */}
            </View>
        </>
    );}