import React from 'react';
import styled from 'styled-components';

import Title from '../Title';
import Text from '../Text';

const ItemContainerStyle = styled.div`
  margin: 40rem 10rem;
  padding: 10rem;
  background-color: var(--white-color);
  border-radius: 8rem;
  border: 1rem solid ${({ blue }) => (blue ? 'var(--blue-secondary-color)' : 'var(--secondary-color)')};
  box-shadow: 1rem 1rem 3rem ${({ blue }) => (blue ? 'var(--blue-secondary-color)' : 'var(--secondary-color)')};

  animation: leftForRight 1s ease;

  & > ${Title}{
    font-size: 14rem;
  }

  & > header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -38rem;
  }

  & > header img{
    border-radius: 8rem;
    border: 2rem solid ${({ blue }) => (blue ? 'var(--blue-secondary-color)' : 'var(--secondary-color)')};
    width: 50px;
    height: 50px
  }

  @media(min-width: 456px){
    margin: 60rem 10rem;

    & > header{
      margin-top: -52rem;
    }
    & > header img{
      width: 75px;
      height: 75px
    }
  }

  @media(min-width: 656px){
    margin: 70rem 10rem;

    & > header{
      margin-top: -65rem;
    }

    & > header img{
      width: 100px;
      height: 100px
    }
  }
`;


const ItemContainer = props => {
  return (
    <ItemContainerStyle blue={props.blue}>
      <header>
        <Title>
          {props.title}
        </Title>
        <img src={props.image} alt='imagem relacionada ao titulo'/>
      </header>
      <Text>
        {props.children}
      </Text>
    </ItemContainerStyle>
  );
};

export default ItemContainer;