import { Link } from "react-router-dom"
import styled from "styled-components";
export default function CategoriesNavBarlist ({isMenu}) {
    
    return (
        <>
            {isMenu ?
                <>
                <Link to="/store">Store</Link>
                <HorizontalSeparator />
                <Link to="/mac">Mac</Link>
                <HorizontalSeparator />
                <Link to="/iPad">iPad</Link>
                <HorizontalSeparator />
                <Link to="/iPhone">iPhone</Link>
                <HorizontalSeparator />
                <Link to="/Watch">Watch</Link>
                <HorizontalSeparator />
                <Link to="/AirPods">AirPods</Link>
                <HorizontalSeparator />
                <Link to="/TV&Casa">TV & Casa</Link>
                <HorizontalSeparator />
                <Link to="/Exclusivo-Apple">Exclusivo Apple</Link>
                <HorizontalSeparator />
                <Link to="/Acessórios">Acessórios</Link>
                <HorizontalSeparator />
                <Link to="/Suporte">Suporte</Link>
                <HorizontalSeparator />
                </>
                :
                <>
                <Li><Link to="/store">Store</Link></Li>
                <Li><Link to="/Mac">Mac</Link></Li>
                <Li><Link to="/iPad">iPad</Link></Li>
                <Li><Link to="/iPhone">iPhone</Link></Li>
                <Li><Link to="/Watch">Watch</Link></Li>
                <Li><Link to="/AirPods">AirPods</Link></Li>
                <Li><Link to="/TV&Casa">TV & Casa</Link></Li>
                <Li><Link to="/Exclusivo-Apple">Exclusivo Apple</Link></Li>
                <Li><Link to="/Acessórios">Acessórios</Link></Li>
                <Li><Link to="/Suporte">Suporte</Link></Li>
                </>
            }
        </>
    )
}

const Li = styled.li`
    opacity: 0.8;

    @media(max-width: 834px){
        display: none;
    }
`;

const HorizontalSeparator = styled.div`
    height: 1px;
    width: 100%;
    background-color: #ffffff;
`;