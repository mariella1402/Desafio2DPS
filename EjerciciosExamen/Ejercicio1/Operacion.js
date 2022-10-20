/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class OperatorKeys extends Component {
  render() {
    return (
      <View style={styles.calcKey}>
        <TouchableOpacity
          onPress={() => {
            this.props.onClick();
          }}>
          <Text style={styles.textDisplay}>{this.props.displayKey}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calcKey: {
    backgroundColor: '#346549',
    flex: 0.2,
  },

  textDisplay: {
    color: 'white',
    textAlign: 'center',
    fontSize: 36,
  },
});
