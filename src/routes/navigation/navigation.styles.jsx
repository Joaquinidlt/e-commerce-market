import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 0;
    width: 100%;
    height: 55px;
    background-color: #a01c32;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
    color: white;
`;
export const LogoContainer = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-left: 16px;

    font-family: 'Kalam';
    font-size: 30px;
    color: white;
`;
export const RightSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    margin-right: 16px;
    position: relative;
`;
export const CartIcon = styled(Link)`
    color: white;
    cursor: pointer;
`;
export const CartCountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border: 2px solid white;
    background-color: #a01c32;
    border-radius: 100%;
    font-size: 10px;
    position: absolute;
    top: 10px;
    left: 15px;
`;
export const ProfileIconContainer = styled.div`
    cursor: pointer;
`;
export const ProfileBoxOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    top: 60px;
    right: 0px;
    width: 250px;
    height: 250px;
    border-radius: 4px;
    gap: 5px;
    z-index: 5;
    background-color:#a01c32;
`;
export const Links = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
    width: 100%;   
    font-size: 18px;
    gap: 9px;
    padding-top: 16px;
    padding-left: 16px;

    &:hover {
        font-size: 20px;
    }
`;