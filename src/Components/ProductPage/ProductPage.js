import { useParams } from "react-router";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
export default function ProductPage() {

    const { categoryName } = useParams();
    
    console.log(categoryName);

    return (
        <PromoDiv>
            <Typewriter
            options={{
                strings: ["Get 3% Daily Cash back with Apple Card. And pay for your new iPad over 12 months, interest-free when you choose to check out with Apple Card Monthly Installments.*"],
                autoStart: true,
                delay: 10,
                pauseFor:2500,
                deleteSpeed: true,
                loop: true,
                }} />
            <ProductDiv>
                <ContainerProduct>
                    <InfoDiv>
                        <p className="new">New</p>
                        <p className="name">iPad <p className="style">mini</p></p>
                        <p className="info1">Mega power.</p>
                        <p className="info2">Mini sized.</p>
                        <p className="price">From $499</p>
                        <ButtonBuy>Buy</ButtonBuy>
                    </InfoDiv>
                    <ImageProduct alt="ipad-mini" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-cell-purple-202109_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1629840713000" />
                    <ContainerCardDescriptionDiv>
                        <CardDescription>With all-day battery life, iPad is ready to work or play for as long as you need it.1</CardDescription>
                        <CardDescription>The 8MP Wide camera on the back of iPad captures sharp, vivid images and video.</CardDescription>
                        <CardDescription>With Gigabit‑class LTE, you can connect even when you can’t access Wi‑Fi.2</CardDescription>
                    </ContainerCardDescriptionDiv>
                </ContainerProduct>
                <ContainerProduct>
                    <InfoDiv>
                        <p className="new">New</p>
                        <p className="name">iPad <p className="style"></p></p>
                        <p className="info1">Delightfully capable.</p>
                        <p className="info2">Surprisingly affordable.</p>
                        <p className="price">From $329</p>
                        <ButtonBuy>Buy</ButtonBuy>
                    </InfoDiv>
                    <ImageProduct alt="ipad-mini" src="https://www.apple.com/newsroom/images/product/ipad/standard/Apple_iPad-10-2-inch_Ninth-Gen_09142021_big.jpg.large.jpg"/>
                    <ContainerCardDescriptionDiv>
                        <CardDescription>With all-day battery life, iPad is ready to work or play for as long as you need it.1</CardDescription>
                        <CardDescription>The 8MP Wide camera on the back of iPad captures sharp, vivid images and video.</CardDescription>
                        <CardDescription>With Gigabit‑class LTE, you can connect even when you can’t access Wi‑Fi.2</CardDescription>
                    </ContainerCardDescriptionDiv>
                </ContainerProduct>
            </ProductDiv>
            
        </PromoDiv>
    )
}
const ContainerCardDescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 371px;
    width: 20%;
    margin-bottom: 35px;
    /* background-color: red; */

    @media(max-width: 834px){
        flex-direction: row;
        width: 100%;
        height: 100%;
    }
`;

const CardDescription = styled.div`
    border-radius: 10px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 18px;
`;

const PromoDiv = styled.div`
    height: 117px;
    padding-top: 85px;
    text-align: center;
    background-color: #F5F5F7;

    @media(max-width: 834px){
        background-color: #FFFFFF;
    }
    
`;

const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    .new{
        color: #BF4800;
    }
    .name{
        font-weight: bold;
        font-size: 35px;
        margin-bottom: 20px;
    }
    .style{
        font-size: 72px;
        background: -webkit-linear-gradient(#e66465, #9198e5);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .info1{
        font-weight: bold;
        font-size: 21px;
    }
    .info2{
        font-weight: bold;
        font-size: 21px;
        margin-bottom: 20px;
    }
    .price{
        font-size: 17px;
        margin-bottom: 20px;
    }

`;
const InfoDiv = styled.div`
`;
const ImageProduct = styled.img`
    height: 52%;
    width: 52%;
    min-height: 52%;
    min-width: 52%;
`;

const ContainerProduct = styled.div`
    display: flex;
    min-width: 80%;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    
    @media(max-width: 834px){
        flex-direction: column;
    }
`;

const ButtonBuy = styled.button`
    min-width: 28px;
    font-size: 17px;
    border-radius: 980px;
    color: #FFFFFF;
    background-color: #0071e3;
    cursor: pointer;
`;