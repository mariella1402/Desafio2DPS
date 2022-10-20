/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ejercicio1 from '../Ejercicio1/Ejercicio1';
import Ejercicio2 from '../Ejercicio2/Ejercicio2';
import Ejercicio3 from '../Ejercicio3/Ejercicio3';
import Menu from '../Menu';
import Facturacion from '../Ejercicio3/Facturacion'
const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{title: 'Menu Principal', headerTitleAlign:'center'}}
      />
      <Stack.Screen
        name="Ejercicio1"
        component={Ejercicio1}
        options={{title: 'Ejercicio 1 (Calculadora)', headerTitleAlign:'center'}}
      />
      <Stack.Screen
        name="Ejercicio2"
        component={Ejercicio2}
        options={{title: 'Ejercicio 2 (Conversor de Moneda)', headerTitleAlign:'center'}}
      />
      <Stack.Screen
        name="Ejercicio3"
        component={Ejercicio3}
        options={{title: 'Ejercicio 3 (Tienda en Linea)', headerTitleAlign:'center'}}
        />
        <Stack.Screen
        name="Facturacion"
        component={Facturacion}
        options={{title: 'Facturacion', headerTitleAlign:'center'}}
      />
    </Stack.Navigator>
  );
}
