import React, {useState} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../userSettings";

// @ts-ignore
export default function BottomBarNavigation({ navigation }) {
    const [activeTab, setActiveTab] = useState('Home');

    function handlePagePress(tab: string) {
        console.log('Switching to ' + tab);
        navigation.navigate(tab);
        setActiveTab(tab);
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handlePagePress('Home')}>
                <MaterialCommunityIcons name={'home'} size={32} color={activeTab === 'Home' ? Colors.accent : Colors.textPrimary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePagePress('Collection')}>
                <MaterialCommunityIcons name={'bag-personal'} size={32} color={activeTab === 'Collection' ? Colors.accent : Colors.textPrimary} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.fabButton} onPress={() => handlePagePress('Profile')}>
                <Image source={{uri: `https://media.valorant-api.com/playercards/f32eb1e5-4cd3-0520-88a3-0cafb7423002/displayicon.png`}} // TODO
                       style={{width: 60, height: 60, borderRadius: 64}}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePagePress('Store')}>
                <MaterialCommunityIcons name={'cart'} size={32} color={activeTab === 'Store' ? Colors.accent : Colors.textPrimary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePagePress('Other')}>
                <MaterialCommunityIcons name={'apps'} size={32} color={activeTab === 'Other' ? Colors.accent : Colors.textPrimary} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: Colors.backgroundThird,
        height: 56,
        elevation: 8,
    },
    button: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabButton: {
        width: 64,
        height: 64,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        marginBottom: 26,
        backgroundColor: Colors.accent,
    },
});