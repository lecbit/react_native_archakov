import axios from 'axios';
import React from 'react';
import { Alert, StatusBar, Text, FlatList, View } from 'react-native';
import { Post } from './components/Post';


export default function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://64170d637107365a7ca34a8b.mockapi.io/Articles")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи')
      });
  }, []);
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} />}
      />
      {/* {[...items, ...items].map((obj) => (
        <Post
          title={obj.title}
          createdAt={obj.createdAt}
          imageUrl={obj.imageUrl}
        />
      ))} */}
      <StatusBar theme="auto" />
    </View>
  );
}