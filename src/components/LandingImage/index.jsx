import styled from 'styled-components';
import image from '../../assets/images/mainImage.svg';

const LandingImage = styled.image`
  background-image: url(${image});
  background-repeat: no-repeat;
  width: 300rem;
  height: 300rem;

  animation: leftForRight 0.8s ease;

  @media(min-width: 500px){
    width: 500rem;
    height: 500rem;
  }

  @media(min-width: 650px){
    width: 300rem;
    height: 300rem;
  }
`;


export default LandingImage;