import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <SectionContainer>
            <SectionTitle id='about-id'>Qui Sommes-Nous ?</SectionTitle>
            <Paragraphe>
                Chez [Nom de l'Entreprise], nous sommes fiers de fournir des services de chauffage professionnels et de qualité supérieure pour répondre à tous vos besoins en matière de chauffage, de climatisation, de ventilation et de plomberie. Forts d'une expérience éprouvée et d'une expertise approfondie dans le domaine, notre équipe de chauffagistes qualifiés est déterminée à offrir un confort thermique optimal à nos clients, tout en veillant à leur sécurité et à leur satisfaction.
                En tant qu'entreprise axée sur le client, nous nous engageons à fournir un service personnalisé et des solutions sur mesure pour chaque projet. Que vous ayez besoin d'une nouvelle installation de chaudière, d'une réparation de système de climatisation, d'un entretien préventif régulier ou d'une assistance d'urgence, notre équipe est là pour vous accompagner à chaque étape. Nous mettons un point d'honneur à garantir un travail de qualité, des délais respectés et des prix compétitifs.
                Chez [Nom de l'Entreprise], notre mission est de créer des environnements confortables et sécurisés pour nos clients, tout en contribuant à la préservation de l'environnement grâce à l'utilisation de technologies écoénergétiques et de pratiques durables. Faites-nous confiance pour prendre soin de votre confort et de votre bien-être toute l'année.
                Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons répondre à vos besoins en chauffage et en plomberie avec professionnalisme et dévouement.
            </Paragraphe>
        </SectionContainer>
    );
};

const Paragraphe = styled.p`
    padding: 0 20px;
    text-align: justify;
    line-height: 35px;

    @media (min-width: 768px) {
        padding: 0 150px;
    }
`

const SectionContainer = styled.section`
    padding: 50px 0;
    background-color: #eeee;
`;

const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
`;

export default About;
