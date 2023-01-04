import React, { useEffect, useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import BanpickContainer from './components/BanpickContainer';
import BanpickContent from './components/BanpickContent';
import BanpickHeader from './components/BanpickHeader';
import championInfo from './Champions.json';
import { BanpickProvider, useModeState } from './banpickContext';

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
  return (
    <>
      <GlobalStyle />
      <BanpickProvider>
        <BanpickContainer>
          <BanpickHeader></BanpickHeader>
          <BanpickContent></BanpickContent>
        </BanpickContainer>
      </BanpickProvider>
    </>
  );
}
export default App;
