import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    margin: 0px 15px;

    @media(max-width: 870px){
        margin: 0px 0px;
    }
`;

const Main = styled.main`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    margin: 0 auto;
    padding-top: 100px;
    z-index: 1;


    @media(max-width: 870px){
        display:flex;
        flex-direction: column;
    }
`;

const Figure = styled(Link)`
    z-index: 1;
    grid-row: ${({value}) => value};
    position: relative;
    display: grid;
    margin-bottom: 50px;
    figcaption {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 700;
        font-size: 34px;
        color: black;
        position: absolute;
        bottom: calc(100%);
        z-index: 3;
        span{
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 700;
            font-size: 18px;
            color: blue;
        }
        @media(max-width: 870px){
            left: 1%;
        }
    }
`;

const ImageCategorie = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8);
`;

const Footer = styled.div`
    height: 50px;
    text-align: center;
`;

export {
    Container,
    Main,
    Figure,
    ImageCategorie,
    Footer,
}