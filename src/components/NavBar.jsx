import Carrito from "./CartWidget";
import "../App.css";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import {
    Wrapper,
    Logo,
    MenuItem,
    Left,
    Center,
    Right,
} from "./styledComponents";

const MyNavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <Logo>
                            <img
                                src="../images/LOGOBLANCO.png"
                                className="logoimg"
                            ></img>
                        </Logo>
                    </Link>
                </Left>
                <Center>
                    <Link
                        to="/categoria/cosmetica"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <MenuItem>Cosmética</MenuItem>
                    </Link>
                    <Link
                        to="/categoria/farmacia"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <MenuItem>Farmacia</MenuItem>
                    </Link>
                    <Link
                        to="/categoria/hogar-y-alimentos"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <MenuItem>Hogar y Alimentos</MenuItem>
                    </Link>
                </Center>
                <Right>
                    <MenuItem>Registrarse</MenuItem>
                    <MenuItem>Ingresar</MenuItem>
                    <Carrito />
                </Right>
            </Wrapper>
        </AppBar>
    );
};

export default MyNavBar;
