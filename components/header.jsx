import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/favicon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>GianfrancoBook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
