import axios from 'axios';
import React from 'react';
import { Alert, StatusBar, Text, FlatList, View, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from './components/Post';


export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const fetchPosts = () => {
    setLoading(true);
    axios
      .get("https://64170d637107365a7ca34a8b.mockapi.io/Articles")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи')
      }).finally(() => {
        setLoading(false);
      });
  }

  React.useEffect(fetchPosts, []);
  if (isLoading) {
    return <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ActivityIndicator size="large" />
      <Text style={{
        marginTop: 15
      }}>Загрузка...</Text>
    </View>
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} />
          </TouchableOpacity>
        )}
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