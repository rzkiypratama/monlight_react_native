import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import styles from "../styles/CardPromo";
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// import Sample from "../assets/images/product.png"


const CardPromo = ({ img, name, code}) => {
    // const navigation = useNavigation()
    const role = useSelector(state => state.auth.userData.role)

    return (
        <Pressable style={styles.card}>
            {role === 'User' && <Pressable
                style={styles.conPencl}
                onPress={() => setModalVisible(true)}>
                <IconComunity name={'pencil'} style={styles.pencil} size={20} />
            </Pressable>}
            <View style={styles.containerImage}>
                <Image source={{uri:img}} style={styles.imageCard} />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardPrice}>{code}</Text>
            </View>
        </Pressable>
    )
}

export default CardPromo

