import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../components/Input';
import Feather from 'react-native-vector-icons/Feather';
import MapViewSVG from '../components/MapViewSVG';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{position: 'absolute', marginLeft: windowWidth * 0.125}}>
        <TouchableOpacity
          style={{position: 'absolute', right: 10, top: 35, zIndex: 2}}>
          <View>
            <Feather name="mic" size={20} color={'#005EB8'} />
          </View>
        </TouchableOpacity>
        <Input
          placeholder={'Search'}
          inputTextStyle={styles.searchBox}
          onInputChange={val => {
            console.log(val);
          }}
        />
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            flex: 1,
            zIndex: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.mapParentView}>
            <MapViewSVG />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    top: 15,
    zIndex: 1,
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    width: windowWidth * 0.75,
    borderWidth: 0,
    shadowColor: '#470000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.6,
    elevation: 3,
  },
  mapParentView: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
});

export default Home;
