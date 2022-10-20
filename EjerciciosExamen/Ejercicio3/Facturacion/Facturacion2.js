/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import InputSpinner from 'react-native-input-spinner';

export default function Facturacion2() {
  return (
    <ScrollView>
      <View style={styles.box}>
      <Image style={styles.img} source={require('../img/sueter.jpg')} />
              <Text style={styles.converterbuttontext}>Sueter para Dama</Text>
              <Text style={styles.converterbuttontext}>Color Rojo con Botones</Text>
              <Text style={styles.converterbuttontext}/>
              <Text style={styles.converterbuttontext2}>Precio: $11.90 USD</Text>
              <Text style={styles.converterbuttontext} />
        <Text style={styles.converterbuttontext}>Cantidad a Comprar:</Text>
        <InputSpinner style={styles.box2}
          max={100}
          min={1}
          step={1}
          colorMax={'#f04048'}
          colorMin={'#40c5f4'}
        />
        <TouchableOpacity>
        <Text style={styles.converterbuttontext} />
        <Text style={styles.button}>COMPRAR/FACTURAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#9C100A",
    padding: 10,
    color:'white',
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
  box2: {
    backgroundColor: '#008000',
    textAlign: 'center',
    margin: 5,
    alignItems: 'center',
  },
  converterbuttontext:{
    color:'black',
     },
  converterbuttontext2:{
 color:'red',
  },
});
