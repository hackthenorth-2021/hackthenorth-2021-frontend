// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './pages/HomeScreen';
import { DetailsScreen } from './pages/DetailsScreen';
import { TitleScreen } from './pages/TitleScreen';
import { LoginScreen } from './pages/LoginScreen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { MainScreen } from './pages/MainScreen';
import CameraScreen from './pages/CameraScreen';
import { ClothingScreen } from './pages/ClothingScreen';
import { AddedToClosetScreen } from './pages/AddedToClosetScreen';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    (async () => await Font.loadAsync({
      Roboto: require('./native-base/Fonts/Roboto/Roboto-Regular.ttf'),
      "Roboto-Medium": require('./native-base/Fonts/Roboto/Roboto-Medium.ttf'),
      ...Ionicons.font,
    }))();
     }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Getting Started"
        screenOptions={{
            headerStyle: { elevation: 0 },
            cardStyle: { backgroundColor: '#fff'},
            headerShown: false
        }}
      >
        <Stack.Screen name="Getting Started" component={TitleScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Seamless" component={MainScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Clothing Analysis" component={ClothingScreen} />
        <Stack.Screen name="Closet" component={AddedToClosetScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;