import styled from 'styled-components';

const Header = styled.header`
  ${({ secondary }) => (
    secondary ? `
      display: flex;
      justify-content: space-between;
      align-items: center;
    ` : null 
  )}
  padding: 15rem 0;
  border-bottom: 2px solid ${({ blue }) => (blue ? 'var(--blue-secondary-color)' : 'var(--secondary-color)')};
  border-top: 2px solid ${({ blue }) => (blue ? 'var(--blue-secondary-color)' : 'var(--secondary-color)')};
  background-color: ${({ blue }) => ( blue ? 'var(--blue-primary-color)' : 'var(--background-green-color)')};
  width: 100%; 

  animation: topForBottom 0.6s ease-in;
`;

export default Header;