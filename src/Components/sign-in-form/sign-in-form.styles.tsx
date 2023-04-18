import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  h2 {
    margin: 10px 0;
  }
  @media (min-width:1025px) { 
    width: 380px;
  }

`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 325px;

  @media (min-width:1025px) { 
    width: 395px;
  }
`;