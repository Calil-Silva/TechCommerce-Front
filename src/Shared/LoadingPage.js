import styled from "styled-components"

export default function Loading() {
    return (
        <ContainerLoading>
          <LoadingImage alt="apple Loading" src="https://thumbs.gfycat.com/RipeLastIcefish-size_restricted.gif" />
        </ContainerLoading>
    )
}

const ContainerLoading = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 15%;

    @media(max-width: 834px){
        margin-top: 25%;
    }
    @media(max-width: 475px){
        margin-top: 50%;
    }
`;

const LoadingImage = styled.img`
    object-fit: cover;
`;
