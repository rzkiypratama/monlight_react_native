/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, TouchableOpacity, Image, ToastAndroid, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';

import styles from '../../styles/Login';
import Input from '../../components/Input';
import google from '../../assets/images/google.png';
import { useDispatch, useSelector } from 'react-redux';
import authAction from '../../redux/actions/auth';
import { useNavigation } from '@react-navigation/native';
// import FontAwesome, { SolidIcons } from 'react-native-fontawesome';
import IconIon from 'react-native-vector-icons/Ionicons';


const Login = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const auth = useSelector(state => state.auth);
    // console.log(auth.userData)
    const [isPwdShown, setIsPwdShown] = useState(true);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const tooglePassword = () => {
        setIsPwdShown(!isPwdShown);
    };

    const onChangeHandler = (text, type) => {
        setForm(form => ({ ...form, [type]: text }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        const loginSuccess = () => {
            ToastAndroid.showWithGravity(
                `Welcome ${form.email}, login successfully`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            );
            navigation.navigate('HomePage');
        };
        const loginError = (error) => {
            ToastAndroid.showWithGravity(
                `${error}`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            );
        };
        dispatch(authAction.loginThunk(form, loginSuccess, loginError));
    };
    return (
        <ScrollView>
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/bgLogin.png')}
                resizeMode="cover"
                style={styles.bg}>
                <View style={styles.content}>
                    <Text style={styles.title}>Login</Text>
                    <Input value={form.email} handler={onChangeHandler} placeholder="Enter your email address" isPassword={false} text={'email'} />
                    {/* <Input value={form.password} handler={onChangeHandler} placeholder='Enter your password' isPassword={true} text={'password'} /> */}
                    <View style={styles.wrapperPwd}>
                        <TextInput
                            secureTextEntry={isPwdShown}
                            style={styles.inputPwd}
                            value={form.password}
                            placeholder="Enter your password"
                            placeholderTextColor="white"
                            onChangeText={text => onChangeHandler(text, 'password')}
                        />
                        <IconIon
                            name={isPwdShown ? 'eye' : 'eye-off'}
                            style={styles.iconPwd}
                            onPress={tooglePassword}
                        />
                    </View>
                    <Text style={styles.forgot} onPress={() => { navigation.navigate('Forgot'); }}>Forgot Password?</Text>
                    <TouchableOpacity style={styles.createBtn} onPress={handleSubmit}>
                        {/* {auth.isLoading ? <View style={styles.btnLoading}>
                            <ActivityIndicator size="large" color="black" />
                        </View> :  */}
                        <Text style={styles.textCreate}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.googleBtn}>
                        <View style={styles.googleContainer}>
                            <Image source={google} />
                            <Text style={styles.textGoogle}>Login with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        </ScrollView>
    );
};

export default Login;
