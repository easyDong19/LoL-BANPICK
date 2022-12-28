import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BanpickContainer from './components/BanpickContainer';
import BanpickContent from './components/BanpickContent';
import BanpickHeader from './components/BanpickHeader';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    background: #fefe;
  }
  *{
    box-sizing: border-box;
  }
`;

function App() {
  const visible = true;
  return (
    <>
      <GlobalStyle />
      {visible && (
        <BanpickContainer>
          <BanpickHeader></BanpickHeader>
          <BanpickContent></BanpickContent>
        </BanpickContainer>
      )}
    </>
  );
}
export default App;
