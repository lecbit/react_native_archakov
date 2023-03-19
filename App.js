import { StatusBar, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Post = styled.View`
flex-direction: row;
padding: 15px;
border-bottom-width: 1px;
border-bottom-color: black;
border-bottom-style: solid;
`;

const PostImage = styled.Image`
width: 60px;
height: 60px;
border-radius: 12px;
margin-right: 12px;
`;

const PostDetails = styled.View`
justify-content: center;
`;

const PostTitle = styled.Text`
font-size: 17px;
font-weight: 700;
`;

const PostDate = styled.Text`
font-size: 12px;
color: red;
margin-top: 2px;
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage source={{ uri: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png' }} />
        <PostDetails>
          <PostTitle>Тестовая статья</PostTitle>
          <PostDate>02/02/2022</PostDate>
        </PostDetails>
      </Post>
      <StatusBar theme="auto" />
    </View>
  );
}