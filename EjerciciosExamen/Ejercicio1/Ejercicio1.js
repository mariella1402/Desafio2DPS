/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Calc from './Funcion';
import Operacion from './Operacion';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      numerator: '',
      denominator: '',
      operator: '',
      switchFractionSection: false,
    };
  }

  clear() {
    this.setState((state, props) => ({display: ''}));
  }

  evalutate(x, y, operator) {
    if (operator == '+') {
      this.setState((state, props) => ({display: parseInt(x) + parseInt(y)}));
      this.setState((state, props) => ({switchFractionSection: false}));
    } else if (operator == '-') {
      this.setState((state, props) => ({display: parseInt(x) - parseInt(y)}));
      this.setState((state, props) => ({switchFractionSection: false}));
    } else if (operator == 'x') {
      this.setState((state, props) => ({display: parseInt(x) * parseInt(y)}));
      this.setState((state, props) => ({switchFractionSection: false}));
    } else if (operator == '/') {
      this.setState((state, props) => ({display: parseInt(x) / parseInt(y)}));
      this.setState((state, props) => ({switchFractionSection: false}));
    } else if (operator == '√') {
      this.setState((state, props) => ({display: Math.sqrt(parseInt(y))}));
      this.setState((state, props) => ({switchFractionSection: false}));
    }
    else {
      this.setState((state, props) => ({display: this.factorial(parseInt(y))}));
      this.setState((state, props) => ({switchFractionSection: false}));
    }
    this.setState(prevState => ({denominator: ''}));
    this.setState(prevState => ({numerator: ''}));
  }
  addNumber(x) {
    this.setState((state, props) => ({display: state.display + x}));
    if (this.state.switchFractionSection == true) {
      this.setState((state, props) => ({denominator: state.denominator + x}));
    } else {
      this.setState((state, props) => ({numerator: state.numerator + x}));
    }
  }
  factorial(n) {
    if (n === 0) return 1;
    let f = 1;
    for (let i = 1; i < n; i++) {
        f = f * (i + 1);
    }
    return f;
  }
  
  operatorSymbol(x) {
    if (
      this.state.numerator == '' &&
      this.state.switchFractionSection == false
    ) {
      this.setState((state, props) => ({numerator: this.state.display}));
    }

    this.setState((state, props) => ({display: state.display + x}));
    this.setState((state, props) => ({operator: x}));
    this.setState((state, props) => ({switchFractionSection: true}));
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Calculdora SM</Text>
        </View>
        <View style={styles.display}>
          <Text style={styles.title}>{this.state.display}</Text>
        </View>
        <View style={styles.calcKeyRow}>
          <Calc displayKey="1" onClick={() => this.addNumber('1')} />
          <Calc displayKey="2" onClick={() => this.addNumber('2')} />
          <Calc displayKey="3" onClick={() => this.addNumber('3')} />
        </View>
        <View style={styles.calcKeyRow}>
          <Calc displayKey="4" onClick={() => this.addNumber('4')} />
          <Calc displayKey="5" onClick={() => this.addNumber('5')} />
          <Calc displayKey="6" onClick={() => this.addNumber('6')} />
        </View>
        <View style={styles.calcKeyRow}>
          <Calc displayKey="7" onClick={() => this.addNumber('7')} />
          <Calc displayKey="8" onClick={() => this.addNumber('8')} />
          <Calc displayKey="9" onClick={() => this.addNumber('9')} />
        </View>
        <View style={styles.calcKeyRow}>
          <Calc displayKey="0" onClick={() => this.addNumber('0')} />
          <Calc onClick={() => this.clear()} displayKey="AC" />
          <Calc
            displayKey="="
            onClick={() =>
              this.evalutate(
                this.state.numerator,
                this.state.denominator,
                this.state.operator,
              )
            }
          />
        </View>
        <View style={styles.calcKeyRow}>
          <Operacion
            displayKey="+"
            onClick={() => this.operatorSymbol('+')}
          />
          <Operacion
            displayKey="-"
            onClick={() => this.operatorSymbol('-')}
          />
          <Operacion
            displayKey="*"
            onClick={() => this.operatorSymbol('x')}
          />
          <Operacion
            displayKey="/"
            onClick={() => this.operatorSymbol('/')}
          />
          <Operacion
            displayKey="√"
            onClick={() => this.operatorSymbol('√')}
          />
          <Operacion
            displayKey="!"
            onClick={() => this.operatorSymbol('!')}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#224330',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  display: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
    width: '70%',
    height: '10%',
  },

  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 36,
  },

  calcKeyRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});
