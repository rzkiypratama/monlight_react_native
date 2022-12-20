/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import styles from '../../styles/ProductsDetails';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
// import Sample from '../image/product.png'
// import ButtonCustom from '../components/FancyButton'

import {
    ActivityIndicator,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    useWindowDimensions,
    ScrollView,
    ToastAndroid,
    Pressable,
    Modal,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import productAction from '../../redux/actions/product';
import transactionActions from '../../redux/actions/transaction';
// import axios from 'axios';

function ProductDetail(props) {
    const { height, width } = useWindowDimensions();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const productId = props.route.params;
    const auth = useSelector(state => state.auth.userData);
    const detail = useSelector(state => state.product.detail);
    const isLoading = useSelector(state => state.product.isLoading);
    const [size, setSize] = useState('1');
    const [modalVisible, setModalVisible] = useState(false);

    console.log(size);

    const addCart = () => {
        if (!modalVisible) {return setModalVisible(true);}
        const cart = {
            id: productId,
            price: detail.price,
            image: detail.image,
            productName: detail.product_name,
            size: size,
        };
        dispatch(transactionActions.dataTransaction(cart));
        return ToastAndroid.showWithGravity(
            'Added Product To Cart',
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            navigation.navigate('Cart')
        );
    };

    useEffect(() => {
        dispatch(productAction.getDetailThunk(productId, auth.token));
    }, [auth.token, dispatch, productId]);

    // useEffect(()=>{
    //     const BaseUrl = process.env.BACKEND_URL
    //     axios.get(`${BaseUrl}/products/${product_id}`).then((result)=>{
    //         setProduct(result.data.data);
    //     }).catch((error)=>{
    //         console.log(error);
    //         ToastAndroid.showWithGravityAndOffset(
    //             `Something Error`,
    //             ToastAndroid.SHORT,
    //             ToastAndroid.TOP,
    //             25,
    //             50
    //         );
    //         navigation.goBack()
    //     })
    // })

    const costing = (price) => {
        return (
            parseFloat(price)
                .toFixed()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        );
    };

    // useEffect(()=>{console.log(product)})
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <IconComunity name="chevron-left" size={22} style={styles.icon} onPress={() => { navigation.goBack(); }} />
                <IconComunity name="cart-outline" size={22} style={styles.icon} />
            </View>
            <View style={styles.main}>
                {/* <View style={styles.price}>
                    <Text style={styles.priceText}>{costing(detail.price)}</Text>
                </View> */}
                {isLoading ? (
                    <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  paddingTop: 200,
                }}>
                    <ActivityIndicator size={'large'} color={'#000'} />
              </View>
                ) : (
                    <>
                    <View style={styles.price}>
                    <Text style={styles.priceText}>{costing(detail.price)}</Text>
                </View>
                <View style={styles.top}>
                    <Image source={{ uri: detail.image }} style={styles.product} />
                    <Text style={styles.Title}>{detail.product_name}</Text>
                </View>
                    </>
                )}
                <View style={styles.bottom}>
                    <Text style={styles.firstText}>Delivery only on <Text style={{ color: '#6A4029', fontFamily: 'Poppins-Bold', fontWeight: 'bold' }}>Monday to friday </Text> at <Text style={{ color: '#6A4029', fontFamily: 'Poppins-Bold', fontWeight: 'bold' }}>1 - 7 pm</Text></Text>
                    <Text style={styles.description}>{detail.description}</Text>
                    <Text style={styles.sizeText}> Choose a size</Text>
                    <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                        <Pressable style={size === '1' ? styles.selected : styles.button} onPress={() => { setSize('1'); }}>
                            <Text style={size === '1' ? styles.selectedText : styles.buttonText}>R</Text>
                        </Pressable>
                        <Pressable style={size === '2' ? styles.selected : styles.button} onPress={() => { setSize('2'); }}>
                            <Text style={size === '2' ? styles.selectedText : styles.buttonText}>L</Text>
                        </Pressable>
                        <Pressable style={size === '3' ? styles.selected : styles.button} onPress={() => { setSize('3'); }}>
                            <Text style={size === '3' ? styles.selectedText : styles.buttonText}>XL</Text>
                        </Pressable>
                    </View>
                    <View style={{ width: width, paddingBottom: 30 }}>
                        {/* <ButtonCustom text={"Add to cart"} textColor={"white"} color={"#6A4029"}/> */}
                        <TouchableOpacity
                            onPress={addCart}
                            activeOpacity={0.8}>
                            <View
                                style={{
                                    backgroundColor: '#6A4029',
                                    height: 70,
                                    width: width / 1.2,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ color: 'white', fontFamily: 'Poppins-Bold', fontSize: 17, fontWeight: 'bold' }}>Add to cart</Text>
                            </View>
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
                        <Text style={styles.modalText}>Are you want to continue transaction?</Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>

                        <Pressable
                            onPress={()=>{
                                addCart();
                                setModalVisible(false);
                                return ToastAndroid.showWithGravityAndOffset(
                                    'Added Product To Cart',
                                    ToastAndroid.SHORT,
                                    ToastAndroid.TOP,
                                    25,
                                    50
                                );
                            }}
                            style={[styles.buttonModal, styles.buttonClose]}
                        >
                            <Text style={styles.textStyle}>Continue</Text>
                                    </Pressable>
                                    <Pressable
                            style={[styles.buttonModal, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        </View>
                    </View>
                    </View>
                </Modal>
                </View>
            </View>
        </View>
    );
}

export default ProductDetail;
