import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {weaponInfo} from "../statics/Mappings";
import Colors from "../../userSettings";

export default function CollectionCard({weaponObject}:any) {
    const windowWidth = Dimensions.get('window').width;
    const cardWidth = (windowWidth - 24) / 2;

    return(
        <View style={[styles.container, {width: cardWidth}]}>
            <Image
                source={{ uri: `https://media.valorant-api.com/weaponskinchromas/${weaponObject['ChromaID']}/fullrender.png` }}
                style={styles.weaponImage}
                resizeMode={'contain'}
            />
            <Text style={styles.weaponName}>{weaponInfo[weaponObject['ID'] as keyof typeof weaponInfo].name}</Text>
            <Image
                source={{ uri: `https://media.valorant-api.com/buddylevels/${weaponObject['CharmLevelID']}/displayicon.png` }}
                style={styles.weaponCharmImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        padding: 8,
        elevation: 4,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: Colors.backgroundSecondary,
    },
    weaponImage: {
        width: '100%',
        height: 48,
        marginBottom: 16,
    },
    weaponName: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },
    weaponCharmImage: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        width: 40,
        height: 40,
    },
});