import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import bg from '../../assets/images/bgWelcome.png';
import styles from '../../styles/Wlcm';
import {useNavigation} from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';

const App = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
        <View style={styles.content}>
          <Text style={styles.title}>Coffee for Everyone</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // width: 50,
//     backgroundColor: 'black',
//     // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },

//   bg: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'black',
//     zIndex: 1,
//     // opacity: 0.6,
//   },

//   content: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },

//   button: {
//     alignItems: 'center',
//     backgroundColor: '#FFBA33',
//     padding: 22,
//     borderRadius: 10,
//     justifyContent: 'center',
//     // zIndex: 1,
//     marginHorizontal: 20,
//     marginBottom: 54,
//   },

//   title: {
//     color: 'white',
//     fontSize: 65,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     alignItems: 'center',
//     paddingVertical: 100,
//     // backgroundColor: '#000000c0',
//     flex: 1,
//   },

//   text: {
//     color: 'black',
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
// });
