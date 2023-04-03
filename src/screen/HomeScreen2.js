import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  // Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import ProfileCard from '../components/profileCard';
import {userDetails, userPlatform, iconsList} from '../utilities/Data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconField from '../components/IconField';
// import {Svg, Path} from 'react-native-svg';
// import Blob from '../Assets/blob/blob.svg';
import {useClipboard} from '@react-native-clipboard/clipboard';

const width = Dimensions.get('screen');

const HomeScreen = () => {
  const [data, setString] = useClipboard();

  useEffect(() => {
    setString('40yq8i');
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: '#000'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../Assets/Images/background.png')}
          style={styles.topBackground}>
          <View style={styles.homeHeader}>
            <View style={styles.searchField}>
              <Ionicons
                name="search"
                size={20}
                style={{alignSelf: 'center'}}
                color={'#fff'}
              />
              <TextInput
                placeholder="Pay friends and merchants"
                style={styles.input}
                placeholderTextColor={'#808080'}
              />
            </View>
            <TouchableOpacity>
              <View style={styles.profileImg}>
                <Text style={styles.profileText}>L</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.downContainer}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {iconsList.map(icon => {
              return (
                <IconField key={icon.id} icon={icon.icon} title={icon.title} />
              );
            })}
          </View>
          <View style={{marginBottom: 15}}>
            <Text style={styles.userTitle}>People</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                // alignItems: 'center',
              }}>
              {userDetails.map(value => {
                return (
                  <ProfileCard
                    key={value.id}
                    name={value.name}
                    image={value.profile}
                  />
                );
              })}
              <TouchableOpacity style={styles.circle}>
                <View>
                  <AntDesign name="down" size={20} style={styles.arrow} />
                  <Text style={styles.morebtn}>More</Text>
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
                    color={'#fff'}
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
                <View style={styles.circle2}>
                  <AntDesign name="down" size={20} style={styles.arrow} />
                  <Text style={styles.morebtn}>More</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.userTitle2}>Manage your money</Text>
            <View style={styles.manage}>
              <TouchableOpacity style={styles.loanbtn}>
                <View style={styles.loans}>
                  <FontAwesome5 name="money-bill" size={22} color={'#fff'} />
                  <Text style={styles.loantext}>Loans</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.loans}>
                  <MaterialCommunityIcons
                    name="gold"
                    size={22}
                    color={'#fff'}
                  />
                  <Text style={styles.loantext}>Gold</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
              <TouchableOpacity style={styles.bottomCon}>
                <View style={styles.bottomContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Entypo name="back-in-time" size={24} color={'#0E86D4'} />
                    <Text
                      style={{
                        color: '#fff',
                        marginLeft: 15,
                        fontSize: 14,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      Show transaction history
                    </Text>
                  </View>
                  <Entypo
                    name="chevron-small-right"
                    size={24}
                    color={'#808080'}
                    style={{marginRight: 15}}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.bottomContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons
                      name="bank"
                      size={24}
                      color={'#0E86D4'}
                    />
                    <Text
                      style={{
                        color: '#fff',
                        marginLeft: 15,
                        fontSize: 14,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      Check bank balance
                    </Text>
                  </View>
                  <Entypo
                    name="chevron-small-right"
                    size={24}
                    color={'#808080'}
                    style={{
                      marginRight: 15,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {/* <Svg
              width={500}
              height={140}
              viewBox="0 0 1440 320"
              style={styles.svg}>
              <Path
                d="M0,96L60,133.3C120,171,240,245,360,229.3C480,213,600,107,720,96C840,85,960,171,1080,192C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                fill="#454545"
              />
            </Svg> */}
            <View
              style={{
                backgroundColor: '#2E2E2E',
                height: 500,
              }}>
              <View
                style={{
                  height: 280,
                  backgroundColor: '#454545',
                  marginTop: 30,
                }}>
                <Text style={styles.inviteText}>
                  Invite friends to get
                  <FontAwesome5
                    name="rupee-sign"
                    size={12}
                    style={styles.rupees}
                    color={'#fff'}
                  />
                  120
                </Text>
                <Text style={styles.inviteDescription}>
                  Invite friends to google pay and get
                  <FontAwesome5
                    name="rupee-sign"
                    size={12}
                    style={styles.rupees}
                    color={'#fff'}
                  />
                  201 when your friend sends their first payment . they get
                  <FontAwesome5
                    name="rupee-sign"
                    size={12}
                    style={styles.rupees}
                    color={'#fff'}
                  />
                  21!
                </Text>
                <View>
                  <Text>{data}</Text>
                </View>
              </View>
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
  topBackground: {
    width: '100%',
    height: 300,
  },
  GpayImg: {
    width: 90,
    height: 26,
    marginTop: 22,
  },
  searchField: {
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 18,
    backgroundColor: '#2E2E2E',
    width: '82%',
    height: 50,
    borderRadius: 50,
    paddingLeft: 12,
    borderWidth: 0.5,
    borderColor: '#808080',
  },
  input: {
    paddingLeft: 15,
    width: '80%',
  },
  profileImg: {
    backgroundColor: 'skyblue',
    marginRight: 14,
    marginTop: 12,
    padding: 10,
    borderRadius: 30,
    width: 40,
    height: 40,
  },
  profileText: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  downContainer: {
    backgroundColor: '#2E2E2E',
    maxHeight: 1400,
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
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#454545',
    // marginTop: 10,
    marginLeft: 34,
  },
  arrow: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff',
    marginTop: 22,
  },
  circle2: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#454545',
    marginTop: 4,
    marginLeft: 34,
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
  morebtn: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },

  businessHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  explorebtn: {
    backgroundColor: '#454545',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 26,
    marginTop: 38,
    marginBottom: 20,
    padding: 8,
    borderRadius: 12,
  },
  exploreLogo: {
    paddingLeft: 4,
    paddingRight: 6,
  },
  exploreText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  loans: {
    flexDirection: 'row',
    width: 100,
    height: 40,
    borderColor: '#E5E5E5',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 30,
    marginTop: 10,
  },
  manage: {
    flexDirection: 'row',
  },
  loantext: {
    marginLeft: 10,
    color: '#fff',
  },
  bottom: {
    marginTop: 30,
    marginLeft: 28,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bottomCon: {
    marginBottom: 5,
  },
  svg: {
    // position: 'absolute',
    // bottom: 30,
  },
  inviteText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 20,
    marginTop: 15,
    color: '#fff',
  },
  rupees: {},
  inviteDescription: {
    color: '#fff',
    marginLeft: 20,
    width: 400,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginTop: 8,
    flexWrap: 'wrap',
  },
});
