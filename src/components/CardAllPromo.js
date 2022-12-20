/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    View,
    Text,
    Image,
    useWindowDimensions,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
//   import {currencyFormatter} from '../../../modules/helper/currencyFormatter';
  import styles from '../styles/CardAllPromo';


const CardAllPromo = ({ image, productName, status, subtotal }) => {
    const { width } = useWindowDimensions();

    return (
      <TouchableOpacity
        style={{display: 'flex', paddingLeft: 25, paddingRight: 25, marginVertical: 10}}>
        <View
          style={{
            backgroundColor: '#F5C361',
            width: width / 1.15,
            display: 'flex',
            borderRadius: 20,
            flexDirection: 'row',
            padding: 15,
          }}>
          <View>
            <Image source={{uri: image}} style={styles.imageCard} />
          </View>
          <View style={{paddingLeft: 15, justifyContent:'center'}}>
            <Text style={styles.cardTitle}>{productName}</Text>
            <Text style={styles.cardStatus}>{status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  export default CardAllPromo;
