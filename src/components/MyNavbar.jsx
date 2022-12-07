import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>Farmacia Maffi</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Cosmética</MenuItem></Link>
                    <Link to='/category/2' style={{textDecoration: "none", color: "white"}}><MenuItem>Farmacia</MenuItem></Link>
                    <Link to='/category/3' style={{textDecoration: "none", color: "white"}}><MenuItem>Hogar y Alimentos</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>Registrarse</MenuItem>
                    <MenuItem>Ingresar</MenuItem>
                    <CartWidget />
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;