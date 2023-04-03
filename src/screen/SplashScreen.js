import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Logo from '../Assets/Images/logo.png';
import BottomLogo from '../Assets/Images/Vector.png';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('passwordScreen');
  }, 1500);
  return (
    <SafeAreaView>
      <View style={styles.splashContainer}>
        <View></View>
        <Image source={Logo} style={styles.centerLogo} />
        <Image source={BottomLogo} style={styles.bottomLogo} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',

    justifyContent: 'space-between',
  },
  centerLogo: {
    width: 150,
    height: 127.73,
    alignSelf: 'center',
  },
  bottomLogo: {
    width: 145,
    height: 48,
    alignSelf: 'center',
    marginBottom: 40,
  },
});
