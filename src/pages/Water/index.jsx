import React from 'react';

import Header from '../../components/Header';
import BackToMain from '../../components/BackToMain';
import Title from '../../components/Title';
import ItemContainer from '../../components/ItemContainer';
import FontsComponents from '../../components/FontsComponents';

function Water() {
  return (
    <>
      <Header secondary={true} blue={true} >
        <BackToMain />
        <Title>
          Poluição nas águas
        </Title>
      </Header>
      
      <ItemContainer
        blue={true}
        title='Importância'
        image='https://cdn.pixabay.com/photo/2016/05/07/16/52/sea-1377712_960_720.jpg'
      >
        Os rios são muito importantes, pois geram água útil ao nosso consumo: para beber, preparar alimentos, cuidar da higiene pessoal, etc...
      </ItemContainer>
      <ItemContainer
        blue={true}
        title='Causas'
        image='https://cdn.pixabay.com/photo/2016/08/18/19/02/pollution-1603644_960_720.jpg'
      >
        Os fertilizantes agrícolas utilizados por agricultores nas plantações são arrastados pelas águas das chuvas para dentro dos rios, o que ocasiona a poluição por agrotóxicos.<br/><br/>
        O lançamento de compostos inorgânicos, como os metais pesados, em rios é um problema sério, como exemplo temos a poluição por mercúrio, provocada por garimpeiros que buscam ouro.<br/><br/>
        Os esgotos domésticos e industriais chegam aos rios sem tratamento algum.
      </ItemContainer>
      <ItemContainer
        blue={true}
        title='Consequências'
        image='https://cdn.pixabay.com/photo/2017/10/30/21/20/contaminated-2903550_960_720.jpg'
      >
        <strong>Extinção de espécies</strong><br/><br/>
        A poluição torna muito difícil a reprodução de espécies e a sua sobrevivência, assim tornando possível a extinção da mesma.<br/><br/><br/>
        <strong>Cadeia Alimentar</strong><br/><br/>
        Quando poluição afeta uma determinada espécie causando sua extinção, poderá ocasionar uma cadeia alimentar quando o predador daquela espécie não achar mais alimento.
      </ItemContainer>
      <ItemContainer
        blue={true}
        title='Fator agravante'
        image='https://cdn.pixabay.com/photo/2017/02/22/15/57/toxic-waste-2089779_960_720.jpg'
      >
        Má compreensão por parte do ser humano com a natureza.
      </ItemContainer>
      <ItemContainer
        blue={true}
        title='localização'
        image='https://cdn.pixabay.com/photo/2018/11/25/02/57/city-3836765_960_720.jpg'
      >
        Não a um lugar específico, pórem podemos usar como exemplo o Rio Tietê (O mais poluido do brasil segundo o <a href='https://www.ibge.gov.br/pt/inicio.html'>IBGE (2013)</a>). 
      </ItemContainer>
      <ItemContainer
        blue={true}
        title='Capitalismo'
        image='https://cdn.pixabay.com/photo/2017/02/23/10/23/dollar-2091737_960_720.jpg'
      >
        O capitalismo providência um sálario de remuneração após um período de tarefas exercidas, assim muitos desinteresados com meio-ambiente buscam apenas o lucro, assim causando várias poluições apenas para obter um lucro maior.
      </ItemContainer>
      <ItemContainer
        blue={true}
        title='Previsões'
        image='https://cdn.pixabay.com/photo/2019/03/14/16/33/weather-4055272_960_720.jpg'
      >
         Caso continuem provavelmente iremos chegar um dia onde não termos mais água potável para consumo básico do Ser humano. ex: água para higiene , preparar alimentos, para beber, etc...
      </ItemContainer>

      <FontsComponents
        blue={true}
      />
    </>
  );
};

export default Water;