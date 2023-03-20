import React from 'react';
import { StatusBar, View } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { FullPostScreen } from './screens/FullPost';



export default function App() {
  return (
    <View>
      <FullPostScreen />
      <StatusBar theme="auto" />
    </View>
  );
}