import styled, { keyframes } from "styled-components"

export default function MaintenancePage() {
    return (
        <Page>
            <div className="typing">
                <h2 className="text-uppercase">Under(...)</h2>
                <h2 className="text-uppercase">(...)development...</h2>
            </div>
        </Page>
    )
}
const cursorBlink = keyframes`
    0%,
     75% {
         opacity: 1
     }

     76%,
     100% {
         opacity: 0
     }

`;

const type = keyframes`
    0%,
     100% {
         width: 0px
     }

     30%,
     60% {
         width: 100%;
     }

     @media(max-width: 330px){
         0%,
         100% {
             width: 0px;
         }

         30%,
         60% {
            width: 280px;
     }
`;
const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url("https://miro.medium.com/max/5120/1*RDX1T9RWKvw2D43THYg34w.jpeg");
    background-size: 100%;
    z-index: 0;

    .typing::before {
     content: '';
     position: absolute;
     top: 0;
     right: 0;
     width: 2px;
     height: 100%;
     background: #4FC3F7;
     animation: ${cursorBlink} 0.8s steps(3) infinite
    }

    .typing {
     position: relative;
     -webkit-box-reflect: below 1px linear-gradient(transparent, #3333)
    }
    
    .typing h2 {
     position: relative;
     color: #4FC3F7;
     letter-spacing: 5px;
     font-size: 4rem;
     overflow: hidden;
     margin-bottom: 0;
     animation: ${type} 5s steps(11) infinite
    }
    

    @media(max-width: 330px) {
     .typing h2 {
         font-size: 3rem;
         animation: type 5s steps(10) infinite;
         font-size: 28px;
     }

     .typing {
         width: 100%;
     }
 }
`;