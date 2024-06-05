import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Avatar, Card } from '@rneui/themed';
import Header from '../components/header';
import Footer from '../components/footer';

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
          <TouchableOpacity onPress={() => navigation.navigate('UserProfile', { user: item })}>
            <Card>
              <ImageBackground style={styles.Image} source={require("../assets/favicon.png")} />
              <Avatar source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }} />
              <Text style={styles.title}>@{item.username}</Text>
              <Text style={styles.bio}>{item.bio}</Text>
              {/* <TouchableOpacity onPress={() => handleDeleteUser(item.id)}>
                <Text style={styles.button}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('UpdateUser', { user: item })}>
                <Text style={styles.button}>Update</Text>
              </TouchableOpacity> */}
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
  Image: {
    width: 90,
    height: 90,
    opacity: 1
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 18,
  },
  bio: {
    fontSize: 14,
    color: '#555',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default UserList;
