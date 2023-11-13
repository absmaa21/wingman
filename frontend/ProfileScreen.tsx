import {useEffect, useState} from "react";
import {Alert, Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../userSettings";
import { levelImage } from "./statics/Mappings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProfileScreen() {
    const [profileData, setProfileData] = useState({});
    const [lastFetchTime, setLastFetchTime] = useState(null);

    useEffect(() => {
        // Check if the last fetch was more than 5 minutes ago
        const canFetch = !lastFetchTime || Date.now() - lastFetchTime >= 5 * 60 * 1000;

        if(canFetch) {
            console.log('Fetching Profile...');
            //TODO
        }
    }, []);

    const [chosenSeasonID, setChosenSeasonID] = useState(null);

    const playerName = 'orcan';
    const playerTag = '420';
    const playerLevel = 89;
    const levelSrc = playerLevel > 500 ? 500 : playerLevel - (playerLevel % 20);
    const [showPlayerStats, setShowPlayerStats] = useState(true);

    const playerCurrentTier = 24;
    const playerCurrentTierRR = 195;
    const playerCurrentRankPosition = 13934;
    const playerPeakTier = 26;
    const playerPeakTierRR = 421;
    const playerPeakRankPosition = 3472;

    const playerDamageRoundDelta = 117.3;
    const playerKD = 1.29;
    const playerHS = 26.2;
    const playerWR = 56.4;


    // @ts-ignore
    const showCurrentRankPos = playerCurrentRankPosition != 0;
    // @ts-ignore
    const showPeakRankPos = playerPeakRankPosition != 0;

    function playerStatsHandlePress() {
        setShowPlayerStats(!showPlayerStats);
    }

    function handleOpenWebsiteButton(username:string, usertag:string) {
        Alert.alert(
            'Open Tracker.gg',
            `Do you want to open the Tracker profile of ${username}#${usertag} ?`,
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Open', onPress: () => handleOpenWebsite(username, usertag)}
            ]
        );
    }

    function handleOpenWebsite(username:string, usertag:string) {
        Linking.openURL(`https://tracker.gg/valorant/profile/riot/${username}%23${usertag}`).catch(() => {
            Alert.alert('Error', 'Failed to open tracker.gg');
        })
    }

    const profileImageWidth = Dimensions.get('window').width - 16;
    const profileImageHeight = profileImageWidth * (128 / 452);

    return(
        <ScrollView style={styles.container}>
            {profileData && (
                <View style={styles.playerStatsContainer}>
                    {showPlayerStats && (
                        <>
                            <View style={styles.playerStatsHeaderContainer}>
                                <View style={styles.playerStatsHeaderContent}>
                                    <Image
                                        source={{ uri: `https://media.valorant-api.com/playercards/3c112fe6-4685-d426-de5c-82817fdb8bde/wideart.png` }}
                                        style={[styles.profileImage, {width: profileImageWidth, height: profileImageHeight}]}
                                        resizeMode={'contain'}
                                    />
                                    <View style={styles.profileInfo}>
                                        <Text style={styles.profileName}>{playerName}</Text>
                                        <Text style={styles.profileTag}>#{playerTag}</Text>
                                        <Text style={styles.profileTitle}>{'VCT Champion 2024'}</Text>
                                    </View>
                                </View>
                                <View style={styles.playerLevelBadge}>
                                    <Image source={levelImage[levelSrc as keyof typeof levelImage]} style={styles.playerLevelImage} />
                                    <Text style={styles.playerLevelText}>{playerLevel}</Text>
                                </View>
                                <TouchableOpacity style={styles.playerStatsWebsite} onPress={() => handleOpenWebsiteButton(playerName, playerTag)} >
                                    <MaterialCommunityIcons name={'web'} color={Colors.textPrimary} size={26} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.playerRanksContainer}>
                                <View style={styles.playerCurrentTierContainer}>
                                    <Text style={styles.playerCurrentTierHeader}>Current</Text>
                                    <Image
                                        source={{ uri: `https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${playerCurrentTier}/largeicon.png` }}
                                        style={styles.playerCurrentTierImage}
                                        resizeMode={'contain'}
                                    />
                                    <Text style={styles.playerCurrentTierRR}>{playerCurrentTierRR} RR</Text>
                                    {showCurrentRankPos && (
                                        <Text style={styles.playerCurrentRankPosition}>#{playerCurrentRankPosition}</Text>
                                    )}
                                </View>

                                <View style={styles.playerPeakTierContainer}>
                                    <Text style={styles.playerPeakTierHeader}>Peak</Text>
                                    <Text style={[styles.playerPeakTierHeader, {top: 12}]}>E5A3</Text>
                                    <Image
                                        source={{ uri: `https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${playerPeakTier}/largeicon.png` }}
                                        style={styles.playerPeakTierImage}
                                        resizeMode={'contain'}
                                    />
                                    <Text style={styles.playerPeakTierRR}>{playerPeakTierRR} RR</Text>
                                    {showPeakRankPos && (
                                        <Text style={styles.playerPeakRankPosition}>#{playerPeakRankPosition}</Text>
                                    )}
                                </View>
                            </View>

                            <View style={styles.playerStatContainer}>
                                <View style={[styles.playerStat, {borderBottomLeftRadius: 12}]}>
                                    <Text style={styles.playerStatHeader}>Damage/Round</Text>
                                    <Text style={styles.playerStatDetail}>{playerDamageRoundDelta}</Text>
                                </View>
                                <View style={styles.playerStat}>
                                    <Text style={styles.playerStatHeader}>K/D Ratio</Text>
                                    <Text style={styles.playerStatDetail}>{playerKD}</Text>
                                </View>
                                <View style={styles.playerStat}>
                                    <Text style={styles.playerStatHeader}>Headshot%</Text>
                                    <Text style={styles.playerStatDetail}>{playerHS}%</Text>
                                </View>
                                <View style={[styles.playerStat, {borderBottomRightRadius: 12}]}>
                                    <Text style={styles.playerStatHeader}>Win %</Text>
                                    <Text style={styles.playerStatDetail}>{playerWR}%</Text>
                                </View>
                            </View>
                        </>
                    )}
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundPrimary,
    },
    playerStatsContainer: {
        flex: 1,
        padding: 8,
        backgroundColor: Colors.backgroundPrimary,
    },
    playerStatsHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    playerStatsHeaderContent: {
        width: '100%',
        overflow: 'hidden',
        flexDirection: 'column',
        borderRadius: 12,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: Colors.backgroundSecondary,
    },
    profileImage: {
        top: 0,
    },

    profileInfo: {
        flexDirection: 'row',
        padding: 6,
        paddingHorizontal: 12,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },
    profileTag: {
        fontSize: 16,
        color: Colors.textSecondary,
        marginLeft: 2,
        alignSelf: 'flex-end',
    },
    profileTitle: {
        flex: 1,
        fontSize: 14,
        fontWeight: '400',
        color: Colors.textFourth,
        textAlign: 'right',
        alignSelf: 'center',
    },

    playerLevelBadge: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: '50%',
        right: '50%',
    },
    playerLevelImage: {
        position: 'absolute',
        width: 96,
        height: 40,
        marginBottom: 5,
    },
    playerLevelText: {
        position: 'absolute',
        color: Colors.textPrimary,
        textAlign: 'center',
        fontSize: 16,
    },

    playerStatsWebsite: {
        position: 'absolute',
        right: 8,
        top: 8,
    },


    playerRanksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        gap: 4,
    },

    playerCurrentTierContainer: {
        flex: 1,
        alignItems: 'flex-end',
        borderRadius: 4,
        padding: 4,
        backgroundColor: Colors.backgroundSecondary,
    },
    playerCurrentTierHeader: {
        position: 'absolute',
        top: 2,
        left: 6,
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: Colors.textSecondary,
    },
    playerCurrentTierImage: {
        width: 78,
        height: 78,
        right: 8,
    },
    playerCurrentTierRR: {
        position: 'absolute',
        left: 8,
        bottom: 4,
        fontSize: 20,
        fontWeight: '500',
        color: Colors.textPrimary,
    },
    playerCurrentRankPosition: {
        position: 'absolute',
        left: 8,
        bottom: 26,
        fontSize: 14,
        fontWeight: '300',
        color: Colors.textFourth,
    },

    playerPeakTierContainer: {
        flex: 1,
        alignItems: 'flex-start',
        borderRadius: 4,
        padding: 4,
        backgroundColor: Colors.backgroundSecondary,
    },
    playerPeakTierHeader: {
        position: 'absolute',
        top: 2,
        right: 6,
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: Colors.textSecondary,
    },
    playerPeakTierImage: {
        width: 78,
        height: 78,
        left: 8,
    },
    playerPeakTierRR: {
        position: 'absolute',
        right: 8,
        bottom: 4,
        fontSize: 20,
        fontWeight: '500',
        color: Colors.textPrimary,
    },
    playerPeakRankPosition: {
        position: 'absolute',
        right: 8,
        bottom: 26,
        fontSize: 14,
        fontWeight: '300',
        color: Colors.textFourth,
    },

    playerStatContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        gap: 4,
    },
    playerStat: {
        flex: 1,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 4,
        backgroundColor: Colors.backgroundSecondary,
    },
    playerStatHeader: {
        fontSize: 11,
        color: Colors.textFourth,
    },
    playerStatDetail: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'right',
        color: Colors.textPrimary,
    },
});