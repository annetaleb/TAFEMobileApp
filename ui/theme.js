import {StyleSheet, Dimensions} from 'react-native'; 

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const theme = StyleSheet.create({
    userTile:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#D9D9D9',
        borderWidth:1,
        borderColor:'#000',
        borderRadius: 6,
        padding:5,
        paddingTop:18,
        paddingBottom:18,
        margin:2
    },
    userTileButtonContainer:{
        display:'flex',
        flexDirection:'row',
        borderRadius: 6,
        justifyContent:'space-between'
    },
    userTileButton:{
        backgroundColor:'#595959',
        borderRadius: 6,
        padding:5,
        marginLeft:2.5,
        minWidth:55,

    },
    userTileButtonText:{
        color:'#fff',
        textAlign:'center'
    },
    addContactButton:{
        backgroundColor:'#595959',
        borderRadius: 6,
        padding:5
    },
    addContactButtonText:{
        color:'#fff',
        textAlign:'center'
    },
    saveButton:{
        fontsize:40,
        backgroundColor:'#595959',
        borderRadius: 6,
        padding:5,
        marginTop:5
    },
    saveButtonText:{
        color:'#fff',
        textAlign:'center'
    },
    cancelButton:{
        backgroundColor:'#941a1d',
        borderRadius: 6,
        padding:5,
        marginTop:5
    },
    cancelButtonText:{
        color:'#fff',
        textAlign:'center'
    },  
    textInput:{
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:1,
        borderRadius: 6,
        margin:2.5,
        padding:2.5
    },
   
    textDisplay:{
        flex: 1,
        fontSize : 14,
        fontWeight: 'bold',
        color:'#fff',
        textAlign:'center',
        backgroundColor:'#d9d9d9',
        borderColor:'#000',
        borderRadius: 6,
        borderWidth:1,
        margin:2.5,
        padding:5.5
    },
    image:{
           // height: screenHeight,
           // width: screenWidth,
            
            height: 40,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
    }
}); 

export default theme; 