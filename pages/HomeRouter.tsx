import * as React from 'react';
import HomePage from "./HomePage";
import MessagePage from "./MessagePage";
import SettingPage from "./SettingPage";
import SearchingPage from './SearchingPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="主页" component={HomePage} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
}

function MessageStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="消息" component={MessagePage} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
}

function SearchingStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="搜索" component={SearchingPage} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="设置" component={SettingPage} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
}
export default function Router(props:any) {
  const MyTheme = {
        ...DefaultTheme,
        dark: true,
        colors: {
            primary: "rgb(255, 45, 85)",
            background: "#F7F8F6",
            card: "rgb(255, 255, 255)",
            text: "#222222",
            border: "rgb(199, 199, 204)",
        },
    };
   return (
     <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
      >
      
      <Tab.Screen
        name="主页" component={HomeStackScreen}
        options={{
          tabBarLabel: '主页',
          headerTransparent: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home"/>
          ),
        }}
      />
      <Tab.Screen name="消息" component={MessageStackScreen} />
      <Tab.Screen name="搜索" component={SearchingStackScreen} />
      <Tab.Screen name="设置" component={SettingsStackScreen} /> 
     </Tab.Navigator> 
     </NavigationContainer>
    
  );
}
