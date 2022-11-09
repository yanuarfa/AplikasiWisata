/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export default Home;
