import React, {useEffect} from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

import { Colors } from './userSettings';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TemporaryScreen from "./frontend/TemporaryScreen";
import BottomBarNavigation from "./frontend/components/BottomBarNavigation";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// @ts-ignore
function Splash({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Main')
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.splashContainer}>
            <Image style={styles.splashImage} source={require("./assets/icon.png")} resizeMode={'contain'} />
        </View>
    );
}

function Main() {
    return (
            <Tab.Navigator tabBar={(props) => <BottomBarNavigation {...props} />} >
                <Tab.Screen name={'Home'} component={TemporaryScreen} />
                <Tab.Screen name={'Collection'} component={TemporaryScreen} />
                <Tab.Screen name={'Profile'} component={TemporaryScreen} />
                <Tab.Screen name={'Store'} component={TemporaryScreen} />
                <Tab.Screen name={'Other'} component={TemporaryScreen} />
            </Tab.Navigator>
    );
}

function App(): JSX.Element {
  console.log("App reloaded");

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Splash'}  >
            <Stack.Screen name={'Splash'} component={Splash} options={{headerShown: false}} />
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
