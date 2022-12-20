import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    // Image,
    KeyboardAvoidingView,
    ScrollView,
    ToastAndroid,
    ActivityIndicator,
    TextInput
} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import IconIon from 'react-native-vector-icons/Ionicons'



import styles from '../../styles/Reset';
import bg from '../../assets/images/bgWelcome.png';
import Input from "../../components/Input";
import { useDispatch, useSelector } from 'react-redux';
import authAction from '../../redux/actions/auth';

const Reset = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const loading = useSelector(state => state.auth.isLoading)
    const [isPwdShown, setIsPwdShown] = useState(true);
    const [isPwdShown2, setIsPwdShown2] = useState(true);
    const [form, setForm] = useState({
        otp: '',
        newPassword: '',
        confirmPassword: '',
    });

    console.log(form);

    const tooglePassword = () => {
        setIsPwdShown(!isPwdShown);
    };

    const tooglePassword2 = () => {
        setIsPwdShown2(!isPwdShown2);
    };

    const onChangeHandler = (text, type) => {
        setForm(form => ({ ...form, [type]: text }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        const forgotSuccess = () => {
            ToastAndroid.showWithGravity(
                `Congrats! Your Password updated successfully!`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            )
            navigation.navigate('Login')
        }

        const forgotError = (error) => {
            ToastAndroid.showWithGravity(
                `${error}`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            )
        }

        dispatch(authAction.resetThunk(form, forgotSuccess, forgotError))
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={bg} resizeMode="cover" style={styles.bg} />
            <View style={styles.content}>
                <Text style={styles.title}>ONE STEP AGAIN!</Text>
                <Text style={styles.titleDesc}>
                    Enter your OTP to reset your password 
                </Text>
                <ScrollView style={styles.form}>
                    <KeyboardAvoidingView>
                        <Input value={form.otp} placeholder='Enter your OTP' isPassword={false} type='phone-pad' handler={onChangeHandler} text={'otp'} />
                        {/* <Input value={form.newPassword} placeholder='Enter your new password' isPassword={true} type='none' handler={onChangeHandler} text={'newPassword'} /> */}
                        {/* <Input value={form.confirmPassword} placeholder='Confirm your new password' isPassword={true} type='none' handler={onChangeHandler} text={'confirmPassword'} /> */}
                        <View style={styles.wrapperPwd}>
                            <TextInput
                                secureTextEntry={isPwdShown}
                                style={styles.inputPwd}
                                value={form.newPassword}
                                placeholder="Enter your password"
                                placeholderTextColor="white"
                                onChangeText={text => onChangeHandler(text, 'newPassword')}
                            />
                            <IconIon
                                name={isPwdShown ? 'eye' : 'eye-off'}
                                style={styles.iconPwd}
                                onPress={tooglePassword}
                            />
                        </View>
                        <View style={styles.wrapperPwd}>
                            <TextInput
                                secureTextEntry={isPwdShown2}
                                style={styles.inputPwd}
                                value={form.confirmPassword}
                                placeholder="Enter your password"
                                placeholderTextColor="white"
                                onChangeText={text => onChangeHandler(text, 'confirmPassword')}
                            />
                            <IconIon
                                name={isPwdShown2 ? 'eye' : 'eye-off'}
                                style={styles.iconPwd}
                                onPress={tooglePassword2}
                            />
                        </View>
                        <Text style={styles.textConfirmation}>
                            Haven&#39;t received any link?
                        </Text>
                        <TouchableOpacity style={styles.resendLink} onPress={handleSubmit}>
                            {loading ? <View style={styles.googleBtn}>
                                <ActivityIndicator size='large' color='black' />
                            </View> : <Text style={styles.textResendLink}>Reset Password</Text>}
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </View>
    );
};

export default Reset;