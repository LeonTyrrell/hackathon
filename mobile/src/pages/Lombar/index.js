import React, {useRef, useState} from 'react';
import {View, Image, Text, ScrollView,} from 'react-native';
import logoImg from "../../assets/icon.png";
import styles from "./style";

import YoutubePlayer from 'react-native-youtube-iframe';



export default function Lombar(){

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg} />
        </View>
        <Text style={styles.title}>Dores na Lombar</Text>
        <ScrollView style={styles.bottom}>
           <Text>Você sabia que 80% dos motoristas profissionais sofrem de dor na coluna lombar? {"\n"}
               {"\n"}Caminhoneiros participaram de pesquisa sobre saúde em São Paulo. {"\n"}
               59% tinham dor nas costas no momento da entrevista. Podemos te ajudar!{"\n"}{"\n"}
               
               Veja o vídeo abaixo: {"\n"}
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
