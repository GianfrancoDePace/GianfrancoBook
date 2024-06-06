import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../Queries/GetData';

const AddPostForm = ({ userId }) => {
  const [content, setContent] = useState('');
  const [addPost, { loading, error }] = useMutation(ADD_POST);

  const handleAddPost = () => {
    addPost({ variables: { content, authorId: userId } })
      .then(() => {
        Alert.alert('Post created successfully');
        setContent('');
      })
      .catch((err) => {
        Alert.alert('Error creating post', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Sentiti libero, scrivi quel che ti senti"
        value={content}
        onChangeText={setContent}
      />
      <Button title="Add Post" onPress={handleAddPost} disabled={loading} />
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
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default AddPostForm;