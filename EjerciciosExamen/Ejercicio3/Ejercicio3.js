/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView,TouchableOpacity} from 'react-native';
import { blusa, camisah } from './ProductsBD'

export default function About(props) {
  const {navigation} = props;

  return (
    <>
    <ScrollView>
    <View style={styles.contenedor}>
    <View style={styles.head}>
    <Text style={styles.titletex}>MIMI S.A DE C.V</Text>
    </View>
    <View style={styles.slogan}>
    <Text style={styles.slogantex}>Prendas En Liquidacion</Text>
    </View>
    <View style={styles.body}>
    <View style={styles.row}> 
    <TouchableOpacity
    onPress={() => navigation.navigate('Facturacion')}
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/sueterh.jpg')} />
              <Text style={styles.converterbuttontext}>Sueter Para caballero</Text>
              <Text style={styles.converterbuttontext}>Color Negro con gris y blanco</Text>
              <Text style={styles.converterbuttontext}/>
              <Text style={styles.converterbuttontext}>Precio: $8.50 USD</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate('Facturacion')}
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/jeansh.jpg')} />
             <Text style={styles.converterbuttontext}>Pantalon Para caballero</Text>
              <Text style={styles.converterbuttontext}>Color skyblue</Text>
              <Text style={styles.converterbuttontext}/>
              <Text style={styles.converterbuttontext}>Precio: $15.90 USD</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate('Facturacion')}
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/camisah.jpeg')} />
              <Text style={styles.converterbuttontext}>Camisa Para caballero</Text>
              <Text style={styles.converterbuttontext}>Color Rojo</Text>
              <Text style={styles.converterbuttontext}/>
              <Text style={styles.converterbuttontext}>Precio: $5.99 USD</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate('Facturacion')}
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/pansh.jpg')} />
              <Text style={styles.converterbuttontext}>Duo de Pans para caballero</Text>
              <Text style={styles.converterbuttontext}>Color Azul-negro/Blanco</Text>
              <Text style={styles.converterbuttontext}/>
              <Text style={styles.converterbuttontext}>Precio: $25.90 USD</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.row}>
    <TouchableOpacity
    onPress={() => navigation.navigate('Facturacion')}
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/sueter.jpg')} />
              <Text style={styles.converterbuttontext}>Sueter para Dama</Text>
              <Text style={styles.converterbuttontext}>Color Rojo con Botones</Text>
              <Text style={styles.converterbuttontext}/>
              <Text style={styles.converterbuttontext}>Precio: $11.90 USD</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate('Facturacion')}
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/Jeans.jpeg')} />
              <Text style={styles.converterbuttontext}>Pantalon tiro alto para dama</Text>
              <Text style={styles.converterbuttontext}>Color skyblue</Text>
              <Text style={styles.converterbuttontext}/>
              <Text style={styles.converterbuttontext}>Precio: $18.50 USD</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate('Facturacion')}
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/blusa.jpg')} />
              <Text style={styles.converterbuttontext}>Blusa manga media para</Text>
              <Text style={styles.converterbuttontext}>Dama</Text>
              <Text style={styles.converterbuttontext}>Color verde musgo</Text>
              <Text style={styles.converterbuttontext}/>
              <Text style={styles.converterbuttontext}>Precio: $7.85 USD</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate('Facturacion')}
              style={styles.box}>
              <Image style={styles.img} source={require('../src/img/pans.jpg')} />
              <Text style={styles.converterbuttontext}>Duo de pans para Dama</Text>
              <Text style={styles.converterbuttontext}>Color gris/ocre</Text>
              <Text style={styles.converterbuttontext}/>
              <Text style={styles.converterbuttontext}>Precio: $27.99 USD</Text>
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
   backgroundColor:'#65B372',
   textAlign:'center',
   margin:5,
   alignItems:'center',
   minHeight:300,
  maxHeight:300,
  },
  reacompra:{
    minHeight:300,
    backgroundColor:'pink',
  },
  img:{
    maxWidth:170,
    maxHeight:170,
    marginTop:10,
    },
  contenedor:{
  flex:1,
  flexDirection: 'column',
},head:{
  fontSize:50,
  justifyContent:'center',
  backgroundColor:'#008000' ,
 },slogan:{
  justifyContent:'center',
  backgroundColor:'#DEBDBD' ,
 },
row:{
  flex:1,
  backgroundColor:'#198E2C',
  flexDiretion:'row',
},
titletex:{
  fontSize:40,
  textAlign:'center',
},body:{
  flex:1,
  flexDirection: 'row',
},
slogantex:{
  fontSize:20,
  textAlign:'center',
},
converterbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#224330',
    borderColor: '#FFFFFF',
    borderWidth: 3,
    maxHeight:200,
  },
})
