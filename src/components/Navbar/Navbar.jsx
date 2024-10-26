import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../images/logoBN.png';
// import "./Navbar.css";
import { Button, ImageLogo, InputSpace, Nav } from './NavbarStyled';
import { useForm } from 'react-hook-form';

export function Navbar(){
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    function onSearch(data){
        const { title } = data;
        navigate(`/search/${title}`);
        reset();
    }


    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                        <button type='submit'>
                            <i className="bi bi-search"></i>
                        </button>
                        <input
                            type='text'
                            placeholder='Pesquise por um título'
                            {...register("title")}
                        />
                    </InputSpace>
                </form>

                <Link to="/">
                    <ImageLogo src={logo} alt="Logo Breaking News" />
                </Link>
                
                <Button>Entrar</Button>
            </Nav>
            <Outlet />
        </>
    )
}

