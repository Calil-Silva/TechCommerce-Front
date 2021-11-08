import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home () {

    return (
        <Container>
        <Main>
            {/* <Figure value="1/1" >
                <figcaption>Watch </figcaption>
                <ImageCategorie src="https://s1.1zoom.me/big0/648/Apple_Clock_Watch_Apple_502952.jpg" /></Figure>
            <Figure value="1/2">
                <figcaption>AirPods</figcaption>
                <ImageCategorie src="https://s2.glbimg.com/5KBEl01R5_6occgjE0vTUTTwyRU=/0x0:1306x1306/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/K/k/qVcT6nTRKDuibbd5wsng/apple-airpods-3rd-gen-hero-10182021.jpg"/>
            </Figure>
            <Figure value="2/2">
                <figcaption>MacBook</figcaption>
                <ImageCategorie src="https://www.apple.com/v/mac/home/bj/images/meta/mac__bfa414svyuc2_og.png?202111031714" />
            </Figure>
            <Figure value="2/2">
                <figcaption>Ipad</figcaption>
                <ImageCategorie src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202009_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1599672435000" />
            </Figure>
            <Figure value="3/3">
                <figcaption>Iphone</figcaption>
                <ImageCategorie src="https://i.zst.com.br/thumbs/12/38/36/1268435165.jpg" />
            </Figure>
            <Figure value="3/3">
                <figcaption>Acessórios</figcaption>
                <ImageCategorie src="https://photos5.appleinsider.com/archive/appleaccessories.jpg" />
            </Figure> */}
        </Main>
        <Footer>Copyright © 2021 Apple Inc. All rights reserved.</Footer>
        </Container>
    )
}
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
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    margin: 0 auto;
    padding-top: 100px;
    z-index: 1;


    @media(max-width: 870px){
        display:flex;
        flex-direction: column;
    }
`;

const Figure = styled.figure`
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
    /* background-color: #F5F5F7; */
    text-align: center;
`;