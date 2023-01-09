import { Text,View, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Participants(){
    return(
        <View style = {styles.container}>
            <Text style ={styles.name}>
                Lais Mello
            </Text>

            <TouchableOpacity 
            style={styles.button}>
              <Text style={styles.buttonText}>
              -
            </Text>
          </TouchableOpacity>
        </View>
    )
}
