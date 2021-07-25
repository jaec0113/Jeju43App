import React from 'react';
import {
  View,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import {storyData} from '../assets/events';
import {globalStyles, storyImage} from '../styles/globalStyles';

export default function MainMenu({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Button title="Go To Map" />
      <View style={styles.eventContainer}>
        <FlatList
          data={storyData}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('StoryDetails', item)}>
              <Image
                source={storyImage.storyName[item.image]}
                style={styles.storyImage}
              />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eventContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  storyImage: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
  },
});
