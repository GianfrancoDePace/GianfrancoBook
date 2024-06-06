import React from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require("../assets/icon.png")} style={styles.background}>
      <View style={styles.overlay}>
        <Image source={require("../assets/favicon.png")} style={styles.logo} />
        <Text style={styles.title}>Benvenuto al Social Network</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image}
        />
        <Button
          title="Crea Profilo"
          color="#841584"
          onPress={() => navigation.navigate('createUser')}
        />
        <Button
          title="Accedi"
          color="#841584"
          onPress={() => navigation.navigate('UserList')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    marginVertical: 10,
  },
});

export default HomeScreen;
