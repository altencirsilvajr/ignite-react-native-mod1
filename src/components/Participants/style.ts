import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor:'#1F1E25',
        borderRadius:12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name:{
        color: '#FFF', 
        flex:1,
        marginLeft:10,
        fontSize:20,
    },
    buttonText:{
        color: '#FFF',
        fontSize:35,
    },
    button:{
        height:50,
        width:50,
        borderRadius:15,
        backgroundColor: '#E23C44',
        alignItems:"center",
        justifyContent:"center",
    }
})
