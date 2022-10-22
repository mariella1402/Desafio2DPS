/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Button} from 'react-native';

export default function Menu(props) {
  const {navigation} = props;
  return (
    <View>
      <View>
        <Button
          style={''}
          title="CALCULADORA"
          color={'#68C991'}
          onPress={() => navigation.navigate('Ejercicio1')}
          />
        <Button
          title="CONVERSOR DE MONEDA"
          color={'#68C991'}
          onPress={() => navigation.navigate('Ejercicio2')}
          />
        <Button
          title="TIENDA MIMI"
          color={'#68C991'}
          onPress={() => navigation.navigate('Ejercicio3')}
          />
      </View>
    </View>
  );
}
