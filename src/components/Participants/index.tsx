import { Text,View, TouchableOpacity } from "react-native";
import { styles } from "./style";

type Props = {
	name: string;
}

export function Participants({name}: Props){
    return(
        <View style = {styles.container}>
            <Text style ={styles.name}>
              {name}
            </Text>

            <TouchableOpacity 
            style={styles.button} >
              <Text style={styles.buttonText}>
              -
            </Text>
          </TouchableOpacity>
        </View>
    )
}
