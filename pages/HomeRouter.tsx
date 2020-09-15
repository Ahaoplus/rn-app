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
import { Icon } from "@ant-design/react-native";
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
            primary: "rgb(0, 255, 0)",
            background: "#EFEFEF",
            card: "#1FA4FF",
            text: "#222222",
            border: "rgb(199, 199, 204)",
        },
    };
   return (
     <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="News"
        tabBarOptions={{
          activeTintColor: 'black',
        }}
      >
      
      <Tab.Screen
        name="News" 
        component={HomeStackScreen}
        options={{
          tabBarLabel: '资讯',
          headerTransparent: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen 
        name="消息" 
        component={MessageStackScreen} 
        options={{
            tabBarLabel: '资讯',
            headerTransparent: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons size={24} name="message"/>
            ),
          }}
      />
      <Tab.Screen 
        name="搜索" 
        component={SearchingStackScreen} 
        options={{
          tabBarLabel: '资讯',
          headerTransparent: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons size={24} name="home"/>
          ),
        }}
      />
      <Tab.Screen 
        name="设置" 
        component={SettingsStackScreen} 
        options={{
          tabBarLabel: '资讯',
          headerTransparent: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons size={24} name="home"/>
          ),
        }}
      /> 
     </Tab.Navigator> 
     </NavigationContainer>
    
  );
}
