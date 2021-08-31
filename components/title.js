import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interviewer</Text>
      <Text style={styles.des}>your way to win  intreview</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: '800',
    color:'rgb(51,50,92)',
    paddingTop:20,
  },
  des : {
    fontSize: 25,
    fontWeight: '500',
    color:'rgb(51,50,92)',
    paddingTop:20,
  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
