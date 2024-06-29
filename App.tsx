import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

function TabBarLabel(props: { focused: boolean, color: string, labelText: string }): React.ReactNode {
  return (
    <Text style={{ color: props.focused ? "green" : "red" }}>
      {props.labelText}
    </Text>
  )
}

function HomeScreen(): React.ReactNode {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen(): React.ReactNode {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator style={{ paddingTop: 50 }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // The custom tab bar label is ignored and the navigation name "Home" is used nevertheless
          tabBarLabelText: "Custom Home",
          // The custom tab bar label style is ignored and the default style is used nevertheless
          tabBarLabelStyle: { fontSize: 20 }
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          // The custom component is ignored and the default <Text> component is used nevertheless
          tabBarLabel: TabBarLabel
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
