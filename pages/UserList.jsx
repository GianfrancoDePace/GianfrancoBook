import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Avatar, Card } from '@rneui/themed';
import Header from '../components/header';
import Footer from '../components/footer';
import { Button } from '@rneui/base';

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
          <TouchableOpacity onPress={() => navigation.navigate('Profilo Utente', { user: item })}>
            <Card>
              <ImageBackground style={styles.image} source={require("../assets/favicon.png")} />
              <View style={styles.avatarContainer}>
                <Avatar size={100} rounded source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }} />
              </View>
              <Text style={styles.title}>@{item.username}</Text>
              <Text style={styles.bio}>{item.bio}</Text>
              <Button title="Cancella utente" onPress={() => handleDeleteUser(item.id)} />
            </Card>
          </TouchableOpacity>
        )}
      />
      <Footer />
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
  image: {
    width: 90,
    height: 90,
    opacity: 1,
  },
  avatarContainer: {
    borderColor: "white",
    borderRadius: 50,
    borderWidth:3, 
    position: 'absolute',
    bottom: 50,
    right: 5,
    padding:null,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 18,
    marginTop: 80, // Adjusted to give space for the avatar
  },
  bio: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default UserList;
