import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import { Colors } from '../styles/Colors';
import { wordArray, teste } from '../functionGame/functions';


const img = '../image/background2.png';
//<Text>Pagina {route.params.count}</Text>

export default function Game( { route }) {
  
  //Recebe variavel com letras embaralhadas
  const [word, setWord] = useState(['i','n','s','t','á','v','e','l'])

console.log(teste(1))
 
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
      <ImageBackground source={require('../image/containerWord.png')} style={{width:'100%', height:'80%', justifyContent:'center', alignItems:'center'}} >
        <Text>Tes</Text>
      </ImageBackground>
      </View>
      <View style={styles.containerInput}>
      <ImageBackground source={require('../image/containerInput.png')} style={{width:'100%', height:'80%',left:4, justifyContent:'center', alignItems:'center'}} >
      <View style={{width:'90%', bottom:40, justifyContent:'center',alignItems:'center'}}>
      <FlatList
                 data={word}
                 renderItem={({ item }) =>
                 
                 <TouchableOpacity style={[styles.inputText, {backgroundColor: corFlatlist++ % 2 === 0 ? 'rgb(86,31,179)' : 'rgb(0,158,222)'}]} >
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
}
});
