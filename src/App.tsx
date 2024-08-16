import React from 'react';
import './App.css';
import tw from 'twin.macro';
import { HomePage } from './app/containers/HomePage';
import styled from 'styled-components';

const AppContainer = styled.div`
  ${
    tw`
      flex
      flex-col
      w-full
      h-full
    `
  }
`;

function App() {
  return <AppContainer>
    <HomePage/>
  </AppContainer>
}

export default App;
