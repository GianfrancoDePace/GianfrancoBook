import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../Queries/GetData';

const PostsList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      {data.posts.map((post) => (
        <View key={post.id}>
          <Text>{post.content}</Text>
          <Text>Author: {post.author.username}</Text>
        </View>
      ))}
    </View>
  );
};

export default PostsList;
