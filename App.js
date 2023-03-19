import { StatusBar, Text, View } from 'react-native';
import { Post } from './components/Post';


export default function App() {
  return (
    <View>
      <Post title="Тестовая статья" createdAt="02/02/2022" imageUrl="https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png" />
      <StatusBar theme="auto" />
    </View>
  );
}