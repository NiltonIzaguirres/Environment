import React from 'react';
import { Link } from 'react-router-dom';

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
          <Button as={Link} to='/water'>
            Água
          </Button>
          <Button as={Link} to='/air' >
            Ar
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
