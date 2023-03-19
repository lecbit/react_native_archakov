import styled from 'styled-components/native';

const PostView = styled.View`
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

export const Post = ({title, imageUrl, createdAt}) => {
    return <PostView>
        <PostImage source={{ uri: imageUrl }} />
        <PostDetails>
            <PostTitle>{title}</PostTitle>
            <PostDate>{createdAt}</PostDate>
        </PostDetails>
    </PostView>
}