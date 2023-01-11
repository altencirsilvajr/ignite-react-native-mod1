import React, {useState} from "react";

import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from "./styles";

import { Participants } from "../../components/Participants";

export function Home() {
  const [participants , setParticipants] = useState <String[]> ([]);
  const [participantName , setParticipantName] = useState('');

    function handleParticipantAdd() {
      
      if (participants.includes(participantName)) {
        return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
      }
      
      setParticipants( prevState => [...prevState ,participantName]);
      setParticipantName ('');
    
    }
    

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover",`Deseja realmente remover: ${name}?`,[
      {
        text: "Sim",
        onPress: () => Alert.alert(`O participante ${name} foi excluído`) 
      },
      {
        text:"Não",
        style: "cancel"
      }
    ])


  }
  
  return(
    <View style={styles.container}>
        <Text style={styles.eventTitle}>
          Nome do Evento
        </Text>

        <Text style={styles.eventDate}>
          27 de Janeiro de 2023.
        </Text>

        <View style={styles.form}>

          <TextInput 
            style={styles.input}
            placeholder = "Nome do participante"
            placeholderTextColor= "#6B6B6B"
            onChangeText={setParticipantName}
            value ={participantName}
          />
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleParticipantAdd}>
              <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
    
        </View>


        <FlatList 
        
          showsVerticalScrollIndicator ={false}
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participants
                key={item}
                name = {item} 
                onRemove ={()=> handleParticipantRemove(`${item}`)}/>
          )}
        ListEmptyComponent={() => (
          <Text style ={styles.listEmpty}>
            Nenhum participante adicionado ao evento!!!
          </Text>
        )}  
        />
    </View>
  );
}