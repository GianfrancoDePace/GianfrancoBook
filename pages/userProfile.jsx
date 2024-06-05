import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfile = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>City: {user.city}</Text>
      <Text>Date of Birth: {user.dateOfBirth}</Text>
      <Text>Bio: {user.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default UserProfile;
