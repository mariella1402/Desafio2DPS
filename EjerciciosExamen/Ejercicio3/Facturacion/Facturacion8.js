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

export default function Facturacion1() {
  return (
    <ScrollView>
      <View style={styles.box}>
      <Image style={styles.img} source={require('../img/pans.jpg')} />
              <Text style={styles.converterbuttontext}>Duo de pans para Dama</Text>
              <Text style={styles.converterbuttontext}>Color gris/ocre</Text>
              <Text style={styles.converterbuttontext2}>Precio: $27.99 USD</Text>
        <Text style={styles.converterbuttontext} />
        <Text style={styles.converterbuttontext}>Cantidad a Comprar:</Text>
        <InputSpinner style={styles.box2}
          max={100}
          min={1}
          step={1}
          olorMax={'#f04048'}
          colorMin={'#008000'}
        />
        <TouchableOpacity>
        <Text style={styles.converterbuttontext} />
        <Text style={styles.button}>Comprar/Facturar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#9C100A",
    padding: 15,
    color:'white',
    fontSize:18,
    borderRadius:25,
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
    backgroundColor: '#359A35',
    textAlign: 'center',
    margin: 5,
    alignItems: 'center',
    fontSize:50,
  },
  converterbuttontext:{
    color:'black',
    fontSize:20,
    fontWeight: 'bold',
     },
  converterbuttontext2:{
 color:'#9C100A',
 fontSize:25,
 fontWeight: 'bold'
  },
});
