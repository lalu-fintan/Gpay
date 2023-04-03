import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const keyBoard = props => {
  return (
    <View>
      <TouchableOpacity
        style={styles.keyBoardContainer}
        onPress={() => props.onPress(props.id)}>
        <Text style={styles.numValue}>{props.number}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default keyBoard;

const styles = StyleSheet.create({
  keyBoardContainer: {
    padding: 20,
    marginBottom: 20,
    marginRight: 30,
    marginLeft: 40,
    width: 65,
    height: 68,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  numValue: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
});
