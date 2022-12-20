/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import styles from '../../styles/HomePage';
import Navbar from '../../components/Navbar';
import Card from '../../components/CardProduct';
import CardPromo from '../../components/CardPromo';
import Sample from '../../assets/images/product.png';
import FontAwesome, { SolidIcons } from 'react-native-fontawesome';
import IconIon from 'react-native-vector-icons/Ionicons';


import {
    Image,
    Text,
    View,
    Pressable,
    TextInput,
    TouchableOpacity,
    ScrollView,
    useWindowDimensions,
    LinearLayout,
    ActivityIndicator,
    Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import productAction from '../../redux/actions/product';

const Home = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const products = useSelector(state => state.product.product);
    const promo = useSelector(state => state.product.promo);
    const isPending = useSelector(state => state.product.isLoading);
    const role = useSelector(state => state.auth.userData.role);
    // console.log(role)


    // const profile = useSelector(state => state.profile.profile);
    // console.log(products)
    useEffect(() => {
        dispatch(productAction.getProductThunk());
    }, [dispatch]);

    useEffect(() => {
        dispatch(productAction.getPromoThunk());
    }, [dispatch]);
    return (
        <View style={styles.sectionContainer}>
            <Navbar>
                <ScrollView style={styles.container}>
                    <Text style={styles.title}>A good coffee is a good day</Text>
                    <Text style={styles.category} onPress={() => { navigation.navigate('ProductDetail'); }}>Favorite Products</Text>
                    <Text style={styles.see} onPress={() => { navigation.navigate('AllProduct'); }}>See more</Text>

                    {isPending ? <View style={styles.btnLoading}>
                        <ActivityIndicator size="large" color="#000" />
                    </View> : products.length > 0 && !isPending && <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        keyboardShouldPersistTaps={'always'}
                        style={{ height: height / 1.5 }}
                    >
                        {products?.map((e) => {
                            return <Card
                                name={e.product_name}
                                price={e.price}
                                img={e.image}
                                id={e.id}
                                key={e.id}
                            />;
                        })}
                    </ScrollView>}
                    <Text style={styles.category}>Promo for you</Text>
                    <Text style={styles.see} onPress={() => { navigation.navigate('AllPromo'); }}>See more</Text>
                    {isPending ? <View style={styles.btnLoading}>
                        <ActivityIndicator size="large" color="#000" />
                    </View> : promo.length > 0 && !isPending && <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        keyboardShouldPersistTaps={'always'}
                        style={{ height: height / 1.8 }}
                    >
                        {promo?.map((e) => {
                            return <CardPromo
                                name={e.code}
                                code={e.promo_name}
                                img={e.image}
                                id={e.id}
                                key={e.id}
                            />;
                        })}
                    </ScrollView>}


                    <ScrollView style={{paddingRight: 10}}>

                    {role === 'Admin' && !modalVisible &&
                        <Pressable onPress={() => setModalVisible(true)}>
                        {/* <IconIon name={'add-circle'} style={styles.addCircle} /> */}
                    </Pressable>}
                    {}

                {/* <Modal
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                > */}
                {role === 'Admin' &&
                    <View style={styles.centeredView}>
                        {/* <View style={styles.modalView}> */}
                            <View style={{ flexDirection: 'row' }}>
                                {/* <Pressable
                                    style={[styles.buttonCircle]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <IconIon name={'close-circle-sharp'} style={styles.removeCircle} />
                                </Pressable> */}
                                <View>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={()=>{navigation.navigate('NewProduct');}}
                                    >
                                        <Text style={styles.textStyle}>New Product</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                    >
                                        <Text style={styles.textStyle} onPress={()=>{navigation.navigate('NewPromo');}}>New Promo</Text>
                                    </Pressable>
                                </View>
                            </View>
                        {/* </View> */}
                    </View>
                }
                {/* </Modal> */}
                    </ScrollView>
                    </ScrollView>
            </Navbar>
        </View>
    );
};

export default Home;
