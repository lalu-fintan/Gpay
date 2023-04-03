import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ProfileCard from '../components/profileCard';
import {userDetails, userPlatform} from '../utilities/Data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#000'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.homeHeader}>
          <TouchableOpacity>
            <Image
              source={require('../Assets/Images/QR.png')}
              style={styles.logo}
              width={25}
              height={25}
            />
          </TouchableOpacity>
          <Image
            source={require('../Assets/Images/Gpay1.png')}
            style={styles.GpayImg}
          />
          <TouchableOpacity>
            <View style={styles.profileImg}>
              <Text style={styles.profileText}>L</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.slideImg}>
          <Image
            source={require('../Assets/Images/Goodiepay.png')}
            style={styles.slideTop}
          />
          <Image
            source={require('../Assets/Images/goodiepay2.png')}
            style={styles.slideBottom}
          />
        </View>

        <View style={styles.downContainer}>
          <View style={styles.smallBar}></View>
          <View>
            <Text style={styles.userTitle}>People</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {userDetails.map(value => {
                return (
                  <ProfileCard
                    key={value.id}
                    name={value.name}
                    image={value.profile}
                  />
                );
              })}
              <TouchableOpacity>
                <View style={styles.circle}>
                  <AntDesign name="down" size={24} style={styles.arrow} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.businessHeader}>
              <Text style={styles.userTitle2}>Business and Bills</Text>
              <TouchableOpacity>
                <View style={styles.explorebtn}>
                  <Entypo
                    name="shopping-bag"
                    size={16}
                    color={'#2571F0'}
                    style={styles.exploreLogo}
                  />
                  <Text style={styles.exploreText}>Explore</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {userPlatform.map(value => {
                return (
                  <ProfileCard
                    key={value.id}
                    name={value.name}
                    image={value.profile}
                  />
                );
              })}
              <TouchableOpacity>
                <View style={styles.circle}>
                  <AntDesign name="down" size={24} style={styles.arrow} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    marginTop: 16,
    marginLeft: 20,
  },
  GpayImg: {
    width: 90,
    height: 26,
    marginTop: 22,
  },
  profileImg: {
    backgroundColor: '#DEECF1',
    marginRight: 20,
    marginTop: 22,
    padding: 10,
    borderRadius: 30,
    width: 40,
    height: 40,
  },
  profileText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slideImg: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideTop: {
    width: 200,
    height: 50,
  },
  slideBottom: {
    width: 187,
    height: 127.44,
    marginTop: 16,
  },
  downContainer: {
    backgroundColor: '#808080',
    opacity: 0.6,
    height: 800,
    borderRadius: 5,
    marginTop: 8,
  },
  smallBar: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: 52,
    height: 6,
    borderRadius: 30,
    marginTop: 10,
  },
  userTitle: {
    color: '#fff',
    opacity: 1,
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'Poppins-Medium',
    marginLeft: 36,
    marginTop: 10,
    paddingBottom: 20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 48,
  },
  arrow: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#000',
    marginTop: 14,
  },
  userTitle2: {
    color: '#fff',
    opacity: 1,
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'Poppins-Medium',
    marginLeft: 36,
    marginTop: 40,
    paddingBottom: 20,
  },
  businessHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  explorebtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 26,
    marginTop: 38,
    padding: 8,
    borderRadius: 12,
  },
  exploreLogo: {
    paddingLeft: 4,
    paddingRight: 6,
  },
  exploreText: {
    color: '#2571F0',
    fontWeight: '700',
    fontSize: 12,
  },
});
