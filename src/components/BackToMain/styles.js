import styled from 'styled-components';

const BackToMainStyled = styled.a`
  margin-left: 15rem;

  & > img:hover {
    border-radius: 50%;
    border: 2rem solid ${({ blue }) => (blue ? 'var(--blue-secondary-color)' : 'var(--secondary-color)')};
  }
`;

export default BackToMainStyled;