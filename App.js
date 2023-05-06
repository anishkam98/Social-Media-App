import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './screens/Login';
import Feed from './screens/Feed';
import Inbox from './screens/Inbox';
import MyProfile from './screens/MyProfile';
import Constants from 'expo-constants';


const Stack = createNativeStackNavigator();
const Title = "Social Media";
const Tab = createBottomTabNavigator();

function App() {


  const navigateBackOptions = (title) => ({
    title: title,
    headerStyle: {
      backgroundColor: "#00669C",
    },
    headerTintColor: "white",
    headerTitleStyle: { fontSize: 25, fontWeight: "500", color: "white" },
    headerTitleAlign: "center",
  });




  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          {/* User Authentication */}
          <Stack.Screen name="Login" options={{ headerShown: false }}>{props => <Login {...props} Name={Title} />}</Stack.Screen>

          <Stack.Screen name="HomeTabs" options={{ headerShown: false }}>{props => <HomeTabs {...props} Name={Title} />}</Stack.Screen>
        </Stack.Navigator>

        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}


function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = 'rss-feed';
          } else if (route.name === 'Me') {
            iconName = 'person';
          }
          else if (route.name === 'DMs') {
            iconName = 'email';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Feed" options={{ headerShown: false }}>{props => <Feed {...props} Name={Title} />}</Tab.Screen>
      <Tab.Screen name="Me" options={{ headerShown: false }}>{props => <MyProfile {...props} Name={Title} />}</Tab.Screen>
      <Tab.Screen name="DMs" options={{ headerShown: false }}>{props => <Inbox {...props} Name={Title} />}</Tab.Screen>
    </Tab.Navigator>
  )
}

export default () => {
  return (
    <App>

    </App>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    marginTop: Constants.statusBarHeight,
  },
  title: {
    fontSize: 30,
  },
});
