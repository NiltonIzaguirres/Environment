import React from 'react';
import styled from 'styled-components';

const FontsComponentsStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 40rem 10rem;
  padding: 10rem;
  background-color: var(--white-color);
  border-radius: 8rem;
  border: 1rem solid ${({ blue }) => (blue ? 'var(--blue-secondary-color)' : 'var(--secondary-color)')};
  box-shadow: 1rem 1rem 3rem ${({ blue }) => (blue ? 'var(--blue-secondary-color)' : 'var(--secondary-color)')};

  animation: leftForRight 1s ease;
  
  & > iframe {
    border-radius: 8rem;
    border: 3rem solid ${({ blue }) => (blue ? 'var(--blue-secondary-color)' : 'var(--secondary-color)')};
    width: 60%;
    height: 100px;
    transition: border 0.3s;
  }

  & > iframe:hover {
    border: 3rem solid ${({ blue }) => (blue ? 'var(--secondary-color)' : 'var(--blue-secondary-color)')};
  }

  & > a {
    padding: 30rem 10rem;
    text-align: center;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12rem;
    border-radius: 0 8rem 0 8rem;
    background-color: ${({ blue }) => (blue ? 'var(--blue-secondary-color)' : 'var(--secondary-color)')};
    color: var(--white-color);
    transition: border 0.3s;
    cursor: pointer;
  }

  & > a:hover {
    background-color: ${({ blue }) => (blue ? 'var(--blue-primary-color)' : 'var(--primary-color)')};
    animation: quake 0.8s ease;
  }

  @media(min-width: 456px){
    & > iframe {
      height: 200px;
    }
  }
  
  @media(min-width: 656px){
    & > iframe {
      height: 300px;
    }
  }
`;

const FontsComponents = (props) => {
  return (
    <FontsComponentsStyled
      blue={props.blue}
    >
      <iframe title='Font YouTube' src="https://www.youtube.com/embed/q8stWOJY1I0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <a href='https://pixabay.com/'>
        Imagens Usadas
      </a>
    </FontsComponentsStyled>
  );
}

export default FontsComponents;