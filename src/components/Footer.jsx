import React from 'react'
import styled from "styled-components"
function Footer() {
    return (
        <Container>
            <p>Copyright &copy; {new Date().getFullYear()} - {new Date().getFullYear() + 1} </p>
        </Container>
    )
}

const Container = styled.div`
background : rgb(34, 34, 34) ;
color : white ;
padding : 10px 25px ;
text-align: end;
& p {
    margin:  0 
}
`

export default Footer