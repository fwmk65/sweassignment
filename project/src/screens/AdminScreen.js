import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {BottomSheet, ListItem} from 'react-native-elements';

import Input from '../components/Input';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import LoginScreen from './LoginScreen';

const AdminScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {title: 'List Item 1'},
    {title: 'List Item 2'},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: '#0072CE'},
      titleStyle: {color: 'white'},
      onPress: () => setIsVisible(false),
    },
  ];
  const [enableLogin, setEnableLogin] = useState(true);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingRight: 15}}>
        {enableLogin && (
          <LoginScreen
            closeModal={() => {
              setEnableLogin(false);
            }}
          />
        )}
      </View>
      {!enableLogin && (
        <View style={styles.adminView}>
          <Input
            label={'Room No'}
            inputTextStyle={styles.inputStyle}
            onInputChange={val => {}}
          />
          <Input label={'Room Name'} onInputChange={val => {}} />
          <Input
            label={'Room Description'}
            inputTextStyle={{height: 80}}
            onInputChange={val => {}}
            multiline={true}
          />
          <Input label={'Floor'} onInputChange={val => {}} />
          <Input label={'Latitude'} onInputChange={val => {}} />
          <TouchableOpacity
            disabled={false}
            onPress={() => {
              setIsVisible(true);
            }}
            style={styles.selectServices}>
            <Text
              style={{
                color: 'grey',
              }}>
              Category
            </Text>
            <View>
              <Feather name="chevron-down" size={20} color={'#E2E2E2'} />
            </View>
          </TouchableOpacity>
          <Input
            label={'Longitude'}
            onInputChange={val => {
              console.log(val);
            }}
          />
          <View style={styles.loginButton}>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0072CE',
                  width: windowWidth * 0.7,
                  height: 35,
                  shadowColor: '#470000',
                  shadowOffset: {width: 5, height: 5},
                  shadowOpacity: 0.6,
                  elevation: 4,
                }}>
                <Text style={{color: '#fff', fontSize: 18}}>SAVE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <RoomCard
            checked={true}
            roomNo={'112'}
            roomTitle={'Administration Office'}
            roomDes={
              'Dummy Text, Why not use the free Park & Ride service from Doncaster racecourse - free parking with free shuttle buses.'
            }
            sNo={'01'}
          />
          <RoomCard
            checked={true}
            roomNo={'111'}
            roomTitle={'Room Two'}
            roomDes={
              'Dummy Text, Why not use the free Park & Ride service from Doncaster racecourse - free parking with free shuttle buses.'
            }
            sNo={'02'}
          />
          <BottomSheet
            isVisible={isVisible}
            containerStyle={styles.bottomSheetContainer}>
            {list.map((l, i) => (
              <ListItem
                key={i}
                containerStyle={l.containerStyle}
                onPress={() => {
                  setIsVisible(false);
                }}>
                <ListItem.Content>
                  <ListItem.Title style={l.titleStyle}>
                    {l.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </BottomSheet>
        </View>
      )}
    </ScrollView>
  );
};

const RoomCard = props => {
  const [isChecked, setIsChecked] = useState(false);

  const {checked, roomNo, roomTitle, roomDes, sNo} = props;
  return (
    <View
      style={{
        width: windowWidth * 0.85,
        height: 140,
        marginTop: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#470000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.2,
        elevation: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          width: '100%',
          borderBottomWidth: 1,
          borderColor: '#ccc',
        }}>
        <View
          style={{
            width: '12%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 13,
          }}>
          <CheckBox
            tintColors={{
              true: '#0072CE',
              false: '#ccc',
            }}
            value={isChecked}
            onValueChange={() => {
              setIsChecked(!isChecked);
            }}
          />
        </View>
        <View
          style={{
            width: '13%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 13,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#768692'}}>
            {roomNo}
          </Text>
        </View>
        <View
          style={{
            width: '53%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#768692'}}>
            {roomTitle}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{padding: 7}}>
            <TouchableOpacity onPress={() => {}}>
              <Feather name="edit" size={20} color={'darkorange'} />
            </TouchableOpacity>
          </View>
          <View style={{padding: 7}}>
            <TouchableOpacity onPress={() => {}}>
              <Feather name="trash-2" size={20} color={'red'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 85,
            width: '20%',
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#aaa', fontSize: 20}}>{sNo}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 85,
            width: '80%',
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: 10,
            }}>
            <Text style={{color: '#768692'}}>{roomDes}</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', height: 5}} />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)',
  },
  selectServices: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#A0A0A0',
    borderRadius: 3,
    paddingVertical: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    width: windowWidth * 0.7,
    justifyContent: 'space-between',
  },
  adminView: {
    flex: 1,
    width: windowWidth,
    paddingBottom: 20,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  inputStyle: {
    width: windowWidth * 0.7,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 13,
  },
});

export default AdminScreen;
