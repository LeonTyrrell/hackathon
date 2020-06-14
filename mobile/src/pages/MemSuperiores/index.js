import React, {useRef, useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import logoImg from "../../assets/icon.png";

import YoutubePlayer from 'react-native-youtube-iframe';

import styles from "./style";



export default function MemSuperiores(){

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>
            <Text style={styles.title}>Dores nos Membros Superiores</Text>
            <ScrollView style={styles.bottom}>
               <Text>Você tem feito seus alongamentos todos os dias? {"\n"}{"\n"}
                   Aproveite suas paradas e faça os exercícios. Quanto mais alongamentos durante o dia, menos dor terá.
                   {"\n"}{"\n"}
                   Veja o vídeo abaixo:{"\n"}
                </Text>
                <YoutubePlayer
                ref={playerRef}
                height={400}
                width={300}
                videoId={"0aXFZjAd9mU"}
                play={playing}
                onChangeState={event => console.log(event)}
                onReady={() => console.log("ready")}
                onError={e => console.log(e)}
                onPlaybackQualityChange={q => console.log(q)}
                volume={100}
                playbackRate={1}
                playerParams={{
                    cc_lang_pref: "us",
                    showClosedCaptions: true
                }}
            />
            </ScrollView>
        </View>
        );
}
