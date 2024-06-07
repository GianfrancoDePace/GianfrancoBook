import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from '@rneui/base';
import { Badge } from '@rneui/themed';
import CreatePost from '../components/posts';
import PostsList from './PostsList';

const UserProfile = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Avatar size={100} rounded source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }} />
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', bottom: 5, right: 15 }}
          />
        </View>
        <Text style={styles.username}>{user.username}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>150</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>3K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>500</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{user.bio}</Text>
      </View>
      <TouchableOpacity
        style={styles.editProfileButton}
        onPress={() => navigation.navigate('Aggiorna Utente', { user })}
      >
        <Text style={styles.editProfileButtonText}>Edita Profilo</Text>
      </TouchableOpacity>
      <View style={styles.postContainer}>
        <CreatePost userId={user.id} />
      </View>
      <View style={styles.posts}>
        <PostsList userId={user.id} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatarContainer: {
    borderColor: "black",
    borderRadius: 50,
    position: 'relative',
    padding: null,
  },
  stat: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  bioContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bioText: {
    fontSize: 16,
    textAlign: 'center',
  },
  editProfileButton: {
    margin: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  postContainer: {
    padding: 20,
  },
  posts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  postImage: {
    width: '30%',
    height: 100,
    marginBottom: 10,
  },
});

export default UserProfile;
