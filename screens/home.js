import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
      <View>
        <Image
          source={require('../assets/app_logo.png')}
          style={styles.homeImage}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  homeImage: {
    height: '100%',
    width: '100%',
  },
});
