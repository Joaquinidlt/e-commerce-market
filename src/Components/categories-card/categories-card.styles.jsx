import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoriesCardContainer = styled(Link)`
    display: flex;
    width: 250px;
    height: 450px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;
export const ImgName = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    ::before{
        transition: all .3s ease-in;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        cursor: pointer;
    }
    :hover::before{
        opacity: .6 ;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }
`;
export const LilOverlad = styled(ImgName)`
    $:hover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease-in;
        z-index: 2;
    }
`;
export const NameCard = styled(ImgName)`
    display: flex;
    position: absolute;
    bottom: 2rem;
    color: #fff;
    font-size: 3rem;
    font-weight: 600;
    left: 1rem;
`;