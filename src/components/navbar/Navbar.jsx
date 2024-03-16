import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawerr from '../Drawer';
// import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/logo.png"
import "./navbar.scss"


export default function Navbar() {

    const [open, setOpen] = React.useState(false);

    return (
        <Container >
            <Box sx={{ flexGrow: 1, backgroundColor: "black" }} >
                <AppBar position="static" style={{ background: "rgb(34, 34, 34)" }} >
                    <Toolbar className='toolbar'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <NavLinks className='navlink-container' >
                            <Link className='navlink-item' href='#' >Acceuil</Link>
                            <Link className='navlink-item' href='#about-id' >Qui sommes nous ?</Link>
                            <Link className='navlink-item' href='#service-id' >Services</Link>
                            <Link className='navlink-item' href='#contact-id' >Contact</Link>
                        </NavLinks>
                        <Logo src={logo} width={"50px"} />
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawerr open={open} setOpen={setOpen} /> {/* Passer le state et la fonction setOpen au composant Drawer */}
        </Container>
    );
}


const Container = styled.div` 
`

const Logo = styled.img``

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 899px) {
    display: none;
  }
  @media (min-width: 900px) {
    display: flex;
  }
`;

const Link = styled.a``