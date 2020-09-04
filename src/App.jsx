import React from 'react';

import LandingImage from './components/LandingImage';
import Title from './components/Title';
import ButtonsContainer from './components/ButtonsContainer';
import Button from './components/Button';
import Header from './components/Header';
import LandingMain from './components/LandingMain';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header>
        <Title>
          Problemas ambientais<br/>
          e o<br/>
          Capitalismo
        </Title>
      </Header>

      <LandingMain>
        <LandingImage />
        <ButtonsContainer>
          <Button href='/comparative'>
            Comparativo
          </Button>
          <Button href='/problems' >
            Problemas
          </Button>
        </ButtonsContainer>
      </LandingMain>

      <Footer>
        &copy;Nilton Izaguirres
      </Footer>
    </>
  );
}

export default App;
