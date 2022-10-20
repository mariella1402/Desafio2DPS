/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ejercicio1 from '../Ejercicio1/Ejercicio1';
import Ejercicio2 from '../Ejercicio2/Ejercicio2';
import Ejercicio3 from '../Ejercicio3/Ejercicio3';
import Menu from '../Menu';
import Facturacion1 from '../Ejercicio3/Facturacion/Facturacion1';
import Facturacion2 from '../Ejercicio3/Facturacion/Facturacion2';
import Facturacion3 from '../Ejercicio3/Facturacion/Facturacion3';
import Facturacion4 from '../Ejercicio3/Facturacion/Facturacion4';
import Facturacion5 from '../Ejercicio3/Facturacion/Facturacion5';
import Facturacion6 from '../Ejercicio3/Facturacion/Facturacion6';
import Facturacion7 from '../Ejercicio3/Facturacion/Facturacion7';
import Facturacion8 from '../Ejercicio3/Facturacion/Facturacion8';

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
        name="Facturacion1"
        component={Facturacion1}
        options={{title: 'Facturacion', headerTitleAlign:'center'}}
      />
      <Stack.Screen
        name="Facturacion2"
        component={Facturacion2}
        options={{title: 'Facturacion', headerTitleAlign:'center'}}
      />
      <Stack.Screen
        name="Facturacion3"
        component={Facturacion3}
        options={{title: 'Facturacion', headerTitleAlign:'center'}}
      />
        <Stack.Screen
        name="Facturacion4"
        component={Facturacion4}
        options={{title: 'Facturacion', headerTitleAlign:'center'}}
      />
       <Stack.Screen
        name="Facturacion5"
        component={Facturacion5}
        options={{title: 'Facturacion', headerTitleAlign:'center'}}
      />
        <Stack.Screen
        name="Facturacion6"
        component={Facturacion6}
        options={{title: 'Facturacion', headerTitleAlign:'center'}}
      />
        <Stack.Screen
        name="Facturacion7"
        component={Facturacion7}
        options={{title: 'Facturacion', headerTitleAlign:'center'}}
      />
        <Stack.Screen
        name="Facturacion8"
        component={Facturacion8}
        options={{title: 'Facturacion', headerTitleAlign:'center'}}
      />


    </Stack.Navigator>
  );
}
