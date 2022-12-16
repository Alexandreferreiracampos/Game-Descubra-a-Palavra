import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Audio } from 'expo-av';
import {Colors} from '../styles/Colors';
import { useState, useEffect } from 'react';

export default function NewGame() {

  const [sound, setSound] = React.useState();
  const [sondback, setSoundBack] = useState(false);
  const [count, setCount] = useState(3);
  const [textNivel, setTextNivel] = useState('Iniciante');

  const img = '../image/background1.png';

  //carregar som de fundo
  async function playSoundBack() {
      const { sound } = await Audio.Sound.createAsync( require('../audio/sondBack.mp3'));
      setSound(sound);
      await sound.playAsync();
      await sound.setIsLoopingAsync(true)
      await sound.setVolumeAsync(0.1) 
    }

  //inicializar som ao abrir o aplicativo.
  if(sondback == false){  
      playSoundBack()
      setSoundBack(true)
  };

  const letterNumbers=(val:any)=>{
      if(val == '+'){
        if(count < 6){
          setCount(count + 1);
        } 
      }else{
        if(count > 3){
          setCount(count - 1);
        }
      }
  }

 useEffect(()=>{

  switch(count){
    case 3:
      setTextNivel("Iniciante");
      break
    case 4:
      setTextNivel("Médio");
      break
    case 5:
      setTextNivel("Difícil");
      break
    case 6:
      setTextNivel("Será que você é capaz?");
      break
  }
 }, [count])
  
  
  const navigation = useNavigation();

  return (
    <ImageBackground source={require(img)} style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.container}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.textInput}>Descubra a palavra secreta</Text>
      </View>
      <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
      <Text style={styles.textInput}>Quantidade de letras</Text>
      <View style={styles.inputNumber}>
        <TouchableOpacity style={styles.inputNumberCount} onPress={()=>letterNumbers('-')}>
        <Text style={styles. textInput}>-</Text>
           </TouchableOpacity>
        <View style={[styles.inputNumberCount, {backgroundColor:'white'}]}>
          <Text style={[styles.textInput, {color:Colors.title}]}>{count}</Text>
          </View>
        <TouchableOpacity style={styles.inputNumberCount} onPress={()=>letterNumbers('+')}>
        <Text style={styles. textInput}>+</Text>          
          </TouchableOpacity>
      </View>
      <Text style={[styles.textInput, {top:19}]}>{textNivel}</Text>
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity style={styles.btJogar} onPress={()=>navigation.navigate('Game')}><Text style={styles.textInput}>Jogar</Text></TouchableOpacity>
      </View>
      
      </View> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'space-between',
    
  },
  inputNumber:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'rgba(255,255,255,.2)',
    borderRadius:35,
    width: 140,
    height: 40,
    margin:10
  },
  inputNumberCount:{
    justifyContent:'center',
    alignItems:'center',
    width:40,
    height:40,
    borderRadius:25
  },
  textInput:{
    fontSize:20,
    fontWeight:'bold',
    color:Colors.text
  },
  btJogar:{
    width:120,
    height:50,
    top:0,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:18,
    margin:10,
    backgroundColor:Colors.buttom,
    shadowColor: "black",
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 4, 
},
});
