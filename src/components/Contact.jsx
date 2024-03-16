import React from 'react'
import styled from "styled-components"
import fb from "../assets/Social/facebook.svg"
import insta from "../assets/Social/instagram.svg"
import messenger from "../assets/Social/messenger.svg"
import whatsapp from "../assets/Social/whatsapp.svg"
import tiktok from "../assets/Social/tiktok.svg"

function Contact() {
    return (
        <Container>
            <Title id='contact-id'>Contact</Title>
            <div>
                <div className='top-info'>
                    <Phone>
                        <h1>Nous appelez : <a href="">055555555</a> / <a href="">055555555</a></h1>
                    </Phone>
                    <Email>
                        <h1>Envoyez nous un email : <a href="">test@test.test</a></h1>
                    </Email>
                </div>
                <SocialMedia className='bottom-info'>
                    <h1>Social Media</h1>
                    <div className='socialMedia-icon'>
                        <a href=""><SocialIcon src={fb} alt="facebook" /></a>
                        <a href=""><SocialIcon src={messenger} alt="messenger" /></a>
                        <a href=""><SocialIcon src={insta} alt="instagram" /></a>
                        <a href=""><SocialIcon src={tiktok} alt="tiktok" /></a>
                        <a href=""><SocialIcon src={whatsapp} alt="whatsapp" /></a>
                    </div>
                </SocialMedia>
            </div>
        </Container>
    )
}

const Title = styled.h1`
 font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
`

const Container = styled.div`
padding: 50px 20px; /* Réduire le padding pour les petits écrans */
display: flex; 
flex-direction: column;
gap : 50px ;
@media (max-width: 768px) {
        display : flex ;
        flex-direction: column;
        gap : 10px ;
    } ;
& > div {
    display : flex ;
    flex-direction: column;
    gap : 50px ;
    align-items: center ;
}
& .top-info {
    display : flex ;
    flex-direction: column; /* Afficher les informations de contact en colonne sur les petits écrans */
    gap: 20px; /* Espacement entre les éléments */
    align-items: center; /* Centrer les éléments */
    text-align: center; /* Centrer le texte */
}
`

const Phone = styled.div`

& >h1 {
    font-size: 1.5rem ;
    @media (max-width: 768px) {
        display : flex ;
        flex-direction: column;
        gap : 10px ;
        font-size : 1.2rem ;
    } ;
}
& a {
        text-decoration: none;
        @media (max-width: 768px) {
        display : flex ;
        flex-direction : column ;
        align-items: center ;
        font-size : 1rem ;
    } ;
    }
`

const Email = styled.div`
& h1 {
    font-size: 1.5rem ;
    @media (max-width: 768px) {
        display : flex ;
        flex-direction: column;
        gap : 10px ;
        font-size : 1.2rem ;
    } ;
}
& a {
        text-decoration: none;
        @media (max-width: 768px) {
            display : flex ; 
            flex-direction : column ;
        font-size : 1rem ;
    } ;
    }
`

const SocialMedia = styled.div`
border : solid 1px ;
width : max-content;
position: relative ;
padding : 25px 50px; /* Réduire le padding pour les petits écrans */
& > h1 {
font-size: 1.5rem;
position: absolute ;
top : -15px ;
left : 7.5% ; 
background  : white ;
padding : 0px 10px ;
} ;

& > div {
    display : flex ;
    gap : 20px ;  
}
`

const SocialIcon = styled.img`
width : 25px ;
  &:hover{
   transform: translateY(-5px) ; 
   transition-duration: .2s;
 }
`

export default Contact
