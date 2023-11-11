import React, {useEffect, useRef} from 'react';
import {
    Animated, Easing, StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import { Colors } from './userSettings';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import changeNavigationBarColor from "react-native-navigation-bar-color";

import BottomBarNavigation from "./frontend/components/BottomBarNavigation";
import HomeScreen from "./frontend/HomeScreen";
import ProfileScreen from "./frontend/ProfileScreen";
import StoreScreen from "./frontend/StoreScreen";
import CollectionScreen from "./frontend/CollectionScreen";
import LoginScreen from "./frontend/LoginScreen";
import OthersScreen from "./frontend/OthersScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// @ts-ignore
function Splash({ navigation }) {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeInOut = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0.5,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: false,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: false,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: false,
            }),
        ]).start(() => fadeInOut());
    };

    const isLoggedIn = true;

    useEffect(() => {
        fadeInOut();
        const timer = setTimeout(() => {
            isLoggedIn ? navigation.navigate('Main') : navigation.navigate('Login');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.splashContainer}>
            <Animated.Image style={[styles.splashImage, { opacity: fadeAnim }]} source={require("./assets/icon.png")} resizeMode={'contain'} />
        </View>
    );
}

function Main() {
    changeNavigationBarColor(Colors.backgroundThird);

    return (
        <Tab.Navigator tabBar={(props) => <BottomBarNavigation {...props} />} >
            <Tab.Screen name={'Home'} component={HomeScreen} options={{headerShown: false}} />
            <Tab.Screen name={'Collection'} component={CollectionScreen} options={{headerShown: false}} />
            <Tab.Screen name={'Profile'} component={ProfileScreen} options={{headerShown: false}} />
            <Tab.Screen name={'Store'} component={StoreScreen} options={{headerShown: false}} />
            <Tab.Screen name={'Other'} component={OthersScreen} options={{headerShown: false}} />
        </Tab.Navigator>
    );
}

function App(): JSX.Element {
  console.log("App Loaded");
  StatusBar.setBackgroundColor(Colors.backgroundPrimary);
  changeNavigationBarColor(Colors.backgroundPrimary);

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Splash'}  >
            <Stack.Screen name={'Splash'} component={Splash} options={{headerShown: false}} />
            <Stack.Screen name={'Login'} component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name={'Main'} component={Main} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundPrimary,
  },
  splashImage: {
    width: 128,
    height: 128,
  },
});

export default App;
