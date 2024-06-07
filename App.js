import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import AddUserForm from "./pages/AddUser";
import UserList from "./pages/UserList";
import UpdateUser from "./pages/UpdateUser";
import HomeScreen from "./pages/Home";
import UserProfile from "./pages/userProfile";

const client = new ApolloClient({
  uri: "http://192.168.1.30:4000", // URL of your Apollo Server
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={HomeScreen} />
        <Stack.Screen name="Profilo Utente" component={UserProfile} />
          <Stack.Screen name="Registrazione" component={AddUserForm} />
          <Stack.Screen name="Lista Utenti" component={UserList} />
          <Stack.Screen name="Aggiorna Utente" component={UpdateUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
