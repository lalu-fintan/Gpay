import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const IconField = ({icon, title}) => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity>
        <Image source={icon} style={styles.iconSize} />
        <Text style={styles.iconText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IconField;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 25,
    flexWrap: 'wrap',
    marginRight: 16,
    marginTop: 30,
    // marginBottom: 10,
  },
  iconSize: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  iconText: {
    width: 55,
    height: 30,
    flexWrap: 'wrap',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    color: '#fff',
  },
});
