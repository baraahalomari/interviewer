import React, { useLayoutEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import Title from '../components/title';
import { auth, db } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Avatar } from 'react-native-elements';


const DATA = [
  {
    id: "18",
    title: "Science Computers",
  },
  {
    id: "9",
    title: "General Knowledge",
  },
  {
    id: "19",
    title: "Mathematics",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);



const Home = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState();

  const signOutUser = () => {
    auth.signOut().then(() => {
        navigation.replace('login')
    })
}

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${auth.currentUser.displayName}`,
      headerStyle: { backgroundColor: "#1c6355" },
      headerTitleStyle: { color: "white" },
      headerTitleColor: 'white',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      )
   
    })
  }, [navigation]);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#80ffff" : "rgb(51,50,92)";
    const color = item.id === selectedId ? 'black' : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

 
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={require('../intro.png')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>


      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>


      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz', { selectedId: selectedId })}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

 export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
    height: '100%',
    width:200,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    paddingTop: 10,
    backgroundColor: '#1c6355',
    padding: 16,
    borderRadius: 16,
    marginBottom: 15,
    margin:5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 27,
    fontWeight: '700',
    color: 'white',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
});
