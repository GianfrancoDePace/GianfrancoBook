import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../Queries/GetData';

const UpdateUser = ({ route, navigation }) => {
  const { user } = route.params;

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [city, setCity] = useState(user.city);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
  const [bio, setBio] = useState(user.bio);
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER);

  const handleUpdateUser = () => {
    updateUser({ variables: { id: user.id, username, email, password, city, dateOfBirth, bio } })
      .then(() => {
        Alert.alert('User updated successfully');
        navigation.navigate('UserList');
      })
      .catch((err) => {
        Alert.alert('Error updating user', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update User</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />
      <TextInput
        style={[styles.input, styles.bioInput]}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Update User" onPress={handleUpdateUser} disabled={loading} />
      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.error}>Error: {error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  bioInput: {
    height: 80,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default UpdateUser;
