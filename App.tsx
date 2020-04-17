import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: palevioletred;
`;

export default function App() {
  return (
    <Container>
      <Title>React Native with 💅 Styled Components</Title>
    </Container>
  );
}

// <View>
// <Text>
// <Image>
// <ScrollView>
// <TextInput>

// async function getMoviesFromApiAsync() {
//   try {
//     let response = await fetch('https://reactnative.dev/movies.json');
//     let json = await response.json();
//     return json.movies;
//   } catch (error) {
//     console.error(error);
//   }
// }

// function getMoviesFromApi() {
//   return fetch('https://reactnative.dev/movies.json')
//     .then((response) => response.json())
//     .then((json) => {
//       return json.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

