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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from '../../styles/Forgot';
import bg from '../../assets/images/bgWelcome.png';
import Input from "../../components/Input";
import { useDispatch, useSelector } from 'react-redux';
import authAction from '../../redux/actions/auth';

const Forgot = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const loading = useSelector(state => state.auth.isLoading)
    const [email, setEmail] = useState('');

    console.log(email);

    const onChangeHandler = (text, type) => {
        setEmail(email => ({ ...email, [type]: text }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        const forgotSuccess = () => {
            ToastAndroid.showWithGravity(
                `Congrats ${email.email}! Please check your email!`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            )
            navigation.navigate('Reset')
        }

        const forgotError = (error) => {
            ToastAndroid.showWithGravity(
                `${error}`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            )
        }

        dispatch(authAction.forgotThunk(email, forgotSuccess, forgotError))
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={bg} resizeMode="cover" style={styles.bg} />
            <View style={styles.content}>
                <Text style={styles.title}>Don't Worry!</Text>
                <Text style={styles.titleDesc}>
                    Enter your email address to get reset password link
                </Text>
                <ScrollView style={styles.form}>
                    <KeyboardAvoidingView>
                        <Input value={email} handler={onChangeHandler} placeholder='Enter your email address' isPassword={false} text={'email'} />
                        <Text style={styles.textConfirmation}>
                            Haven&#39;t received any link?
                        </Text>
                        <TouchableOpacity style={styles.resendLink} onPress={handleSubmit}>
                            {loading ? <View style={styles.googleBtn}>
                                <ActivityIndicator size='large' color='white' />
                            </View> : <Text style={styles.textResendLink}>Resend Link</Text>}
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </View>
    );
};

export default Forgot;