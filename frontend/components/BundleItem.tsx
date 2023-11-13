import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../userSettings";

// @ts-ignore
const BundleItem = ({item}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={() => console.log(`Bundle clicked`)} activeOpacity={.8} >
            <Image
                source={{ uri: `https://media.valorant-api.com/bundles/${item['DataAssetID']}/displayicon.png` }}
                style={[styles.image, {width: Dimensions.get('window').width}]}
            />
            <Text style={styles.name}>Champions Bundle 2023</Text>
            <View style={styles.footer}>
                <Image
                    source={require('../../assets/currencies/currencyVP.png')}
                    style={styles.currencyImage}
                />
                <Text style={styles.price}>{item['TotalDiscountedCost']['85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741']}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
    },
    image: {
        height: 192,
    },
    name: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencyImage: {
        width: 20,
        height: 20,
        marginRight: 5,
        marginTop: 1,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },
});

export default BundleItem