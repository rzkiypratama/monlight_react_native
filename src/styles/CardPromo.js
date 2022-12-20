import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        marginTop: 50,
        position: 'relative',
        backgroundColor: '#FFCB65',
        width: 220,
        height: 270,
        shadowColor: "#3939391A",
        elevation: 1,
        borderRadius: 30,
        marginHorizontal: 20
      },
      imageCard: {
        width: 168,
        height: 189,
        borderRadius: 20
      },
      containerImage:{
        position: "relative",
        left: 25,
        top:-35 
      },
      containerTitle:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      cardTitle: {
        // fontFamily: "Poppins-Bold",
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        width: "100%",
        lineHeight: 22.29
      },
      cardPrice: {
        // fontFamily: "Poppins-Bold",
        fontWeight: 'bold',
          fontSize: 17,
          textAlign: 'center',
          color: "#6A4029",
          width: "80%",
  },
  conPencl: {
    backgroundColor: '#6A4029',
    width: 35,
    height: 35,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
    top: 130,
    zIndex: 10,
  },
  pencil: {
    color: 'white',
  },
})

export default styles