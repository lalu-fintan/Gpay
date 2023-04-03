import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const profileCard = ({name, image}) => {
  return (
    <>
      <View style={styles.profileContainer}>
        <ImageBackground>
          <TouchableOpacity style={styles.profilebtn}>
            <View style={styles.circle}>
              <Image
                source={image}
                style={styles.profileImg}
                objectFit={'cover'}
              />
            </View>
            <Text style={styles.userName} numberOfLines={1}>
              {name}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
};

export default profileCard;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    // marginRight: 2,
    justifyContent: 'space-between',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userName: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  profilebtn: {
    marginBottom: 15,
    paddingLeft: 34,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
