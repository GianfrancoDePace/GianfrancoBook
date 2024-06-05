import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import AddUserForm from "./pages/AddUser";
import UserList from "./pages/UserList";
import UpdateUser from "./pages/UpdateUser";

const client = new ApolloClient({
  uri: "http://192.168.1.30:4000", // URL of your Apollo Server
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddUser">
          <Stack.Screen name="AddUser" component={AddUserForm} />
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="UpdateUser" component={UpdateUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;