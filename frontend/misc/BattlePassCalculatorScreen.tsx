import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../userSettings";
import {useFocusEffect} from "@react-navigation/native";
import {Slider} from "@miblanchard/react-native-slider";

export default function BattlePassCalculatorScreen({ navigation }: any) {
    const [currentLevel, setCurrentLevel] = useState(34);
    const [remainingXP, setRemainingXP] = useState(10000);
    const [currentWeek, setCurrentWeek] = useState(2);
    const [levelGoal, setLevelGoal] = useState(55);
    const [xpBoost, setXpBoost] = useState(0);

    function handleLevelGoalChange(value:string) {
        const number = Number(value);

        if(number > 55) setLevelGoal(55)
        else if(number < 2) setLevelGoal(2)
        else setLevelGoal(number)
    }
    function handleXpBoostChange(amount:number) {
        if(xpBoost === amount || xpBoost === 23) setXpBoost(xpBoost - amount)
        else setXpBoost(xpBoost + amount)
    }
    function handleRemainingXpChange(value:string) {
        const number = Number(value);

        if(number > remainingXpForLevel(currentLevel)) setRemainingXP(remainingXpForLevel(currentLevel))
        else if(number < 0) setRemainingXP(0)
        else setRemainingXP(number)
    }
    function remainingXpForLevel(level:number) {
        return level <= 50 ? (level-2) * 750 + 2000 : 36500;
    }
    function fullRemainingXp() {
        let xp = 0;
        for(let i = currentLevel+1; i <= levelGoal; i++) {
            xp += remainingXpForLevel(i);
        }
        xp += remainingXP;
        return xp;
    }

    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
                <Text style={styles.currentLevel}>Current Level: {currentLevel}</Text>
                <View style={styles.sliderContainer}>
                    <Slider
                        minimumValue={currentLevel}
                        maximumValue={55}
                        step={1}
                        value={levelGoal}
                        onValueChange={(value) => setLevelGoal(value[0])}
                        maximumTrackTintColor={Colors.backgroundPrimary}
                        minimumTrackTintColor={Colors.accent}
                        thumbTintColor={'#0000'}
                        trackStyle={styles.slider}
                    />
                    <Text style={styles.levelGoalText}>Tier Goal</Text>
                    <TextInput
                        style={styles.levelGoalInput}
                        value={levelGoal.toString()}
                        onChangeText={handleLevelGoalChange}
                        keyboardType={'numeric'}
                        selectionColor={Colors.textPrimary}
                    />
                </View>
                <View style={styles.sliderContainer}>
                    <Slider
                        minimumValue={1}
                        maximumValue={remainingXpForLevel(currentLevel)}
                        step={1}
                        value={remainingXP}
                        onValueChange={(value) => handleRemainingXpChange(value[0].toString())}
                        maximumTrackTintColor={Colors.backgroundPrimary}
                        minimumTrackTintColor={Colors.accent}
                        thumbTintColor={'#0000'}
                        trackStyle={styles.slider}
                    />
                    <Text style={styles.levelGoalText}>XP Remaining</Text>
                    <TextInput
                        style={styles.levelGoalInput}
                        value={remainingXP.toString()}
                        onChangeText={handleRemainingXpChange}
                        keyboardType={'numeric'}
                        selectionColor={Colors.textPrimary}
                    />
                </View>

                <Text style={styles.xpBoost}>XP Boost ({xpBoost}%)</Text>

                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.button, {
                            backgroundColor: xpBoost === 3 || xpBoost === 23 ? Colors.accent : '#fff3',
                            borderTopRightRadius: 4, borderBottomRightRadius: 4, marginRight: 2,
                        }]}
                        onPress={() => handleXpBoostChange(3)}
                    >
                        <Text style={styles.buttonText}>Premium BP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, {
                            backgroundColor: xpBoost === 20 || xpBoost === 23 ? Colors.accent : '#fff3',
                            borderTopLeftRadius: 4, borderBottomLeftRadius: 4, marginLeft: 2,
                        }]}
                        onPress={() => handleXpBoostChange(20)}
                    >
                        <Text style={styles.buttonText}>Game Pass</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.resultsContainer}>
                <Text style={styles.resultHeader}>Results</Text>
                <View style={styles.resultRow}>
                    <Text style={styles.resultTitle}>Remaining XP</Text>
                    <Text style={styles.resultText}>{fullRemainingXp().toLocaleString()}</Text>
                </View>
                <View style={styles.resultRow}>
                    <Text style={styles.resultTitle}>Hours per Day</Text>
                    <Text style={styles.resultText}>1:04</Text>
                </View>
                <View style={styles.resultRow}>
                    <Text style={styles.resultTitle}>Competitive per Day</Text>
                    <Text style={styles.resultText}>{3}</Text>
                </View>
                <View style={styles.resultRow}>
                    <Text style={styles.resultTitle}>Spike Rush per Day</Text>
                    <Text style={styles.resultText}>8</Text>
                </View>
                <View style={styles.resultRow}>
                    <Text style={styles.resultTitle}>TDM per Day</Text>
                    <Text style={styles.resultText}>7</Text>
                </View>
                <View style={styles.resultRow}>
                    <Text style={styles.resultTitle}>Deathmatch per Day</Text>
                    <Text style={styles.resultText}>7</Text>
                </View>
                <View style={styles.resultRow}>
                    <Text style={styles.resultTitle}>Time Remaining</Text>
                    <Text style={styles.resultText}>59 Days</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        backgroundColor: Colors.backgroundPrimary,
    },

    contentContainer: {
        marginTop: 8,
        padding: 16,
        borderRadius: 12,
        gap: 4,
        backgroundColor: Colors.backgroundSecondary,
    },
    currentLevel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sliderContainer: {
        marginVertical: 4,
    },
    levelGoalText: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        left: 8,
        top: 8,
    },
    levelGoalInput: {
        position: 'absolute',
        color: Colors.textPrimary,
        right: 8,
        top: -4,
    },
    slider: {
        height: 48,
        borderRadius: 12,
    },
    xpBoost: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 4,
        color: Colors.textPrimary,
    },

    button: {
        flex: 1,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },

    resultsContainer: {
        marginTop: 8,
        marginBottom: 32,
        padding: 12,
        borderRadius: 12,
        gap: 8,
        backgroundColor: Colors.backgroundSecondary,
    },
    resultHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        textAlign: 'center',
    },
    resultRow: {
        borderRadius: 12,
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor: Colors.backgroundPrimary,
    },
    resultTitle: {
        flex: 1,
        textAlign: 'left',
        fontSize: 16,
        padding: 12,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        backgroundColor: Colors.accent,
    },
    resultText: {
        flex: 1,
        textAlign: 'right',
        fontSize: 14,
        color: Colors.textPrimary,
        padding: 12,
    },
});