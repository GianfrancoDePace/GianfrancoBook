import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../Queries/GetData';

const AddUserForm = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [bio, setBio] = useState('');
  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(it|com)$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/;
    return passwordRegex.test(password);
  };

  const handleAddUser = () => {
    const newErrors = {};

    if (!username) newErrors.username = 'Campo obbligatorio';
    if (!email) newErrors.email = 'Campo obbligatorio';
    if (!validateEmail(email)) newErrors.email = 'Email non valida';
    if (!password) newErrors.password = 'Campo obbligatorio';
    if (!validatePassword(password)) newErrors.password = 'La password deve contenere lettere maiuscole, minuscole e almeno un carattere speciale';
    if (!city) newErrors.city = 'Campo obbligatorio';
    if (!dateOfBirth) newErrors.dateOfBirth = 'Campo obbligatorio';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addUser({ variables: { username, email, password, city, dateOfBirth, bio } }).then(() => {
      navigation.navigate('Lista Utenti');
    });

    setUsername('');
    setEmail('');
    setPassword('');
    setCity('');
    setDateOfBirth('');
    setBio('');
    setErrors({});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, errors.username && styles.errorInput]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

      <TextInput
        style={[styles.input, errors.email && styles.errorInput]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={[styles.input, errors.password && styles.errorInput]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        style={[styles.input, errors.city && styles.errorInput]}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}

      <TextInput
        style={[styles.input, errors.dateOfBirth && styles.errorInput]}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />
      {errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}

      <TextInput
        style={[styles.input, styles.bioInput, errors.bio && styles.errorInput]}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline={true}
        numberOfLines={4}
      />
      {errors.bio && <Text style={styles.errorText}>{errors.bio}</Text>}

      <Button title="Add User" onPress={handleAddUser} disabled={loading} />
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
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  bioInput: {
    height: 80,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default AddUserForm;
