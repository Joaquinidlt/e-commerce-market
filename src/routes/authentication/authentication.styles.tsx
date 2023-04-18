import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 30px auto;
    margin-top: 100px;

    @media (min-width:1025px) { 
        flex-direction: row;
        align-items: flex-start;
        width: 900px;
        margin-top: 100px;
      }
`;