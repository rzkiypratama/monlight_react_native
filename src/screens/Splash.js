import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from '../styles/Splash';
import splash from '../assets/images/logo1.png';
import {useDispatch, useSelector} from 'react-redux';
import {clearState} from '../helpers/clearState';
import userAction from '../redux/actions/user';

function SplashScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.userData.token);

  const navigateStarted = () => {
    clearState(dispatch);
    navigation.dispatch(StackActions.replace('Welcome'));
  };

  const navigateHome = () =>
    navigation.dispatch(StackActions.replace('HomePage'));

  useEffect(() => {
    dispatch(userAction.getUserThunk(token, navigateHome, navigateStarted));
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={splash} resizeMode="cover" style={styles.bg}>
        {/* <Text style={styles.mainText}>Saka Coffee</Text>
        <Text style={styles.thirdText}>Developed by</Text>
        <Text style={styles.thirdText}>Zain Rofa</Text> */}
      </ImageBackground>
    </View>
  );
}

export default SplashScreen;
