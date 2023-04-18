import styled from 'styled-components';

export const CardSavedContainer = styled.div`
    width: 300px;
    height: auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
`
export const TopSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin: 16px;
`
export const First = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background-color: #a81d35;
    border-radius: 100%;
    cursor: pointer;
`
export const Second = styled.div`
    width: 170px;
    cursor: pointer;
`
export const NameCard = styled.div`
    color: black;
    font-size: 20px;
`
export const PriceCard = styled.div`
    color: gray;
`
export const ThirdDiv = styled.div`
    position: relative;
    top: 9px;
    left: 9px;
    cursor: pointer;
`
export const CenterSection = styled.div`
    img {
        width: 300px;
        height: 350px;
    }    
`
export const DownSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 23px;
`
export const FirstDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
export const Cart = styled.div`
    cursor: pointer;
    &:hover {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #a81d35;
    }
`
export const Info = styled.div`
    cursor: pointer;
    &:hover {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #a81d35;
    }
`
export const Discount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 25px;
    border-radius: 20px;
    color: white;
    background-color: #a81d35;
`
export const SecondDiv = styled.div`
    cursor: pointer;
`