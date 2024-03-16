import React from 'react'
import Navbar from './navbar/Navbar'
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';

const image = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hb-maintenance-67.fr%2Fuserfiles%2F28717%2FBandeau-interne%2FArtisans%2520chauffagistes%2520%25C3%25A0%2520Plobsheim%2520-%2520HB%2520Maintenance.jpg&f=1&nofb=1&ipt=35a8055613fa0e2703d39486a58c2fa530967037dbf7c98b2031d9a7f841487e&ipo=images",
    "",
    "",
    ""
]


function Header() {
    return (
        <Container>
            <Navbar />
        </Container>
    )
}



const Container = styled.div`
z-index: 999;
`




export default Header