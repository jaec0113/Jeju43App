import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '../components/Card';
import {globalStyles} from '../styles/globalStyles';

export default function StoryDetails({route}) {
  const {title} = route.params;
  const {story} = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.title}>Title: {title}</Text>
        <Text style={styles.story}>Story: {story}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  story: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
