import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import { getProductsCategoryRequest } from "../../Services/TechCommer";
export default function ProductPage() {

    const { categoryName } = useParams();
    const [products, setProducts] = useState(null);
    const renderProducts = useCallback(() => {
        getProductsCategoryRequest(categoryName)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
            })
    }, [categoryName]);

    useEffect(() => {
        renderProducts();
    }, [renderProducts]);

    if (!products) {
        return "";
    }
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
                {products.map((product, index) => {
                    return <ContainerProduct key={index}>
                        <InfoDiv>
                            <p className="new">New</p>
                            <p className="name">{product.name.split(' ')[0]}</p><p className="style">{product.name.split(' ')[1]}</p>
                            <p className="info1">{product.describe.split('|')[0]}</p>
                            <p className="info2">{product.describe.split('|')[1]}</p>
                            <p className="price">from ${product.price}</p>
                            <ButtonBuy>Adicionar ao Carrinho</ButtonBuy>
                        </InfoDiv>
                        <ImageProduct alt="product.name" src={product.url_image}/>
                        <ContainerCardDescriptionDiv>
                            {product.describe.split('|').slice(2).map((description, index) => <CardDescription key={index}>{description}</CardDescription>)}
                        </ContainerCardDescriptionDiv>
                    </ContainerProduct>
                })}
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
    margin-bottom: 50px;

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

    @media(max-width: 834px){
        font-size: 16px;
    }
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

    @media(max-width: 834px){
        .style{
            font-size: 50px;
            background: -webkit-linear-gradient(#e66465, #9198e5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

`;
const InfoDiv = styled.div`
`;
const ImageProduct = styled.img`
    height: 52%;
    width: 52%;
    min-height: 52%;
    min-width: 52%;

    @media(max-width: 834px){
        height: 100%;
        width: 100%;
        min-height: 100%;
        min-width: 100%;
    }
`;

const ContainerProduct = styled.div`
    display: flex;
    min-width: 80%;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
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