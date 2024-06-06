import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 Your Social Network</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});

export default Footer;
