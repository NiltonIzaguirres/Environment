import React from 'react';
import { Link } from 'react-router-dom';

import BackToMainStyled from './styles';
import BackImage from '../../assets/images/back.svg';

const BackToMain = (props) => {
  return (
    <BackToMainStyled blue={props.blue} as={Link} to='/' >
      <img src={BackImage} alt='Voltar' width='30px' height='30px'/>
    </BackToMainStyled>
  );
};

export default BackToMain;