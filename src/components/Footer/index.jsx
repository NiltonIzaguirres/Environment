import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  border-bottom: 2px solid var(--secondary-color);
  border-top: 2px solid var(--secondary-color);
  background-color: var(--background-green-color);
  width: 100%;
  font-size: 15rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  padding: 5rem 0;

  animation: bottomForTop 0.6s ease-in;
`;

export default Footer;