import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 120px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 12px 0 12px;
  font-size: 15px;
  background-color: #a01c32;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: white;
    color: #a01c32;
    border: 1px solid #a01c32;
  }
  @media (min-width:1025px) { 
    min-width: 135px;
    padding: 0 35px 0 35px;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  gap: 5px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  color: rgb(0, 0, 0);
  border: 1px solid #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #a01c32;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #a01c32;
  border: 1px solid #a01c32;

  &:hover {
    background-color: #a01c32;
    color: white;
    border: none;
  }
`;

/* @media (min-width:320px)  {  }
@media (min-width:480px)  {  }
@media (min-width:600px)  {  }
@media (min-width:801px)  {  }
@media (min-width:1025px) {  }
@media (min-width:1281px) {  } */