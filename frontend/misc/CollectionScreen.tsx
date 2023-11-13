import {useState} from "react";
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../userSettings";
import CollectionCard from "../components/CollectionCard";
import {weaponInfo} from "../statics/Mappings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const tempPlayerLoadout = [
    {
        "ID": "63e6c2b6-4a8e-869c-3d4c-e38355226584",
        "SkinID": "157bcebe-484d-82e2-2a60-c8b4b11197ea",
        "SkinLevelID": "4f3eea45-4e3e-026f-66c9-658906a52d0b",
        "ChromaID": "9e59563c-4467-43df-3b58-2ca43c25abde",
        "CharmInstanceID": "4543a9cd-9ef4-4d08-ac17-87bced12217e",
        "CharmID": "7d2614f5-4811-a2b8-5e5a-4c8d8d1c558f",
        "CharmLevelID": "0c163690-44c5-a5f1-3bdc-42acdc75df94",
        "Attachments": []
    },
    {
        "ID": "55d8a0f4-4274-ca67-fe2c-06ab45efdf58",
        "SkinID": "acccab4a-4093-8a4a-f1d3-299071d763d3",
        "SkinLevelID": "e507b35c-4a86-0663-0259-8da5f286d41c",
        "ChromaID": "0a59fa66-4f08-e72d-d818-d083b993e8cf",
        "Attachments": []
    },
    {
        "ID": "9c82e19d-4575-0200-1a81-3eacf00cf872",
        "SkinID": "b0f65660-4c51-13b7-9d01-e29a1e2879b0",
        "SkinLevelID": "1eed6526-43de-2266-85e1-d8822d849788",
        "ChromaID": "681caac1-4a61-999a-6880-e3a9ed6acf6d",
        "CharmInstanceID": "e9746f71-ccca-5c20-b214-0a7a10d6a7d9",
        "CharmID": "623cdfdb-4928-2ae5-614c-8babb10e1c80",
        "CharmLevelID": "ca259e3e-4aed-3e6b-773b-f88e5a484409",
        "Attachments": []
    },
    {
        "ID": "ae3de142-4d85-2547-dd26-4e90bed35cf7",
        "SkinID": "7baa9f5a-4ac3-804a-2e47-4da916de0b79",
        "SkinLevelID": "fb79c688-4a07-6f3f-7c1a-948b5b399a3f",
        "ChromaID": "10afa924-483c-3f29-21a3-f78b88e13c60",
        "CharmInstanceID": "3246a6e0-1fc8-557f-bcd4-b6cd67c13f5b",
        "CharmID": "623cdfdb-4928-2ae5-614c-8babb10e1c80",
        "CharmLevelID": "ca259e3e-4aed-3e6b-773b-f88e5a484409",
        "Attachments": []
    },
    {
        "ID": "ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a",
        "SkinID": "8c72ae0b-4357-1a75-ad62-fbaec7b64f92",
        "SkinLevelID": "2e15c392-4f9a-e7cc-97ba-ae8fa37dfa14",
        "ChromaID": "0d81cec6-46a2-300f-c3c6-7aa67c2b8547",
        "CharmInstanceID": "b9ad112e-10ae-487a-9521-3a028f2eedc7",
        "CharmID": "86a16990-4eeb-9d25-e8d0-cfbe2f532443",
        "CharmLevelID": "4d5b9a70-4d4b-1295-4195-dcab8cc1de81",
        "Attachments": []
    },
    {
        "ID": "ec845bf4-4f79-ddda-a3da-0db3774b2794",
        "SkinID": "68f2e92e-4c94-8104-ed99-03925bbc71e8",
        "SkinLevelID": "69dd1d46-422b-ec24-6dc1-fb848d445ef4",
        "ChromaID": "f848117b-4cd5-04a1-9f36-648eacebe8ec",
        "CharmInstanceID": "33c0d6b0-d329-4906-8d3a-38d0d14f2df0",
        "CharmID": "e99d20eb-472e-59f5-d669-e09cd168820a",
        "CharmLevelID": "f9e33f95-4d17-cd7e-3291-85b7f56bf183",
        "Attachments": []
    },
    {
        "ID": "910be174-449b-c412-ab22-d0873436b21b",
        "SkinID": "4a1d582d-4c3b-6595-57b6-e3b2cf0ee543",
        "SkinLevelID": "8a0ded4e-4218-d59a-53cc-488c3e384425",
        "ChromaID": "2d680b54-40da-0afa-e787-89a545f1c7b2",
        "CharmInstanceID": "20753b01-0260-5c43-85af-32a39d4780e1",
        "CharmID": "ada5f921-4d81-f439-0017-0e86877a02bd",
        "CharmLevelID": "7a098e59-49e4-55ed-7190-e68476edb927",
        "Attachments": []
    },
    {
        "ID": "44d4e95c-4157-0037-81b2-17841bf2e8e3",
        "SkinID": "068cf886-4688-6609-e79f-d4b6afe1d3cb",
        "SkinLevelID": "7b04cfc0-4c93-3bcb-7f3a-e189611412e3",
        "ChromaID": "c65291cc-4042-0a68-ffe9-d3a3e09581bd",
        "Attachments": []
    },
    {
        "ID": "29a0cfab-485b-f5d5-779a-b59f85e204a8",
        "SkinID": "94bc4d7a-4b88-4c84-efef-969cdf84019e",
        "SkinLevelID": "60f3166c-4a22-9d8c-519a-f09b5fa1416b",
        "ChromaID": "4bf58e6e-4218-7443-a786-db99c5b3edf1",
        "CharmInstanceID": "1398d24a-2647-5c2f-95f9-45d8715e2a6a",
        "CharmID": "86e61d30-4f29-ef14-e880-ef89f53eff09",
        "CharmLevelID": "41b46073-4677-797b-596a-12aa31d5bd81",
        "Attachments": []
    },
    {
        "ID": "1baa85b4-4c70-1284-64bb-6481dfc3bb4e",
        "SkinID": "a1d3a9e2-4f61-b1f7-3a01-cf867264d1cb",
        "SkinLevelID": "afcb2528-4415-0178-98b1-c0a751092762",
        "ChromaID": "b412e61c-4001-8fab-c5e9-6eb7caa41e88",
        "CharmInstanceID": "1015cd06-ae77-4108-9a7e-9209af67e8f8",
        "CharmID": "756be48e-4769-542d-45ad-53ac67c5b872",
        "CharmLevelID": "76cdcb09-4ba0-d657-ed3d-4c8b7dbb21c5",
        "Attachments": []
    },
    {
        "ID": "e336c6b8-418d-9340-d77f-7a9e4cfe0702",
        "SkinID": "83778c03-45a3-67a2-3c89-6b8598327d58",
        "SkinLevelID": "becd58d6-4da0-db56-a748-35923d2750e1",
        "ChromaID": "d3f81911-44e7-f0c1-cc6c-34bda3bff6d3",
        "CharmInstanceID": "33be9730-51a5-4034-a0e0-6cf80d6b6f32",
        "CharmID": "9a6231c0-41e5-c42d-9745-cc9010877fdc",
        "CharmLevelID": "68dab3e8-4bd0-f504-f1c6-a0a307634264",
        "Attachments": []
    },
    {
        "ID": "42da8ccc-40d5-affc-beec-15aa47b42eda",
        "SkinID": "b454bb93-4dd5-5a7c-6720-38afd82bfd78",
        "SkinLevelID": "acab9281-445b-e301-19c6-fe91e3ef27fa",
        "ChromaID": "4c2160d7-4650-5bd8-24b1-a1b83be8b0c4",
        "Attachments": []
    },
    {
        "ID": "a03b24d3-4319-996d-0f8c-94bbfba1dfc7",
        "SkinID": "17831113-4ff0-a6c9-0b20-6f9c077d74a2",
        "SkinLevelID": "99bf69d9-4451-cfb4-456f-c3b5cc4fcf5e",
        "ChromaID": "e9a1f1d7-4651-c94c-4e9f-94a4bb93232b",
        "CharmInstanceID": "970885dd-92fb-4788-a307-2d271b013ba6",
        "CharmID": "86a16990-4eeb-9d25-e8d0-cfbe2f532443",
        "CharmLevelID": "4d5b9a70-4d4b-1295-4195-dcab8cc1de81",
        "Attachments": []
    },
    {
        "ID": "4ade7faa-4cf1-8376-95ef-39884480959b",
        "SkinID": "6558fd5d-4dc7-90f7-beea-ba9303551c3b",
        "SkinLevelID": "bfbcae59-45a0-c60a-29d5-7f8780f3b0d4",
        "ChromaID": "297c7dae-4e11-6d00-ae5f-0cb9ec868d87",
        "CharmInstanceID": "1a639c21-88c8-4448-bdd8-a0f12dbf121f",
        "CharmID": "93f87778-4f95-c0c4-5686-21bf55542ecd",
        "CharmLevelID": "17fcd820-4eee-5694-0b6e-ed9064514b4e",
        "Attachments": []
    },
    {
        "ID": "c4883e50-4494-202c-3ec3-6b8a9284f00b",
        "SkinID": "43353883-446c-c2bf-5d44-298eb948ee80",
        "SkinLevelID": "f92d4bee-43a0-76e0-b07a-e6a064749617",
        "ChromaID": "17c01141-47b3-56be-e390-259673611cb2",
        "Attachments": []
    },
    {
        "ID": "462080d1-4035-2937-7c09-27aa2a5c27a7",
        "SkinID": "b4e5bb69-4e12-113f-c43b-efa5b13cb96d",
        "SkinLevelID": "db5e997e-4c4f-baac-3e84-5fafe19c97f2",
        "ChromaID": "1b2e57e5-454a-53f2-d62b-fd8690ae86c6",
        "CharmInstanceID": "7e507119-4a37-457a-8f6c-f027a4bea1fe",
        "CharmID": "756be48e-4769-542d-45ad-53ac67c5b872",
        "CharmLevelID": "76cdcb09-4ba0-d657-ed3d-4c8b7dbb21c5",
        "Attachments": []
    },
    {
        "ID": "f7e1b454-4ad4-1063-ec0a-159e56b58941",
        "SkinID": "cebd9a89-4ef1-48fa-6c4e-6bbc1cdd1be8",
        "SkinLevelID": "d9b038d8-4f8c-e4a6-e538-6e9cfb0dbb11",
        "ChromaID": "07f8aa65-46be-54ef-4179-4dac64870596",
        "CharmInstanceID": "c448fa30-25c5-5466-a4e4-d7e1b36c4235",
        "CharmID": "c14745d0-4958-26d9-60e6-7c863080fef1",
        "CharmLevelID": "6b111258-4ddd-8195-8293-a9b468e98659",
        "Attachments": []
    },
    {
        "ID": "2f59173c-4bed-b6c3-2191-dea9b58be9c7",
        "SkinID": "b5f42a00-425a-6fdf-61af-bb9a564c3d79",
        "SkinLevelID": "059c9307-4d19-00f3-c0e5-49b8bc66bd40",
        "ChromaID": "d1d33fe3-444e-3391-cd3f-92ae4c15c3cd",
        "Attachments": []
    }
]

export default function CollectionScreen() {
    // a
    const [chosenWeaponID, setChosenWeaponID] = useState('');
    const [showModal, setShowModal] = useState(false);

    const windowWidth = Dimensions.get('window').width;
    const cardWidth = (windowWidth - 24) / 2;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.presetsButton} onPress={() => console.log('Presets Button pressed')} >
                <Text style={styles.presetsText}>Presets</Text>
            </TouchableOpacity>
            <FlatList
                data={tempPlayerLoadout}
                numColumns={Math.floor(windowWidth / cardWidth)}
                columnWrapperStyle={styles.collectionCardsContainer}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => { setChosenWeaponID(item['ID']); setShowModal(true) }}>
                        <CollectionCard weaponObject={item} />
                    </TouchableOpacity>
                )}
            />

            {showModal && chosenWeaponID !== '' && (
                <View style={[styles.modalContainer, {width: windowWidth}]}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.modalHeader}>Set Skin for {weaponInfo[chosenWeaponID as keyof typeof weaponInfo].name}</Text>
                        <TouchableOpacity
                            style={styles.closeModalBtn}
                            onPress={() => {setShowModal(false); setChosenWeaponID('')}}
                        >
                            <MaterialCommunityIcons name={'close'} size={24} color={Colors.textSecondary} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        backgroundColor: Colors.backgroundPrimary,
    },

    presetsButton: {
        padding: 8,
        marginTop: 8,
        marginBottom: 12,
        borderRadius: 12,
        elevation: 4,
        backgroundColor: Colors.accent,
    },
    presetsText: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: Colors.textPrimary,
    },

    collectionCardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        justifyContent: 'space-between',
        marginBottom: 8,
    },

    modalContainer: {
        position: 'absolute',
        height: '100%',
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#000a',
    },
    contentContainer: {
        borderRadius: 12,
        padding: 8,
        backgroundColor: Colors.backgroundPrimary,
    },
    modalHeader: {
        textAlign: 'center',
        fontSize: 18,
        color: Colors.textSecondary,
    },
    closeModalBtn: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
});