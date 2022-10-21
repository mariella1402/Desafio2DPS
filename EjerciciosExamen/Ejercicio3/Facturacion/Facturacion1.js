/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import InputSpinner from 'react-native-input-spinner';

export default function Facturacion1(camisah, cantidad, total) {
  const camisah = {
    Producname: 'Sueter para caballero',
    Precio: '8.50',
  }
 const [cantidad, setCantidad]=useState()
 const [total, setTotal]=useState()

  const calculo= ()=> {
          if(cantidad > 0)
          {
            if(cantidad >15 && cantidad<49)
            { 
              setTotal(camisah.Precio*cantidad)

            }
            if(cantidad >49 && cantidad<79){
              console.log('aplicar el 13')
            }
            if(cantidad >79){
              console.log('aplicar el 25')
            }
            
          }
          else{
            console.log('no tan mamado')          
          }
  }

 

  return (
    <ScrollView>
      <View style={styles.box}>
        <Image style={styles.img} source={require('../img/sueterh.jpg')} />
        <Text style={styles.converterbuttontext}>Sueter para caballero</Text>
        <Text style={styles.converterbuttontext}>
          Color Negro con gris y blanco
        </Text>
        <Text style={styles.converterbuttontext2}>Precio: $8.50 USD</Text>
        <Text style={styles.converterbuttontext} />
        <Text style={styles.converterbuttontext}>Cantidad a comprar:</Text>
        <TextInput
        style={styles.cant}
         name='cantidad'
          type={Number}
          onChangeText={setCantidad}
          value={cantidad} 
        />
       
        <TouchableOpacity onPress={calculo} >
          <Text style={styles.converterbuttontext} />
          <Text style={styles.button}>Comprar/Facturar</Text>
          
        </TouchableOpacity>
        <View>
      <TextInput>{total}</TextInput>
      </View>
      </View>
      
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#9C100A',
    padding: 15,
    color: 'white',
    fontSize: 18,
    borderRadius: 25,
  },
  cant:{
    fontSize:20,
    minWidth:50,
   minHeight:50,
   color:'black',
   backgroundColor:'white'

  },
  converterbutton: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#224330',
    borderColor: '',
    borderWidth: 3,
    maxHeight: 200,
  },
  
  img: {
    maxWidth: 170,
    maxHeight: 170,
    marginTop: 10,
    marginHorizontal: 100,
  },
  box: {
    backgroundColor: '#65B372',
    textAlign: 'center',
    margin: 5,
    alignItems: 'center',
    minHeight: 500,
    maxHeight: 500,
  },
  converterbuttontext: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  converterbuttontext2: {
    color: '#9C100A',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
