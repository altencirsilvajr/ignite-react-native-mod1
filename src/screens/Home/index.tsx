import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participants } from "../../components/Participants";

export function Home(){
  function handleParticipantAdd (){
    console.log("Adicionado com sucesso")
  }
  return(
    <View style={styles.container}>
        <Text style={styles.eventTitle}>
          Nome do Evento
        </Text>

        <Text style={styles.eventDate}>
          (27 de Janeiro de 2023)
        </Text>

        <View style={styles.form}>

          <TextInput 
            style={styles.input}
            placeholder = "Nome do participante"
            placeholderTextColor= "#6B6B6B"
          />
          
          <TouchableOpacity 
            style={styles.button} onPress={handleParticipantAdd}>
              <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>

        </View>

        <Participants/>
        <Participants/>

        
    </View>
  );
}