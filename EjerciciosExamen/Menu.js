/* eslint-disable prettier/prettier */
import React from 'react';
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native';

export default function Menu(props) {
  const {navigation} = props;
  return (
    <View style={styles.contenedor}>
      <View>
        <TouchableOpacity
          style={styles.button1}
          title="CALCULADORA"
          onPress={() => navigation.navigate('Ejercicio1')}
          >
           <Text>CALCULADORA</Text>
          </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
          title="CONVERSOR DE MONEDA"
          onPress={() => navigation.navigate('Ejercicio2')}
          >
           <Text>CONVERSOR DE MONEDA</Text>
          </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
          title="TIENDA MIMI"
          onPress={() => navigation.navigate('Ejercicio3')}
          >
          <Text>TIENDA MIMI</Text>
          </TouchableOpacity>

          <Text  style={styles.text}>Autores:</Text>
          <Text style={styles.text1}>Mariella Alesandra Chicas Huezo</Text>
          <Text style={styles.text1}>Sergio Denilson Guevara De Leon</Text>
          <Text style={styles.text1}>Derechos Reservados ®</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contenedor:{
    backgroundColor: '#DEEEDE',
    textAlign: 'center',
    margin: 5,
    alignItems: 'center',
    minHeight: 1000,
    maxHeight: 500,
  },
  text1:{
 textAlign:'center',
    fontSize: 15,
  },
  text:{
    marginTop:265,
 textAlign:'center',
    padding: 10,
    fontSize: 18,
  },
button: {
  marginVertical:5,
  alignItems: 'center',
  backgroundColor: '#68C991',
  padding: 15,
  fontSize: 18,
  borderRadius: 25,
  margin:50,
},
button1: {
  margin:50,
  marginVertical:5,
  marginTop:100,
  alignItems: 'center',
  backgroundColor: '#68C991',
  padding: 15,
  fontSize: 18,
  borderRadius: 25,
},
});
