/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

const currencyPerRupee = {
  DOLLAR: 1.0,
  EURO: 1.0145,
  COLON: 8.6685,
  PESOM: 19.969,
  LIBRAE: 0.878,
  FRANCO: 0.9934,
};

const currencysim = {
  DOLLAR: '$',
  EURO: '€',
  COLON: '₡',
  PESOM: 'MXN$',
  LIBRAE: '£',
  FRANCO: 'Fr',
};

export default class Conversor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      resultValue: '0.00',
    };
  }
  buttonPressed = currency => {
    if (this.state.inputValue === '') {
      Alert.alert('Ingrese la cantidad en USD');
    } else {
      let result = (parseFloat(this.state.inputValue) * currencyPerRupee[currency]);
      let result1 = currencysim[currency];
      this.setState({resultValue: result.toFixed(2) + " " + result1});

    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenView}>
          <View style={styles.resultContainer}>
            <TextInput
              style={styles.input}
              selectionColor="#FFF"
              keyboardType="numeric"
              textAlign="center"
              placeholder="Cantidad en (USD)"
              value={this.state.inputValue}
              onChangeText={inputValue => this.setState({inputValue})}
            />
          </View>

          <View style={styles.converterbuttoncontainer}>
            <TouchableOpacity
              onPress={() => this.buttonPressed('EURO')}
              style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>Euro</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.buttonPressed('COLON')}
              style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>Colon Salvadoreño</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.buttonPressed('PESOM')}
              style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>Peso Mexicano</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.buttonPressed('LIBRAE')}
              style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>Libra Esterlina</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.buttonPressed('FRANCO')}
              style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>Franco Suizo</Text>
            </TouchableOpacity>
            <View style={styles.inputcontainer}>
              <Text style={styles.resultValue}>
                ={this.state.resultValue} {this.buttonPressed}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  screenView: {
    flex: 1,
    alignItems: 'center',
  },
  resultContainer: {
    height: 60,
    width: 400,
    marginTop: 50,
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    backgroundColor: '#779885',
    alignItems: 'center',
    borderWidth: 2,
  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inputcontainer: {
    height: 75,
    width: 390,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#ffffff',
    backgroundColor: '#779885',
  },
  input: {
    color: '#FFFFFF',
    fontSize: 30,
    width: 305,
    justifyContent: 'center',
  },
  converterbuttoncontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  converterbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#224330',
    height: 75,
    borderColor: '#FFFFFF',
    borderWidth: 3,
    width: '50%',
  },
  converterbuttontext: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
