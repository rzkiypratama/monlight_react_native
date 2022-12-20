import React, { useEffect, useState } from 'react'

import styles from '../../styles/History';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from "../../components/CardHistory";
import { SwipeItem, SwipeButtonsContainer } from 'react-native-swipe-item';
import Sample from '../../assets/images/product.png';
import ViewOverflow from 'react-native-view-overflow';

import {
  View,
  Image,
  ScrollView,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import transactionActions from '../../redux/actions/transaction';

function History() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const history = useSelector(state => state.transaction.history)
  const token = useSelector(state => state.auth.userData.token)
  const isLoading = useSelector(state => state.transaction.isLoading)
  const pagination = useSelector(state => state.transaction.pagination)
  const [query, setQuery] = useState({ page: 1, limit: 7 })


  const renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
          justifyContent: 'center',
          paddingBottom: 10,
        }}>
        {isLoading && <ActivityIndicator size="large" color="black" />}
        {pagination.totalPage == query.page && (
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontFamily: 'Poppins-Regular',
            }}>
            No more transcations history
          </Text>
        )}
      </View>
    )
  }

  const nextItems = () => {
    if (query.page == pagination.totalPage)
      return setQuery({ ...query, page: query.page + 1 })
  }

  useEffect(() => {
    dispatch(transactionActions.getHistoryThunk(token, query))
  }, [query])

  return (
    <View style={styles.container}>
      <View style={{ padding: 30 }}>
        <IconComunity
          name={'chevron-left'}
          size={20}
          style={styles.icons}
          onPress={() => {
            navigation.goBack();
          }}
          onLongPress={() => {
            navigation.navigate('HomePage');
          }}
        />
        <Text style={styles.title}>Order History</Text>
        {history && history.length !== 0 ? (
          <View style={styles.swipe}>
            <IconComunity
              name={'gesture-tap-hold'}
              size={20}
              style={{ color: 'brown' }}
            />
            <Text style={styles.swipeText}>Hold on an item to delete</Text>
          </View>
        ) : (
          <Text>Sorry we cant find anything</Text>
        )}
      </View>
      {isLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            paddingTop: 200,
          }}>
          <ActivityIndicator size={'large'} color={'#6A4029'} />
        </View>
      ) : history && history.length > 0 && (
        <FlatList
          data={history}
          renderItem={({ item }) => {
            return (
              <Card
                image={item.image}
                status={item.status_name}
                productName={item.product_name}
                subtotal={item.subtotal}
              />
            );
          }}
          onEndReachedThreshold={0.5}
          onEndReached={nextItems}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  )
}

export default History