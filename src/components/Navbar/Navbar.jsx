import logo from '../../images/logoBN.png';
// import "./Navbar.css";
import { Button, ImageLogo, InputSpace, Nav } from './NavbarStyled';

export function Navbar(){
    return (
        <>
            <Nav>
                <InputSpace>
                    <i className="bi bi-search"></i>
                    <input
                        type='text'
                        placeholder='Pesquise por um título'
                    />
                </InputSpace>

                <ImageLogo src={logo} alt="Logo Breaking News" />

                <Button>Entrar</Button>
            </Nav>
        </>
    )
}

