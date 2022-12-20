import {
    View,
    Text,
    Image,
    useWindowDimensions,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
//   import {currencyFormatter} from '../../../modules/helper/currencyFormatter';
  import styles from '../styles/CardHistory';
  
  
const History = ({ image, productName, status, subtotal }) => {
    const { width } = useWindowDimensions();
    
    const costing = (price) => {
        return (
            "IDR " +
            parseFloat(price)
                .toFixed()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        );
    };

    return (
      <TouchableOpacity
        style={{display: 'flex', paddingLeft: 25, paddingRight: 25, marginVertical: 10}}>
        <View
          style={{
            backgroundColor: 'white',
            width: width / 1.15,
            display: 'flex',
            borderRadius: 20,
            flexDirection: 'row',
            padding: 15,
          }}>
          <View>
            <Image source={{uri: image}} style={styles.imageCard} />
          </View>
          <View style={{paddingLeft: 10, justifyContent:'center'}}>
            <Text style={styles.cardTitle}>{productName}</Text>
            <Text style={styles.cardPrice}>{`${costing(
              subtotal,
            )}`}</Text>
            <Text style={styles.cardStatus}>{status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  export default History;