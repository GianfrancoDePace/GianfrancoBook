import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { Avatar } from '@rneui/base';
import { GET_POSTS } from '../Queries/GetData';

const PostsList = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {data.posts
        .filter(post => post.author.id === userId)
        .map((post) => (
          <View key={post.id} style={styles.postContainer}>
          <Avatar size={30} rounded source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }} />
            <Text style={styles.postContent}>{post.content}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postContent: {
    fontSize: 16,
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: '#555',
  },
});

export default PostsList;
