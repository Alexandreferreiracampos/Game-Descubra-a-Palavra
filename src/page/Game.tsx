import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import { Colors } from '../styles/Colors';
import { wordArray, embaralhar, teste } from '../functionGame/functions';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/core';

const img = '../image/background2.png';


export default function Game( { route }) {

  const navigation = useNavigation();
 
  //recebe todas as palavras da lista pelo paremetro route
  const [wordList, setWordList] = useState(route.params.list);
  const [viewInput, setViewInput] = useState('');
  const [InputBox, setInputBox] = useState([]);
  const [palavra, setPalavra] = useState(0);

   //Recebe variavel com letras embaralhadas
  const [word, setWord] = useState(wordArray(wordList[palavra]));

  useEffect(()=>{
    creatLetterInputBox(palavra)
  },word)

  //Criar as box para entrada das letras digitadas
  const creatLetterInputBox=(val:any)=>{
    let box = [];
    for(let i=0; wordList[val].length > i; i++){
      box.push(''.substring(i,i+1))
      setInputBox(box)
    }
  }

  const validarPalavra=(val:any)=>{
    
    const palavraDigitada = viewInput + val;
    setViewInput(palavraDigitada);
    let inputBox:any = InputBox;
    inputBox[viewInput.length] = val;


    //verifica a palavra digitada
    if(wordList[palavra].length == palavraDigitada.length && wordList[palavra] != palavraDigitada){
      setViewInput('')
      setInputBox([])
      setWord(embaralhar(word))
      creatLetterInputBox(palavra)

    }
    if(palavraDigitada == wordList[palavra]){
      setViewInput('')
      setWord(wordArray(wordList[palavra + 1]))
      setPalavra(palavra + 1)
      creatLetterInputBox(palavra)
      if(palavra == wordList.length - 2){
        navigation.navigate('NewGame');
      }
    }  

  }
 
  var corFlatlist = 1;
  return (
   
      <ImageBackground source={require(img)} style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={{color:Colors.text}}>Palavra n°: 10</Text>
        <Text style={{color:Colors.text}}>Qual é a Palavra?</Text>
        <Text style={{color:Colors.text}}>Nivel: {route.params.count}</Text>
      </View>
      <View style={styles.containerInput}>
      <FlatList
                 data={InputBox}
                 renderItem={({ item }) =>
                  <View style={styles.TextView}>
                  <Text style={{color:'black', fontSize:17, fontWeight:'bold'}}>{item}</Text>
                  </View>
                }
                   keyExtractor={item => item.item}
                   horizontal={false}
                   numColumns={8}
                
              />
          
      </View>
      <View style={styles.containerInput}>
      <ImageBackground source={require('../image/containerInput.png')} style={{width:'100%', height:'80%',left:4, justifyContent:'center', alignItems:'center'}} >
      <View style={{width:'90%', bottom:40, justifyContent:'center',alignItems:'center'}}>
      <FlatList
                 data={word}
                 renderItem={({ item }) =>
                 
                 <TouchableOpacity style={[
                  styles.inputText, {backgroundColor: corFlatlist++ % 2 === 0 ? 'rgb(86,31,179)' : 'rgb(0,158,222)'}
                  ]} 
                  onPress={()=>validarPalavra(item)}>
                  <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{item}</Text>
                  
                  </TouchableOpacity>
                  
                }
                   keyExtractor={item => item.item}
                   horizontal={false}
                   numColumns={5}
                   
                   
              />
              
      </View>
      </ImageBackground>
      </View>
      </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flexDirection:'row',
    width:'100%',
    height:70,
    justifyContent:'space-between',
    alignItems:'flex-end',
    marginBottom:30,
    padding:10,
    },
  containerInput:{
    flex:1, 
    width:'102%',
    height:220,
    justifyContent:'center', 
    alignItems:'center',
    top:60
  },
  inputText:{
    width:45, 
    height:45, 
    margin:5, 
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.30)',
    borderRadius:10, 
    justifyContent:'center', 
    alignItems:'center',
    shadowColor: "black",
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 4, 
},
TextView:{
  width:40, 
  height:40, 
  margin:5, 
  borderWidth: 0.9,
  borderColor: 'rgba(0,0,0,0.30)',
  backgroundColor:'white',
  borderRadius:10, 
  justifyContent:'center', 
  alignItems:'center',
  shadowColor: "black",
  shadowOpacity: 0.22,
  shadowRadius: 1.22,
  elevation: 4, 
}
});
