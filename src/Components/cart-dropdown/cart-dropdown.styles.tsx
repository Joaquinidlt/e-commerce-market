import styled from 'styled-components';

export const CartListBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: 60px;
    right: 40px;
    width: 330px;
    height: 400px;
    border-radius: 4px;
    gap: 5px;
    z-index: 5;
    background-color:#a01c32;

    button {
        margin-top: 10px;
    }
`;
export const CartList = styled.div`
    display: flex;
    width: 90%;
    height: 285px;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
    gap: 10px;
    overflow-y: scroll;
    background-color: #a01c32;
    color: white;

    &::-webkit-scrollbar {
        width: 8px;
        background: #a01c32;
    }
    &::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 20px;
    }
`;
export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;