import {Text, View} from "react-native";
import { Colors } from "../userSettings";

const TemporaryScreen = () => {
    return(
        <View style={{backgroundColor: Colors.backgroundPrimary, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: Colors.textPrimary}}>This is a Temporary Screen.</Text>
        </View>
    );
}

export default TemporaryScreen;