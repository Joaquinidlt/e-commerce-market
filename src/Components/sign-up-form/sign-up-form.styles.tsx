import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  h2 {
    margin: 10px 0;
  }
  @media (min-width:1025px) { 
    width: 380px;
    margin-top: 0;
  }
`;