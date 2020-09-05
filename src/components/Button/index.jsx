import styled from 'styled-components';

const Button = styled.button`
  width: 35%;
  margin: 10rem 0;
  padding: 30rem 10rem;
  text-align: center;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12rem;
  border-radius: 0 8rem 0 8rem;
  background-color: var(--secondary-color);
  color: var(--white-color);
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:first-child{
    background-color: var(--blue-primary-color);
  }

  &:first-child:hover{
    background-color: var(--blue-secondary-color);
  }
  
  &:hover {
    background-color: var(--primary-color);
    animation: quake 0.8s ease;
  }

  @media(min-width: 320px){
    font-size: 17rem;
  }

  @media(min-width: 650px){
    width: 100%;
  }
`;

export default Button;