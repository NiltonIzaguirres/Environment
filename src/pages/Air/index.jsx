import React from 'react';

import Header from '../../components/Header';
import BackToMain from '../../components/BackToMain';
import Title from '../../components/Title';
import FontsComponents from '../../components/FontsComponents';

function Air() {
  return (
    <>
      <Header secondary={true} >
        <BackToMain />
        <Title>
          Poluição no Ar
        </Title>
      </Header>

      <FontsComponents/>
    </>
  );
};

export default Air;