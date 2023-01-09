import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffd700',
        padding:45
    },
    eventTitle:{
        fontSize:25,
        fontWeight:"bold",
        marginTop:40,
        color:'#008000',
    },
    eventDate:{
        fontSize: 15,
        color:'#008000',
    },
    input:{
        backgroundColor: '#fefbd8',
        borderRadius: 12,
        flex:1,
        marginRight: 8,
        height: 50,
        padding: 8,
        fontSize: 15,
        color:'#008000',

    },
    buttonText:{
        color: '#FFF',
        fontSize:35,
    },
    button:{
        height:50,
        width:50,
        borderRadius:20,
        backgroundColor: '#31CF67',
        alignItems:"center",
        justifyContent:"center",
    },
    form:{
        width:'100%',
        flexDirection: 'row',
        marginTop:25,
        marginBottom:35,
    }
})