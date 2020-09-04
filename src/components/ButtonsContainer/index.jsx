import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  
  animation: rightForLeft 0.8s ease;

  @media(min-width: 650px){
    flex-direction: column;
    width: 30%;
  }
`;

export default ButtonsContainer;