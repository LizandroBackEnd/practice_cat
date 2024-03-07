import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {Audio} from  'expo-av';

export default function App() {
  const  image = "https://www.nationalgeographic.com.es/medio/2023/08/25/perro_adf93861_1412331876_230825124420_800x800.jpg"
    const [sound , setSound] = useState()

  async function playSong(){
    const {sound} = await Audio.Sound.createAsync (require ("./dog.mp3"))

      setSound(sound)
      await sound.playAsync();

  }

  return (
      <View style={styles.container}>
        <Image source={{uri: image}} style={{width: 200, height: 200}}/>
        <Button title="Escuchar" onPress={playSong}/>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      gap: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
