/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import styles from '../styles/CardProduct';
import { useNavigation } from '@react-navigation/native';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

// import Sample from "../assets/images/product.png"


const CardProduct = ({ img, name, price, id }) => {
    const navigation = useNavigation();
    const role = useSelector(state => state.auth.userData.role);

    const costing = (price) => {
        return (
            'IDR ' +
            parseFloat(price)
                .toFixed()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        );
    };
    return (
        <Pressable style={styles.card} onPress={() => { navigation.navigate('ProductDetail', id); }}>
            {role === 'Admin' && <Pressable
                style={styles.conPencl}
                // onPress={() => setModalVisible(true)}
                >
                <IconComunity name={'pencil'} style={styles.pencil} size={20} />
            </Pressable>}

            <View style={styles.containerImage}>
                <Image source={{ uri: img }} style={styles.imageCard} />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardPrice}>{costing(price)}</Text>
            </View>
        </Pressable>
    );
};

export default CardProduct;

