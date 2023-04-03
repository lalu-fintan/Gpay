import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import KeyBoard from '../components/keyBoard';
import Feather from 'react-native-vector-icons/Feather';

const PasswordScreen = ({navigation}) => {
  const [password, setPassword] = useState([
    {
      value: '',
    },
    {
      value: '',
    },
    {
      value: '',
    },
    {
      value: '',
    },
  ]);
  const [indexCheck, setindexCheck] = useState([]);
  const [number, setNumber] = useState([
    {id: 1, value: 1},
    {id: 2, value: 2},
    {id: 3, value: 3},
    {id: 4, value: 4},
    {id: 5, value: 5},
    {id: 6, value: 6},
    {id: 7, value: 7},
    {id: 8, value: 8},
    {id: 9, value: 9},
    {id: 10, value: 0},
  ]);

  onPressValue = value => {
    console.log('length', indexCheck.length);
    const copy = indexCheck;
    const copyarr = [...password];
    if (value == 'back') {
      copy.pop();
      setindexCheck(copy);
      copyarr[copy.length].value = '';
      setPassword(copyarr);
    } else {
      console.log(value);

      copyarr[copy.length].value = value;
      setPassword(copyarr);

      copy.push(1);
      setindexCheck(copy);
    }
    if (copy.length >= 4) {
      navigation.navigate('homeScreen');
    }
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#000', height: '100%'}}>
        <View style={styles.passContainer}>
          <Image
            source={require('../Assets/Images/Google.png')}
            style={styles.Google}
            width={80}
            height={42}
          />
          <View style={styles.textcontent}>
            <Text style={styles.mainText}>Enter Google PIN</Text>
            <Text style={styles.mailText}>lalu.fintan@gmail.com</Text>
          </View>

          <View style={styles.passwordContainer}>
            {password.map((val, ind) => {
              let Styles =
                val.value != '' ? styles.passwordField2 : styles.passwordField1;
              return (
                <View style={[styles.passwordField1, Styles]} key={ind}></View>
              );
            })}
          </View>

          <View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot PIN?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#000'}}>
        <View style={styles.numberContainer}>
          {number.map(val => {
            return (
              <KeyBoard
                id={val.id}
                number={val.value}
                key={val.id}
                onPress={onPressValue}
              />
            );
          })}
          <TouchableOpacity
            onPress={() => onPressValue('back')}
            style={{position: 'absolute', bottom: 42, right: 80}}>
            <Feather name="delete" size={20} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({
  passContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  textcontent: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontWeight: '600',
  },
  mailText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    marginTop: 4,
  },
  passwordContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  passwordField1: {
    fontSize: 12,
    textAlign: 'center',
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: 'transparent',
    margin: 8,
    borderColor: '#fff',
  },
  passwordField2: {
    fontSize: 12,
    textAlign: 'center',
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#fff',

    margin: 8,
  },
  Google: {
    marginTop: 30,
  },
  numberContainer: {
    flexDirection: 'row',
    marginTop: 50,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#000',
  },

  forgot: {
    fontSize: 14,
    color: '#2571F0',
    marginTop: 8,
  },
});
