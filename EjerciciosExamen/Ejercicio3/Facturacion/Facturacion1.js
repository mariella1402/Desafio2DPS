/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Input,
  TextInput,
} from 'react-native';
import InputSpinner from 'react-native-input-spinner';

export default function Facturacion1() {
  const camisah = {
    Producname: 'Sueter para caballero',
    Precio: '8.50',
  };
  const [cantidad, setCantidad] = useState();
  const [total, setTotal] = useState(0);
  const [descuento, setDescuento] = useState();
  const [totalpago, setTotalpago] = useState();

  const calculo = () => {
    if (cantidad > 0) {
      if (cantidad > 15 && cantidad < 49) {
        setTotal(camisah.Precio * cantidad);
        setDescuento(total*0.05);
        setTotalpago(total-descuento);
      }
      if (cantidad > 49 && cantidad < 79) {
        console.log('aplicar el 13');
      }
      if (cantidad > 79) {
        console.log('aplicar el 25');
      }
    } else {
      console.log('no tan mamado');
    }
  };

  return (
    <ScrollView>
    <View style={styles.contenedor}>
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
          name="cantidad"
          type={Number}
          keyboardType="numeric"
          onChangeText={setCantidad}
          value={cantidad}
        />
        <TouchableOpacity onPress={calculo}>
          <Text style={styles.converterbuttontext} />
          <Text style={styles.button}>Comprar/Facturar</Text>
        </TouchableOpacity>

      </View>
      <View  style={styles.factura}>
      <View style={styles.header}>
      <Text style={styles.textheader}>Factura</Text>
      </View>
      <View style={styles.contcampos}>
      <View style={styles.camposfac}>
      <Text style={styles.camptext}>Nombre</Text>
      <TextInput
           editable={false}
          >{camisah.Producname}</TextInput>
      </View>
      <View style={styles.camposfac}>
      <Text style={styles.camptext}>Cantidad</Text>
      <TextInput
           editable={false}
          >{cantidad}</TextInput>
      </View>
      <View style={styles.camposfac}>
      <Text style={styles.camptext}>Precio c/u</Text>
      <TextInput
           editable={false}
          >${camisah.Precio}</TextInput>
      </View>
      <View style={styles.camposfac}>
      <Text style={styles.camptext}>Total</Text>
      <TextInput
           editable={false}
          >${total}</TextInput>
      </View>
      <View style={styles.camposfac}>
      <Text style={styles.camptext}>Descuento</Text>
      <TextInput
           editable={false}
          >${descuento}</TextInput>
      </View>
      <View style={styles.camposfac}>
      <Text style={styles.camptext}>Total a pagar</Text>
      <TextInput
           editable={false}
          >${totalpago}</TextInput>
      </View>
      </View>
      </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  camptext:{
    fontSize:20,
  },
  camposfac:{
    borderWidth: 2,
    minWidth: 370,
  },
  contcampos:{
    flex:1,
    flexDirection:'column',
  },
  header:{
  minHeight:30,
  backgroundColor:'pink',
  minWidth: 377,
  alignItems:'center',
  borderBottomWidth: 2,
 },
  contenedor:{
    flex:1,
    flexDirection: 'column',
  },
  factura:{
    backgroundColor: '#B2D9B2',
    textAlign: 'center',
    margin: 5,
    alignItems: 'center',
    minHeight: 480,
    borderWidth:3,
  },
  textheader:{
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#9C100A',
    padding: 15,
    color: 'white',
    fontSize: 18,
    borderRadius: 25,
  },
  cant: {
    borderRadius: 5,
    borderWidth: 2,
    fontSize: 20,
    minWidth: 80,
    maxHeight: 45,
    marginTop:20,
    color: 'black',
    textAlign:'center',
    backgroundColor: 'white',
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
