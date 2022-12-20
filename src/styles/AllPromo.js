import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F8",
    },
    icons: {
        marginRight: 75,
        color: 'black',
        fontSize: 30
    },
    title:{
        fontFamily: 'Poppins-Black',
        fontWeight: 'bold',
        fontSize: 34,
        color: 'black',
        paddingTop: 30
    },
    swipe: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    },
    swipeText: {
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular',
        color:'black',
        fontSize: 10
    },
    // card:{
    //     padding: 15,
    // },
    imageCard:{
        width: 80,
        height: 80,
        borderRadius: 50
    },
    cardTitle:{
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        color: 'black'
    },
    cardPrice:{
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: '#895537'
    },
    cardStatus:{
        width: "100%",
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#895537'
    },
    trash:{
        backgroundColor: '#6A4029',
        width: 55,
        height: 55,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // position:'relative',
        // right:20,
        // top: 30
    },
    iconTrash:{
        color: 'white'
    },
    wrapperSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        // marginLeft: 40,
        //  marginRight: 25,
        marginHorizontal: 5,
        marginVertical: 20,
        borderRadius: 30,
        backgroundColor: '#EFEEEE',
        elevation: 1,
        shadowColor: '#393939',
    },
    Icons: {
        fontSize: 30,
        marginHorizontal: 3,
        color: 'grey',
    },
    iconSearch: {
        color: '#000',
        fontSize: 20,
        marginRight: 10,
    },
    textPlaceholder: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: 'bold',
        fontSize: 17,
        flex: 1,
        color: '#6A4029'
    },
})

export default styles;