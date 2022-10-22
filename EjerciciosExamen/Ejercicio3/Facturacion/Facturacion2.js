/* eslint-disable prettier/prettier */
import React,  {useState} from 'react';
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

export default function Facturacion2() {
  const camisah = {
    Producname: 'Sueter para caballero',
    Precio: '8.50',
  };
  const [cantidad, setCantidad] = useState();
  const [total, setTotal] = useState();
 this.state = {
  cantidad:1,
 };
  const calculo = () => {
    if ( parseFloat.cantidad > 0) {
      if (cantidad > 15 && cantidad < 49) {
        setTotal(camisah.Precio * cantidad);
      }
      if (cantidad > 49 && cantidad < 79) {
        console.log('aplicar el 13');
      }
      if (cantidad > 79) {
        console.log('aplicar el 25');
      }
    } else {
      console.log(cantidad);
    }
  };
  return (
    <ScrollView>
      <View style={styles.box}>
      <Image style={styles.img} source={require('../img/sueter.jpg')} />
              <Text style={styles.converterbuttontext}>Sueter para Dama</Text>
              <Text style={styles.converterbuttontext}>Color Rojo con Botones</Text>
              <Text style={styles.converterbuttontext2}>Precio: $11.90 USD</Text>
              <Text style={styles.converterbuttontext} />
        <Text style={styles.converterbuttontext}>Cantidad a Comprar:</Text>
        <InputSpinner style={styles.box2}
          onChangeText={setCantidad}
          value={this.state.cantidad}
          max={1000}
          min={1}
          step={1}
          olorMax={'#f04048'}
          colorMin={'#008000'}
          onChange={(cantidad1) => {
    calculo(cantidad1);
	}}
        />
        <TouchableOpacity onPress={calculo}>
          <Text style={styles.converterbuttontext} />
          <Text style={styles.button}>Comprar/Facturar</Text>
        </TouchableOpacity>
        <View>
          <TextInput>{parseFloat.total}</TextInput>
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
 fontWeight: 'bold',
  },
});
