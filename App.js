import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testText}>Open up App.js to start working on your app!</Text>
      <Text style={{
        fontSize: 16,
        color: 'green',
      }}>123123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testText: {
    color: 'red',
    fontSize: 24,
  }
});
