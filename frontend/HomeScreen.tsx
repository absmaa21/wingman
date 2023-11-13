import {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {dailyImageMapping, levelImage} from "./statics/Mappings";
import {Colors, Settings} from "../userSettings";

export default function HomeScreen() {
    const [showRankDetails, setShowRankDetails] = useState(true);
    const [showPlayerStats, setShowPlayerStats] = useState(true);

    const playerName:string = 'orcan';
    const playerTag:string = '420';
    const playerLevel:number = 89;
    const borderLevel:number = playerLevel < 500 ? playerLevel - (playerLevel % 20) : 500;
    let dailiesFinished:number = 9;
    const competitiveTier:number = 21;
    const playerRR:number = 56;
    const playerRank:number = 12623;
    const playerKD:number = 1.62;
    const playerHS:number = 34;
    const playerWR:number = 56;

    // @ts-ignore
    const checkpoint1Image = dailiesFinished >= 4 ? dailyImageMapping[4] : dailyImageMapping[dailiesFinished];
    dailiesFinished - 4 < 0 ? dailiesFinished = 0 : dailiesFinished -= 4;
    // @ts-ignore
    const checkpoint2Image = dailiesFinished >= 4 ? dailyImageMapping[4] : dailyImageMapping[dailiesFinished % 4];
    dailiesFinished - 4 < 0 ? dailiesFinished = 0 : dailiesFinished -= 4;
    // @ts-ignore
    const checkpoint3Image = dailiesFinished >= 4 ? dailyImageMapping[4] : dailyImageMapping[dailiesFinished % 4];
    dailiesFinished - 4 < 0 ? dailiesFinished = 0 : dailiesFinished -= 4;
    // @ts-ignore
    const checkpoint4Image = dailiesFinished >= 4 ? dailyImageMapping[4] : dailyImageMapping[dailiesFinished % 4];

    const handlePlayerStatsPress = () => {
        setShowPlayerStats(!showPlayerStats);
    }

    const gameState:string = 'PreGame';
    const gameHeader:string = 'Liveboard';
    const gameServer:string = 'Frankfurt';

    return(
        <View style={styles.container}>
            {showPlayerStats && (
                <View style={styles.playerContainer}>
                    <View style={styles.playerContainerLeft}>
                        <View style={styles.playerInfosContainer}>
                            <View style={styles.column}>
                                <Text style={styles.playerName}>{playerName}<Text style={styles.playerTag}>#{playerTag}</Text></Text>
                                <View style={styles.row}>
                                    <Image source={checkpoint1Image} style={styles.dailyImage} />
                                    <Image source={checkpoint2Image} style={styles.dailyImage} />
                                    <Image source={checkpoint3Image} style={styles.dailyImage} />
                                    <Image source={checkpoint4Image} style={styles.dailyImage} />
                                </View>
                            </View>
                            <View style={styles.levelBox}>
                                <Image source={levelImage[borderLevel as keyof typeof levelImage]} style={styles.levelImage} resizeMode={'contain'} />
                                <Text style={styles.playerLevel}>{playerLevel}</Text>
                            </View>
                        </View>
                        <View style={styles.playerStatsContainer}>
                            <View style={styles.column}>
                                <Text style={styles.playerKD}>KD {playerKD}</Text>
                                <Text style={styles.playerHS}>HS {playerHS}%</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.playerWR}>WR {playerWR}%</Text>
                                <Text style={styles.statsPeriod}>{Settings.statsPeriod}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.playerRankContainer}>
                        <Image style={styles.playerTier} source={{uri: `https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${competitiveTier}/largeicon.png`}} />
                        <Text style={styles.playerRR}>{playerRR} RR</Text>
                        {showPlayerStats && (
                            <Text style={styles.playerRank}>#{playerRank}</Text>
                        )}
                    </View>
                </View>
            )}

            <TouchableOpacity
                onPress={() => setShowPlayerStats(!showPlayerStats)}
                style={styles.gameInfo}
            >
                <Text style={styles.gameState}>{gameState}</Text>
                <Text style={styles.gameHeader}>{gameHeader}</Text>
                <Text style={styles.gameServer}>{gameServer}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 6,
        paddingLeft: 6,
        paddingRight: 6,
        backgroundColor: Colors.backgroundPrimary,
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
    },

    playerContainer: {
        flexDirection: 'row',
    },
    playerContainerLeft: {
        flex: 2,
        flexDirection: 'column',
    },
    playerInfosContainer: {
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
        marginBottom: 4,
        borderRadius: 4,
        borderTopLeftRadius: 12,
        elevation: 4,
        backgroundColor: Colors.backgroundSecondary,
    },
    playerRankContainer: {
        flex: 1,
        marginLeft: 4,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        elevation: 4,
        backgroundColor: Colors.backgroundSecondary,
    },
    playerStatsContainer: {
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
        borderRadius: 4,
        borderBottomLeftRadius: 12,
        elevation: 4,
        backgroundColor: Colors.backgroundSecondary,
    },
    levelBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    levelImage: {
        width: 96,
    },
    playerLevel: {
        position: 'absolute',
        color: Colors.textPrimary,
    },

    playerName: {
        fontSize: 16,
        color: Colors.textPrimary,
    },
    playerTag: {
        fontSize: 13,
        color: Colors.textFourth,
    },
    dailyImage: {
        width: 20,
        height: 20,
    },

    playerTier: {
        width: 88,
        height: 88,
        marginBottom: -8,
    },
    playerRR: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: -4,
        color: Colors.textPrimary,
    },
    playerRank: {
        fontSize: 14,
        color: Colors.textSecondary,
    },

    playerKD: {
        fontSize: 18,
        color: Colors.textPrimary,
    },
    playerHS: {
        fontSize: 18,
        color: Colors.textPrimary,
    },
    playerWR: {
        fontSize: 18,
        textAlign: 'right',
        color: Colors.textPrimary,
    },
    statsPeriod: {
        color: Colors.textThird,
    },

    gameInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 6,
        paddingBottom: 6,
    },
    gameState: {
        fontSize: 16,
        color: Colors.textSecondary,
    },
    gameHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.textFourth,
    },
    gameServer: {
        fontSize: 16,
        color: Colors.textSecondary,
    },
});