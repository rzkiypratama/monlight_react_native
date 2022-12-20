/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    bg: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
        zIndex: 1,
        // opacity: 0.6,
    },

    content: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    title: {
        color: 'white',
        fontSize: 65,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 20,
        marginBottom: 95,
    },

    createBtn: {
        alignItems: 'center',
        backgroundColor: '#6A4029',
        padding: 17,
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 1,
        marginHorizontal: 20,
        marginBottom: 17,
        marginTop: 40,
    },

    textCreate: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },

    googleContainer: {
        flexDirection: 'row',
    },

    googleBtn: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 17,
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 1,
        marginHorizontal: 20,
        marginBottom: 17,
    },

    textGoogle: {
        color: 'black',
        fontSize: 17,
        paddingLeft: 12,
    },

    btnLoading: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        // padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        // marginHorizontal: 31,
        // marginTop: 25,
        fontSize: 17,
    },

    wrapperPwd: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        marginBottom: 10,
      },
      iconPwd: {
          color: '#fff',
          fontSize: 20,
      },
      inputPwd: {
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        flex: 1,
        paddingBottom: 10,
      },
});

export default styles;
