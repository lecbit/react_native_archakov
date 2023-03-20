import axios from 'axios';
import React from 'react';
import { Alert, View } from 'react-native';
import styled from 'styled-components/native';
import { Loading } from '../components/Loading';

const PostImage = styled.Image`
border-radius: 10px;
width: 100%;
height: 250px;
margin-bottom: 20px;
`;

const PostText = styled.Text`
font-size: 18px;
font-height: 24px;
`;

export const FullPostScreen = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://64170d637107365a7ca34a8b.mockapi.io/Articles/1")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи')
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data.imageUrl }}></PostImage>
      <PostText>
        {data.text}
      </PostText>
    </View>
  )
}