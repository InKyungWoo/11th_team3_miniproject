import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';

import Home from 'src/components/Home/Home.jsx';
import Login from './components/Login/Login';
import GuestHome from './components/GuestHome/GuestHome';
import AftLogin from './components/AftLogin/AftLogin';
import Partyroom from './components/Partyroom/Partyroom';
import GuestPartyroom from './components/GuestPartyroom/GuestPartyroom';

function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Routes>
              <Route path="/" element={<Home />} /> 
              {/* 일단 이런식으로 화면 확인 가능한데 수정 필요한 페이지입니다!*/}
              {/* <Route path="/" element={<Login />} /> */}
              {/* <Route path="/" element={<GuestHome />} />  */}
              {/* <Route path="/" element={<AftLogin />} /> */}
              {/* <Route path="/" element={<GuestHome />} /> */}
            </Routes>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
