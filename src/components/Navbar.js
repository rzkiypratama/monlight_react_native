/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import IconFW from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';

import { Divider } from '@rneui/themed';

// import Icon from "../assets/images/Vector.png";
// import Chart from "../assets/images/Chart.png";
// import Chat from "../assets/images/Chat.png";
// import Search from "../assets/images/Search.png";
import styles from '../styles/Navbar';
import User from '../assets/images/User.png';
// import IconUser from '../assets/images/IconUser.png';
// import IconMenus from '../assets/images/menu.png';

import {
    View,
    Image,
    Text,
    useWindowDimensions,
    TouchableOpacity,
    Modal,
    Pressable,
    ActivityIndicator,
    ToastAndroid,
    ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import navIcon from '../assets/drawer/5.png';
import userAction from '../redux/actions/user';
import authAction from '../redux/actions/auth';
import { clearState } from '../helpers/clearState';


function Navbar({ children }) {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.profile);
    //   const email = useSelector(state => state.auth.userData.email);
    const auth = useSelector(state => state.auth);
    const role = useSelector(state => state.auth.userData.role);
    // console.log(auth.userData.token)

    const toProfile = () => {
        navigation.navigate('Profile');
    };

    const toAddProduct = () => {
        navigation.navigate('NewProduct');
    };

    const toHistory = () => {
        navigation.navigate('History');
    };

    const logoutHandler = () => {
        const LogoutSuccess = () => {
            ToastAndroid.showWithGravity(
                'Logout success',
                ToastAndroid.SHORT,
                ToastAndroid.TOP
            );
            navigation.navigate('Welcome');
            clearState(dispatch);
        };
        const LogoutError = (error) => {
            ToastAndroid.showWithGravityAndOffset(
                `${error}`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
                25,
                50
            );
        };
        dispatch(authAction.logoutThunk(auth.userData.token, LogoutSuccess, LogoutError));
    };

    useEffect(() => {
        dispatch(userAction.getUserThunk(auth.userData.token));
    }, [auth.userData.token, dispatch]);

    const renderDrawer = () => {
        return (
            <ScrollView>
            <View>
                <View style={styles.continerSwipe}>
                    <Image source={user.image ? {uri: user.image } : null} style={styles.imageDrawer} />
                    {role === 'Admin' ? (
                    <Text style={styles.username}>ADMIN</Text>
                    ) : (
                    <Text style={styles.username}>{user.username}</Text>
                    )}
                    <Text style={styles.email}>{user.email}</Text>
                </View>
                <View style={{ paddingLeft: 35, paddingRight: 35, paddingTop: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View>
                        {/* <DrawerItem>
                            <Icons name={"user-circle"} size={20} style={styles.imageBottom} label="Close drawer"
                            onPress={() => props.navigation.closeDrawer()}/>
                        </DrawerItem> */}
                        {role === 'Admin' ? (
                        <Pressable style={styles.containerBottom} onPress={toAddProduct}>
                            {/* <Image source={IconUser} style={styles.imageBottom}/> */}
                            <Icons name={'user-circle'} size={20} style={styles.imageBottom} />
                            <Text style={styles.textBottom}>Add New Product</Text>
                        </Pressable>
                        ) : (
                            <Pressable style={styles.containerBottom} onPress={toProfile}>
                            {/* <Image source={IconUser} style={styles.imageBottom}/> */}
                            <Icons name={'user-circle'} size={20} style={styles.imageBottom} />
                            <Text style={styles.textBottom}>Edit Profile</Text>
                        </Pressable>
                        )}
                        <Divider style={{ width: '90%', margin: 3 }} />
                        {role === 'Admin' ? (
                        <Pressable style={styles.containerBottom} onPress={toHistory}>
                            {/* <Image source={IconUser} style={styles.imageBottom}/> */}
                            <IconComunity name={'cart-arrow-down'} size={20} style={styles.imageBottom} />
                            <Text style={styles.textBottom}>Manage Orders</Text>
                        </Pressable>
                        ) : (
                            <Pressable style={styles.containerBottom} onPress={toHistory}>
                            {/* <Image source={IconUser} style={styles.imageBottom}/> */}
                            <IconComunity name={'cart-arrow-down'} size={20} style={styles.imageBottom} />
                            <Text style={styles.textBottom}>History Order</Text>
                        </Pressable>
                        )}
                        <Divider style={{ width: '90%', margin: 3 }} />
                        <View style={styles.containerBottom}>
                            {/* <Image source={IconMenus} style={styles.imageBottom}/> */}
                            <IconComunity name={'food-outline'} size={20} style={styles.imageBottom} />
                            <Text style={styles.textBottom}>All menu</Text>
                        </View>
                        <Divider style={{ width: '90%', margin: 3 }} />
                        <View style={styles.containerBottom}>
                            <Icons name={'sticky-note'} size={20} style={styles.imageBottom} />
                            <Text style={styles.textBottom}>Privacy policy</Text>
                        </View>
                        <Divider style={{ width: '90%', margin: 3 }} />
                        <View style={styles.containerBottom}>
                            {/* <Image source={IconUser} style={styles.imageBottom}/> */}
                            <IconComunity name={'shield-half-full'} size={20} style={styles.imageBottom} />
                            <Text style={styles.textBottom}>Security</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.containerLogout} onPress={() => setModalVisible(true)}>
                        {/* <Image source={IconUser} style={styles.imageBottom}/> */}
                        <Text style={styles.textBottom}>Logout</Text>
                        <IconFW name={'sign-out'} size={20} style={styles.imageBottom} />
                    </TouchableOpacity>
                </View>
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Are you sure want to logout?</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>NO</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={logoutHandler}
                                >
                                    {auth.isLoading ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.textStyle}>YES</Text>}
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            </ScrollView>
        );
    };

    return (
        <>
            <DrawerLayout
                drawerWidth={300}
                drawerPosition={DrawerLayout.positions.Left}
                drawerType="front"
                drawerBackgroundColor="#F2F2F2"
                overlayColor="rgba(255, 255, 255, 0.8)"
                drawerContainerStyle={{ borderTopRightRadius: 30 }}
                renderNavigationView={renderDrawer}>
                <View style={styles.sectionContainer}>
                    <View onPress={() => DrawerLayout.current.openDrawer()}>
                        {/* <Image source={Icon} /> */}
                        {/* <IconComunity name={'gesture-swipe-right'} style={{ fontSize: 40, color: 'black' }} /> */}
                        <Image source={navIcon}/>
                    </View>
                    <View style={styles.left}>
                        {/* <Image source={Chat} style={styles.icon}/> */}
                        {/* <Image source={Search} style={styles.icon}/> */}
                        <Icons name={'comment'} style={{ transform: [{ rotateY: '180deg' }], fontSize: 25, marginHorizontal: 7, color: 'grey' }} />
                        <IconIon name={'search-outline'} style={styles.Icons} />
                        <IconIon name={'cart-outline'} style={styles.Icons} />
                        {/* <Image source={Chart} style={styles.icon}/> */}
                        {/* <Icons name={"search"} size={20} style={styles.icon}/>
                  <Icons name={"shopping-cart"} size={20} style={styles.icon}/> */}
                    </View>
                </View>
                {children}
            </DrawerLayout>
        </>
    );
}

export default Navbar;
