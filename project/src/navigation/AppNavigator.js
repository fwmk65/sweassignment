import * as React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import LoginScreen from '../screens/LoginScreen';
import AdminScreen from '../screens/AdminScreen';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import SignIn from '../screens/SignIn';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  const [enableLogin, setEnableLogin] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#005EB8'} />
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor="#00000090"
        screenOptions={styles.drawerStyles}>
        <Drawer.Screen
          name="Doncaster Royal Infirmary"
          component={Home}
          options={{
            headerRight: () => (
              <View style={{paddingRight: 15}}>
                <TouchableOpacity onPress={() => setEnableLogin(true)}>
                  <Feather name={'user'} size={25} color={'white'} />
                </TouchableOpacity>
                {enableLogin && (
                  <LoginScreen
                    closeModal={() => {
                      setEnableLogin(false);
                    }}
                  />
                )}
              </View>
            ),
          }}
        />
        <Drawer.Screen name="Admin" component={AdminScreen} />
        <Drawer.Screen name="Admin 2" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerStyles: {
    headerShown: true,
    overlayColor: 'transparent',
    swipeEnabled: true,
    gestureEnabled: true,
    headerTitleAlign: 'left',
    headerStyle: {
      backgroundColor: '#005EB8',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontSize: 20,
    },
    drawerStyle: {
      backgroundColor: '#F8F8F8',
      width: '70%',
      zIndex: 0,
      top: 56,
    },
  },
});
