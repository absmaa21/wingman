import {useEffect, useState} from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Colors from "../userSettings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import changeNavigationBarColor from "react-native-navigation-bar-color";

export default function LoginScreen({ navigation }:any) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://i.ibb.co/YhFtDvt/valorant-patch-6-06-update-wingman.jpg' }}
                style={styles.backgroundImage}
                resizeMode={'cover'}
            >
                <View style={styles.overlay}>
                    {showLogin
                        ?
                        <LoginWidget onLoginSuccess={() => setShowLogin(false)} navigation={navigation} />
                        :
                        <MultiAuthWidget backToLogin={() => setShowLogin(true)} navigation={navigation} />
                    }
                </View>
            </ImageBackground>
        </View>
    );
}

function LoginWidget({ onLoginSuccess, navigation }:any) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loginError, setLoginError] = useState('Invalid credential!')
    const [showLoginError, setShowLoginError] = useState(false);

    useEffect(() => {
        if(showLoginError) setTimeout(() => setShowLoginError(false), 2500);
    }, []);

    function handleLoginPress() {
        if(username.length === 0 || password.length === 0) {
            setLoginError('Input fields must not be empty.')
            setShowLoginError(true);
        }
        // TODO login logic
    }

    return(
        <View style={styles.loginContainer}>
            <Text style={styles.header}>Wingman</Text>
            <TextInput
                style={styles.loginInput}
                value={username}
                onChangeText={setUsername}
                placeholder={'Username'}
                placeholderTextColor={Colors.textSixth}
                keyboardType={'default'}
                selectionColor={Colors.textPrimary}
            />
            <View style={styles.passwordInputContainer}>
                <TextInput
                    style={styles.passwordInput}
                    value={password}
                    onChangeText={setPassword}
                    placeholder={'Password'}
                    placeholderTextColor={Colors.textSixth}
                    secureTextEntry={!isPasswordVisible}
                    selectionColor={Colors.textPrimary}
                />
                <TouchableOpacity
                    style={styles.passwordVisibilityIcon}
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    <MaterialCommunityIcons name={isPasswordVisible ? 'eye' : 'eye-off-outline'} size={24} color={Colors.textSixth}/>
                </TouchableOpacity>
            </View>
            {showLoginError && <Text style={styles.errorText}>{loginError}</Text>}
            <TouchableOpacity style={styles.signInButton} onPress={handleLoginPress} >
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

function MultiAuthWidget({ backToLogin, navigation }:any) {
    const [pinCode, setPinCode] = useState('');
    const [showMultiAuthError, setShowMultiAuthError] = useState(false);

    useEffect(() => {
        if(pinCode.length === 6) handleLogin()
        if(showMultiAuthError) setTimeout(() => setShowMultiAuthError(false), 2500)
    }, [pinCode]);

    function handleAddDigit(digit:string) {
        if(pinCode.length < 6) setPinCode(pinCode + digit)
    }
    function handleRemoveDigit() { setPinCode(pinCode.slice(0, -1)) }

    function handleLogin() {
        if(pinCode.length === 6) {
            setShowMultiAuthError(true)
            //TODO logic
        }
    }

    const getPinCodeFieldBorderStyle = (index: number) => {
        const filled = index < pinCode.length;
        return filled ? styles.filledPinCodeField : styles.emptyPinCodeField;
    };

    return(
        <View style={styles.loginContainer}>
            <Text style={styles.header}>Multi Auth</Text>
            <View style={styles.pinCodeContainer}>
                {[...Array(6)].map((_, index) => (
                    <View
                        key={index}
                        style={[styles.pinCodeField, getPinCodeFieldBorderStyle(index)]}
                    >
                        <Text style={styles.pinCodeText}>{pinCode[index] || ''}</Text>
                    </View>
                ))}
            </View>

                <View style={styles.numberRow}>
                    {[1, 2, 3].map((number) => (
                        <TouchableOpacity
                            key={number}
                            style={styles.numberButton}
                            onPress={() => handleAddDigit(String(number))}>
                            <Text style={styles.numberButtonText}>{number}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.numberRow}>
                    {[4, 5, 6].map((number) => (
                        <TouchableOpacity
                            key={number}
                            style={styles.numberButton}
                            onPress={() => handleAddDigit(String(number))}>
                            <Text style={styles.numberButtonText}>{number}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.numberRow}>
                    {[7, 8, 9].map((number) => (
                        <TouchableOpacity
                            key={number}
                            style={styles.numberButton}
                            onPress={() => handleAddDigit(String(number))}>
                            <Text style={styles.numberButtonText}>{number}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

            <View style={styles.bottomRow}>
                <View style={styles.spacerButton}/>
                <TouchableOpacity
                    style={styles.numberButton}
                    onPress={() => handleAddDigit('0')}
                >
                    <Text style={styles.numberButtonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => handleRemoveDigit()}
                >
                    <MaterialCommunityIcons name={'backspace-outline'} size={32} color={Colors.textSixth} />
                </TouchableOpacity>
            </View>

            {showMultiAuthError && <Text style={[styles.errorText, {bottom: 348}]}>Invalid Code</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.8)',
    },

    loginContainer: {
        width: '80%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 12,
        backgroundColor: Colors.backgroundPrimary,
    },
    header: {
        fontSize: 38,
        fontWeight: '400',
        marginBottom: 16,
        textAlign: 'center',
        overflow: 'hidden',
        color: Colors.textPrimary,
    },
    loginInput: {
        width: '100%',
        height: 44,
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        color: Colors.textPrimary,
        fontSize: 16,
        fontWeight: '500',
        backgroundColor: Colors.backgroundSecondary,
    },
    passwordInputContainer: {
        width: '100%',
        height: 44,
        borderRadius: 12,
        backgroundColor: Colors.backgroundSecondary,
        marginBottom: 32,
        flexDirection: 'row',
        alignItems: 'center'
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        color: Colors.textPrimary,
        paddingHorizontal: 16,
    },
    passwordVisibilityIcon: {
        width: 23,
        marginRight: 12,
    },
    errorText: {
        position: 'absolute',
        fontSize: 12,
        bottom: 74,
        color: 'red',
        textAlign: 'center',
    },
    signInButton: {
        alignSelf: 'center',
        borderRadius: 12,
        paddingHorizontal: 40,
        paddingVertical: 12,
        backgroundColor: Colors.accent,
    },
    signInButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.textPrimary,
    },

    filledPinCodeField: {
        borderColor: Colors.backgroundPrimary,
    },
    emptyPinCodeField: {
        borderColor: Colors.backgroundSecondary,
    },
    pinCodeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24,
    },
    pinCodeField: {
        width: 44,
        height: 46,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2,
        borderWidth: 2,
        borderColor: Colors.backgroundSecondary,
    },
    pinCodeText: {
        fontSize: 28,
        color: Colors.textPrimary,
    },
    numberRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8,
    },
    numberButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Colors.backgroundSecondary,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    numberButtonText: {
        fontSize: 24,
        color: Colors.textFourth,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    spacerButton: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    removeButton: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
});