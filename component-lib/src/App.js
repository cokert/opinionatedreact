import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/header';
import Button from './components/button';
import styled from 'styled-components';

const Main = styled.main`
  width:1200px;
  max-width: 80%;
  margin: 50px auto;
`;

function App() {
  return (
    <Main>
      <Heading as="h2">Storybook</Heading>
      <Button>A Button?</Button>
    </Main>
  );
}

export default App;
