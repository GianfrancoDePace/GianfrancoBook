import React from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Benvenuto al Social Network</Text>
      <ImageBackground source={require("../assets/icon.png")}/>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Button
        title="Crea Profilo"
        onPress={() => navigation.navigate('createUser')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default HomeScreen;
