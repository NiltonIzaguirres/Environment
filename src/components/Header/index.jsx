import styled from 'styled-components';

const Header = styled.header`
  padding: 15rem 0;
  border-bottom: 2px solid var(--secondary-color);
  border-top: 2px solid var(--secondary-color);
  background-color: var(--background-green-color);
  width: 100%;

  animation: topForBottom 0.6s ease-in;
`;

export default Header;