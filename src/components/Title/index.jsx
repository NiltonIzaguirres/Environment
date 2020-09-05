import styled from 'styled-components';

const Title = styled.h1`
  font-size: 15rem;
  padding: 0 12rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: var(--white-color);
  text-align: center;
  text-shadow: 1rem 1rem 3rem black;

  @media(min-width: 456px){
    font-size: 19rem;
  }

  @media(min-width: 656px){
    font-size: 22rem;
  }
`;

export default Title;