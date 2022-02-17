import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Input from '../components/Input';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const LoginScreen = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const firstLineRef = React.createRef();
  const {closeModal} = props;
  const [enable, setEnable] = useState(true);
  const [loader, setLoader] = useState(true);
  const [isSignIn, setIsSignIn] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);
  // useEffect(() => {
  //   Animated.stagger(100, [
  //     Animated.parallel([firstLineRef.current.getAnimated()], {
  //       duration: 1000,
  //     }),
  //   ]).start();
  // }, []);
  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: isSignIn ? 250 : 370,
      duration: 500,
      useNativeDriver: false,
    }).start(result => {
      setLoader(true);
    });
    setLoader(false);
  }, [scaleAnim, isSignIn, isSignUp]);

  return (
    <Modal
      visible={enable}
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        setEnable(false);
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setEnable(false);
          closeModal();
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            flex: 1,
            position: 'absolute',
            width: windowWidth,
            height: windowHeight,
          }}
        />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[
          styles.loginView,
          {
            height: scaleAnim,
          },
        ]}>
        <View style={{flexDirection: 'row', height: 50, marginBottom: 20}}>
          <TouchableOpacity
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: !isSignIn ? '#E8EDEE' : '#fff',
              borderTopLeftRadius: 10,
            }}
            onPress={() => {
              setIsSignUp(false);
              setTimeout(() => {
                setIsSignIn(true);
              }, 400);
            }}>
            <Text style={{color: isSignIn ? '#768692' : '#ccc'}}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: !isSignUp ? '#E8EDEE' : '#fff',

              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setIsSignIn(false);
              setTimeout(() => {
                setIsSignUp(true);
              }, 600);
            }}>
            <Text style={{color: isSignUp ? '#768692' : '#ccc'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        {isSignIn && (
          <Animated.View style={{flex: 1, opacity: fadeAnim}}>
            <ShimmerPlaceHolder
              style={{
                height: 160,
                borderRadius: 5,
                width: windowWidth * 0.7,
              }}
              duration={500}
              location={[0.3, 0.5, 0.7]}
              shimmerColors={['#ffffff', '#e8e8e8', '#ffffff']}
              visible={loader}>
              <Input label={'Username'} onInputChange={val => {}} />

              <Input
                label={'Password'}
                secureText={true}
                onInputChange={val => {}}
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
                    <Text style={{color: '#fff'}}>LOGIN</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ShimmerPlaceHolder>
          </Animated.View>
        )}

        {isSignUp && (
          <Animated.View style={{flex: 1, opacity: fadeAnim}}>
            <ShimmerPlaceHolder
              style={{
                height: 280,
                borderRadius: 5,
                width: windowWidth * 0.7,
              }}
              duration={500}
              location={[0.3, 0.5, 0.7]}
              shimmerColors={['#ffffff', '#e8e8e8', '#ffffff']}
              visible={loader}>
              <Input label={'Username'} onInputChange={val => {}} />
              <Input label={'Email'} onInputChange={val => {}} />
              <Input
                label={'Password'}
                secureText={true}
                onInputChange={val => {}}
              />
              <Input
                label={'Confirm Password'}
                secureText={true}
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
                    <Text style={{color: '#fff'}}>SIGN UP</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ShimmerPlaceHolder>
          </Animated.View>
        )}
      </Animated.View>
    </Modal>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  loginView: {
    width: windowWidth * 0.8,

    left: windowWidth * 0.1,
    top: windowHeight * 0.1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: windowHeight * 0.1,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});

export default LoginScreen;
