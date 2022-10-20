/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, ScrollView,TouchableOpacity} from 'react-native';
import { blusa, camisah } from './ProductsBD'

export default function About() {


  return (
    <>
    <ScrollView>
    <View style={styles.contenedor}>
    <View style={styles.head}>
    <Text style={styles.titletex}>Mimi</Text>  
    
    </View>
    <View style={styles.slogan}>
    <Text style={styles.slogantex}>Productos</Text>     
    </View>
    <View style={styles.body}>
    <View style={styles.row}> 
    <TouchableOpacity
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/sueterh.jpg')} />
              <Text style={styles.converterbuttontext}></Text>
    </TouchableOpacity>
    <TouchableOpacity
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/jeansh.jpg')} />
              <Text style={styles.converterbuttontext}></Text>
    </TouchableOpacity>
    <TouchableOpacity
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/camisah.jpeg')} />
              <Text style={styles.converterbuttontext}></Text>
    </TouchableOpacity>
    <TouchableOpacity
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/pansh.jpg')} />
              <Text style={styles.converterbuttontext}></Text>
    </TouchableOpacity>
    
    </View>
   
    <View style={styles.row}> 
    <TouchableOpacity
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/sueter.jpg')} />
              <Text style={styles.converterbuttontext}></Text>
    </TouchableOpacity>
    <TouchableOpacity
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/Jeans.jpeg')} />
              <Text style={styles.converterbuttontext}></Text>
    </TouchableOpacity>
    <TouchableOpacity
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/blusa.jpg')} />
              <Text style={styles.converterbuttontext}></Text>
    </TouchableOpacity>
    <TouchableOpacity
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/pans.jpg')} />
              <Text style={styles.converterbuttontext}></Text>
    </TouchableOpacity>
    </View>
    
    </View>
    </View>
    </ScrollView>
    </>
    
  );
}

const styles = StyleSheet.create({
  box:{
   backgroundColor:'green',
   
   textAlign:'center',
   margin:5,
   alignItems:'center',
   minHeight:300,
  maxHeight:300,   
  },reacompra:{
    minHeight:300,
    backgroundColor:'pink'
  },
  img:{
    maxWidth:170,
    maxHeight:170,
    marginTop:10
      
    },
  contenedor:{
 
  flex:1,
  flexDirection: 'column'
},head:{
  fontSize:50,
  justifyContent:'center',
  backgroundColor:'red' 
 },slogan:{
  justifyContent:'center',
  backgroundColor:'skyblue' 
 },
row:{
  flex:1, 
  backgroundColor:'#009EE1',
  flexDiretion:'row'
},
titletex:{
  fontSize:50,
  textAlign:'center'
},body:{
  flex:1,
  flexDirection: 'row'
},
slogantex:{
  fontSize:20,
  textAlign:'center'
}, converterbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#224330',
   
    borderColor: '#FFFFFF',
    borderWidth: 3,
    maxHeight:200
   
  },
})
