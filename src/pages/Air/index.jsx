import React from 'react';

import Header from '../../components/Header';
import BackToMain from '../../components/BackToMain';
import Title from '../../components/Title';
import FontsComponents from '../../components/FontsComponents';
import ItemContainer from '../../components/ItemContainer';

function Air() {
  return (
    <>
      <Header secondary={true} >
        <BackToMain />
        <Title>
          Poluição no Ar
        </Title>
      </Header>

      <ItemContainer
        title='Importância'
        image='https://cdn.pixabay.com/photo/2020/08/11/21/39/clouds-5481190_960_720.jpg'
      >
        Quando respiramos, o ar da atmosfera entra no nosso corpo sendo filtrado pelas narinas até chegar aos pulmões, o qual será utilizado na produção de energia, resumidamente é o que mantém os seres humanos vivos.
      </ItemContainer>
      <ItemContainer
        title='Causas'
        image='https://cdn.pixabay.com/photo/2016/05/23/21/33/car-1411313_960_720.jpg'
      >
        A poluição do ar possui origens em fontes diferentes. Desde causas naturais, como por exemplo o metano, que é produzido na digestão de animais até mesmo a queima de combustíveis fósseis como o carvão e os derivados do petróleo.  
      </ItemContainer>
      <ItemContainer
        title='Consequências'
        image='https://cdn.pixabay.com/photo/2019/02/24/09/13/air-pollution-4017183_960_720.jpg'
      >
        A poluição do ar pode provocar irritação na garganta, no nariz e nos olhos, além de dificuldade para respirar. 
      </ItemContainer>
      <ItemContainer
        title='Fator agravante'
        image='https://cdn.pixabay.com/photo/2018/04/29/13/55/global-warming-3360030_960_720.png'
      >
        O ser humano em relação ao consumo excessivo veículos, retirada de petróleo, entre outros...
      </ItemContainer>
      <ItemContainer
        title='Capitalismo'
        image='https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_960_720.jpg'
      >
        Muitos de nós esperamos ser remunerados para adquirir veículos, outra parte busca o petróleo para lucrar com a venda de combustível, óleos lubrificantes, entre outros... 
      </ItemContainer>
      <ItemContainer
        title='Previsões'
        image='https://cdn.pixabay.com/photo/2020/03/18/15/11/air-pollution-4944396_960_720.jpg'
      >
        Se continuar desse jeito cada vez mais o ar ficará mais pesado para respirar e assim podemos sofrer muitos problemas se respirarmos o ar poluído.    
      </ItemContainer>

      <FontsComponents/>
    </>
  );
};

export default Air;