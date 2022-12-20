/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import ButtonOpacity from '../../components/ButtonOpacity';
import styles from '../../styles/NewPromo';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import camera from '../../assets/images/camera.png';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import productActions from '../../redux/actions/product';

function NewPromo() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [body, setBody] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [file, setFile] = useState();
  const token = useSelector(state => state.auth.userData.token);

  const changeHandler = (text, name) => {
    setBody(body => ({...body, [name]: text}));
  };

  const createProductHandler = () => {
    const success = id => {
      ToastAndroid.showWithGravityAndOffset(
        'Promo Created',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50,
      );
      console.log(id);
      navigation.navigate('AllPromo');
    };
    const error = error => {
      ToastAndroid.showWithGravityAndOffset(
        `${error}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50,
      );
    };
    let bodies = new FormData();
    file &&
      bodies.append('image', {
        name: 'test.' + file[0]?.type?.substr(6),
        type: file[0]?.type,
        uri:
          Platform.OS !== 'android' ? 'file://' + file[0]?.uri : file[0]?.uri,
      });
    body.promo_name && bodies.append('promo_name', body.promo_name);
    body.code && bodies.append('code', body.code);
    body.description && bodies.append('description', body.description);
    body.discount && bodies.append('discount', body.discount);
    body.min_price && bodies.append('min_price', body.min_price);
    body.duration && bodies.append('duration', body.duration);

    dispatch(productActions.createPromoThunk(bodies, token, success, error));
  };

  let cameraLauncher = () => {
    let options = {
      storageOptions: {
        saveToPhotos: true,
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.errorMessage) {
        console.log(response);
        return ToastAndroid.showWithGravityAndOffset(
          'Do not have access to open the camera',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          50,
        );
      }
      setFile(response.assets);
    });
  };

  let libraryLauncher = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.errorMessage) {
        return ToastAndroid.showWithGravityAndOffset(
          'Do not have access to open the library',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          50,
        );
      }
      setFile(response.assets);
    });
  };
  return (
    <>
      <ScrollView>
        <View style={styles.all_container}>
          <View />
          <View style={styles.container_up}>
            <Image
              style={styles.image}
              source={file ? {uri: file[0].uri} : camera}
            />
            <ButtonOpacity
              color={'#000000'}
              text="Open Camera"
              radius={10}
              colorText="white"
              height={40}
              width={'100%'}
              marginBottom={10}
              marginTop={20}
              onPressHandler={{
                onPress: cameraLauncher,
              }}
            />
            <ButtonOpacity
              color={'#000000'}
              text="Open Gallery"
              radius={10}
              colorText="white"
              height={40}
              width={'100%'}
              marginBottom={10}
              // marginTop={10}
              // onPress={postRegister}
              onPressHandler={{
                onPress: libraryLauncher,
              }}
            />
          </View>
          <View>
            <Text style={styles.text}>Promo Name</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type promo name min. 30 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'promo_name')}
            />
            <Text style={styles.text}>Promo Code</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type promo name min. 30 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'code')}
            />
            <Text style={styles.text}>Discount</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type promos discount, ex: 0.5"
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(parseInt(text), 'discount')}
            />
            <Text style={styles.text}>Duration</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type promos duration, ex: 15"
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(parseInt(text), 'duration')}
            />
            <Text style={styles.text}>Minimal Price</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type min buying to get promos"
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(parseInt(text), 'min_price')}
            />
            <Text style={styles.text}>Description</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Describe your promos max. 150 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'description')}
            />
          </View>
          <View>
            <ButtonOpacity
              color={'#6A4029'}
              text="Create Promo"
              radius={10}
              colorText="white"
              height={50}
              width={'100%'}
              marginBottom={10}
              marginTop={20}
              // onPress={postRegister}
              onPressHandler={{
                onPress: createProductHandler,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default NewPromo;
