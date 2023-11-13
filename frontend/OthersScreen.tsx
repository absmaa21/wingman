import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../userSettings";
import BattlePassCalculatorScreen from "./misc/BattlePassCalculatorScreen";
import CollectionScreen from "./misc/CollectionScreen";

const Stack = createNativeStackNavigator();

export default function OthersScreen() {
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName={'Main'} screenOptions={{
                headerBackButtonMenuEnabled: true,
                headerStyle: {backgroundColor: Colors.backgroundPrimary},
                headerShadowVisible: false,
                headerTintColor: Colors.textPrimary,
                headerTitleAlign: 'center'
            }} >
                <Stack.Screen name={'Main'} component={Main} options={{headerShown: false}} />
                <Stack.Screen name={'Collection'} component={CollectionScreen} />
                <Stack.Screen name={'BattlePassCalculator'} component={BattlePassCalculatorScreen} options={{headerTitle: 'Battle Pass Calculator'}} />
                <Stack.Screen name={'StoreAlert'} component={Main} options={{headerTitle: 'Store Alert'}} />
                <Stack.Screen name={'Settings'} component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Main({ navigation }: any) {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Collection')} >
                <MaterialCommunityIcons name={'bag-personal'} size={96} color={Colors.textPrimary} />
                <Text style={styles.header}>Collection</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BattlePassCalculator')} >
                <MaterialCommunityIcons name={'calculator'} size={96} color={Colors.textPrimary} />
                <Text style={styles.header}>BP Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('StoreAlert')} >
                <MaterialCommunityIcons name={'star'} size={96} color={Colors.textPrimary} />
                <Text style={styles.header}>Store Alert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Settings')} >
                <MaterialCommunityIcons name={'cog'} size={96} color={Colors.textPrimary} />
                <Text style={styles.header}>Settings</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 8,
        gap: 8,
        justifyContent: 'space-between',
        backgroundColor: Colors.backgroundPrimary,
    },
    card: {
        flex: 1,
        minWidth: 164,
        width: 'auto',
        height: 170,
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        backgroundColor: Colors.backgroundSecondary,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.textSecondary,
    },
});