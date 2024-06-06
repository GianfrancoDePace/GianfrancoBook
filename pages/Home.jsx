import React from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require("../assets/icon.png")} style={styles.background}>
      <View style={styles.overlay}>
        <Image source={require("../assets/favicon.png")} style={styles.logo} />
        <Text style={styles.title}>Benvenuto al Social Network</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registrazione')}
        >
          <Text style={styles.buttonText}>Crea Profilo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('UserList')}
        >
          <Text style={styles.buttonText}>Accedi</Text>
        </TouchableOpacity>
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
    backgroundColor: 'rgba(0,0,0,0.7)',
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
    textAlign: 'center',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
  button: {
    backgroundColor: '#',
    borderRadius: 25,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomeScreen;
