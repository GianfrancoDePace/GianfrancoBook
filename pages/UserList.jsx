import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { useQuery, useMutation, gql } from '@apollo/client';
import Header from '../components/header';

// Define queries and mutations
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
      password
      city
      dateOfBirth
      bio
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $username: String!, $email: String!, $password: String!, $city: String!, $dateOfBirth: String!, $bio: String!) {
    updateUser(id: $id, username: $username, email: $email, password: $password, city: $city, dateOfBirth: $dateOfBirth, bio: $bio) {
      id
      username
      email
      password
      city
      dateOfBirth
      bio
    }
  }
`;

const UserList = ({ navigation }) => {
  const { loading, error, data, refetch } = useQuery(GET_USERS);
  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted: () => refetch(), // Refetch the query after a user is deleted
  });

  const handleDeleteUser = (id) => {
    deleteUser({ variables: { id } })
      .then(() => {
        Alert.alert('User deleted successfully');
      })
      .catch((err) => {
        Alert.alert('Error deleting user', err.message);
      });
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.header}>User List</Text>
      <FlatList
        data={data.users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.username}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.title}>{item.password}</Text>
            <Text style={styles.title}>{item.city}</Text>
            <Text style={styles.title}>{item.dateOfBirth}</Text>
            <Text style={styles.title}>{item.bio}</Text>
            <Button title="Delete" onPress={() => handleDeleteUser(item.id)} />
            <Button title="Update" onPress={() => navigation.navigate('UpdateUser', { user: item })} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 18,
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default UserList;
