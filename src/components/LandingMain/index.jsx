import styled from 'styled-components';

const LandingMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 20rem;
  flex-direction: column;

  @media(min-width: 650px){
    flex-direction: row;
    justify-content: space-evenly;
  }
`;


export default LandingMain;