import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
    paddingHorizontal: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingTop: 40,
    paddingBottom: 10,
  },
  titleContent: {
      fontFamily: 'Poppins-ExtraBold',
      fontWeight: 'bold',
    fontSize: 34,
    color: '#000',
    marginTop: 30,
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  textInfo: {
      fontFamily: 'Poppins-Bold',
      fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  btnEdit: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#6A4029',
  },
  wrapperProfile: {
    width: 320,
    height: 197,
    borderRadius: 30,
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#393939',
    elevation: 1,
  },
  contentImage: {
    marginRight: 20,
  },
  btn: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    height: 60,
    marginBottom: 27,
  },
  btnSave: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 70,
    marginBottom: 27,
    backgroundColor: '#6A4029',
  },
  address: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 15,
    color: '#6A4029',
    width: 160,
    height: 50,
    lineHeight: 23,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  textName: {
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    width: 160,
  },
  textEmail: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 15,
    color: '#6A4029',
    width: 160,
    height: 40,
    lineHeight: 40,
  },
  textPhone: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 15,
    color: '#6A4029',
    width: 160,
    lineHeight: 30,
  },
});

export default styles;