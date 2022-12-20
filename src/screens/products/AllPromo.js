import React, { useCallback, useEffect, useState } from 'react'

import styles from '../../styles/AllPromo';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from "../../components/CardAllPromo";
import IconIon from 'react-native-vector-icons/Ionicons'


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
import productAction from '../../redux/actions/product';
import debounce from 'lodash.debounce';

function AllPromo() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const promo = useSelector(state => state.product.promo)
    const isLoading = useSelector(state => state.product.isLoading);
    const pagination = useSelector(state => state.product.pagination);
    const [query, setQuery] = useState({
        code: '',
        page: 1,
    });

    const nextItems = () => {
        if (query.page == pagination.totalPage)
            return setQuery({...query, page: query.page+1})
    }

    const debounceHandler = useCallback(
        debounce(text => {
            // console.log(text);
            setQuery({ ...query, code: text });
        }, 500),
        [],
    );

    const searchHandler = text => {
        if (!text) return;
        debounceHandler(text);
    };

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
            No more promo
          </Text>
        )}
      </View>
        )
    }

    useEffect(() => {
        dispatch(productAction.getPromoThunk(query))
    }, [query])

    return (
        <View style={styles.container}>
      <View style={{padding: 30}}>
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
                <Text style={styles.title}>Promo</Text>
                <View style={styles.wrapperSearch}>
                    {/* <FontAwesome icon={SolidIcons.search} style={styles.iconSearch} /> */}
                    <IconIon name={"search-outline"} style={styles.Icons} />
                    <TextInput
                        style={styles.textPlaceholder}
                        placeholder="Search"
                        placeholderTextColor="grey"
                        onChangeText={text => searchHandler(text)}
                    // onChangeText={handlersearch}
                    />
                </View>
        {/* {history && history.length !== 0 ? (
          <View style={styles.swipe}>
            <IconComunity
              name={'gesture-tap-hold'}
              size={20}
              style={{color: 'brown'}}
            />
            <Text style={styles.swipeText}>Hold on an item to delete</Text>
          </View>
        ) : (
          <Text>Sorry we cant find anything</Text>
        )} */}
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
            ) : promo && promo.length > 0 && (
        <FlatList
          data={promo}
          renderItem={({item}) => {
            return (
              <Card
                image={item.image}
                status={item.promo_name}
                productName={item.code}
                // subtotal={item.subtotal}
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

export default AllPromo