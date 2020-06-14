import React, {useRef, useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import logoImg from "../../assets/icon.png";
import YoutubePlayer from 'react-native-youtube-iframe';

import styles from "./style";



export default function Cervical(){

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.Logo} source={logoImg} />
            </View>
            <Text style={styles.title}>Dores na Cervical</Text>
            <ScrollView style={styles.bottom}>
               <Text>
                   A dor foi mais frequente em quem tinha maior tempo de direção nas 24 horas. {"\n"}
                   Evite adoecer a sua cervical, pense em mudar seus hábitos! Estamos aqui para te ajudar! {"\n"}{"\n"}
    
                   Veja o vídeo abaixo:{"\n"}
                </Text>
                <YoutubePlayer
                ref={playerRef}
                height={400}
                width={300}
                videoId={"k4mcyd4ZZxU"}
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
