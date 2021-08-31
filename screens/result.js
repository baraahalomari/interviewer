import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Result = ({ route, navigation }) => {
  const { graid } = route.params;
  const src = graid >= 5  ? "https://media0.giphy.com/media/jsGz81YPCgw9YSliV0/giphy.gif?cid=6c09b9520giy74pj8w2dgz6cee7tiieejise9ztgx95wphw2&rid=giphy.gif&ct=s" : "https://c.tenor.com/V7GwZH0kIToAAAAC/game-over.gif";
  return (
    <View>
      <View style={styles.view} >
        <Text style={styles.result}>Your Result</Text>
        <Text style={styles.graid}>{JSON.stringify(graid)} / 10</Text>

      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: `${src}`,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  view: {
    paddingTop: 70,
    paddingHorizontal: 25,

  },
  banner: {
    height: 300,
    width: 300,
    padding: 35,
    paddingBottom: 50,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  graid: {
    paddingTop: 40,
    paddingHorizontal: 120,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgb(51,50,92)',
  },
  result: {
    paddingTop: 10,
    paddingHorizontal: 80,
    fontSize: 35,
    alignItems: 'center',
    color: 'rgb(51,50,92)',
    fontWeight: '700'
  },
  button: {
    width: '100%',
    backgroundColor: '#1c6355',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 150,
    marginBottom: 55,
  },
  buttonText: {
    fontSize: 27,
    fontWeight: '700',
    color: 'white',
  },
});
