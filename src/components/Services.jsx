import React from 'react';
import styled from 'styled-components';

// icon
import HeatPumpOutlinedIcon from '@mui/icons-material/HeatPumpOutlined';
import airConditioner from "../assets/air-conditioner.png"
import boiler from "../assets/boiler.png"
import energy from "../assets/energy.png"
import radiator from "../assets/heating-radiator.png"
import plumbing from "../assets/plumbing.png"
import tools from "../assets/tools.png"
import reparation from "../assets/reparation.png"
import underfloor from "../assets/underfloor-heating.png"
import air from "../assets/air.png"
//

const Services = () => {
    return (
        <SectionContainer id='service-id'>
            <SectionTitle >NOS SERVICES</SectionTitle>
            <ServiceList>
                <ServiceItem>
                    <ServiceIcon><Icon src={boiler} /></ServiceIcon>
                    <ServiceName>Installation de chaudières</ServiceName>
                    <ServiceDescription>
                        Nous proposons une installation professionnelle et sécurisée de chaudières adaptées à vos besoins.
                    </ServiceDescription>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon><Icon src={radiator} /></ServiceIcon>
                    <ServiceName>Installation de radiateurs</ServiceName>
                    <ServiceDescription>
                        Nos experts assurent l'installation efficace de radiateurs pour un chauffage optimal de votre espace.
                    </ServiceDescription>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon><Icon src={reparation} /></ServiceIcon>
                    <ServiceName>Dépannage et réparation</ServiceName>
                    <ServiceDescription>
                        Nous intervenons rapidement pour diagnostiquer et réparer les pannes de vos équipements de chauffage.
                    </ServiceDescription>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon><Icon src={tools} /></ServiceIcon>
                    <ServiceName>Entretien préventif</ServiceName>
                    <ServiceDescription>
                        Assurez la longévité et la performance de vos équipements grâce à notre entretien préventif régulier.
                    </ServiceDescription>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon><Icon src={underfloor} /></ServiceIcon>
                    <ServiceName>Installation de planchers chauffants</ServiceName>
                    <ServiceDescription>
                        Profitez d'un confort thermique optimal avec nos solutions de planchers chauffants.
                    </ServiceDescription>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon><HeatPumpOutlinedIcon sx={{ fontSize: 50, margin: "25px" }} /></ServiceIcon>
                    <ServiceName>Installation de pompes à chaleur</ServiceName>
                    <ServiceDescription>
                        Optez pour une solution écologique et économique avec nos installations de pompes à chaleur.
                    </ServiceDescription>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon><Icon src={airConditioner} /></ServiceIcon>
                    <ServiceName>Installation et Entretien de climatiseurs</ServiceName>
                    <ServiceDescription>
                        Garantissez la performance de vos climatiseurs avec notre service d'entretien régulier.
                    </ServiceDescription>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon><Icon src={air} /></ServiceIcon>
                    <ServiceName>Installation de systèmes de purification d'air</ServiceName>
                    <ServiceDescription>
                        Améliorez la qualité de l'air intérieur avec nos systèmes de purification d'air avancés.
                    </ServiceDescription>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon><Icon src={plumbing} /></ServiceIcon>
                    <ServiceName>Réparation de fuites de plomberie</ServiceName>
                    <ServiceDescription>
                        Nos experts en plomberie résolvent efficacement les fuites et les problèmes de plomberie.
                    </ServiceDescription>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon><Icon src={energy} /></ServiceIcon>
                    <ServiceName>Diagnostic énergétique</ServiceName>
                    <ServiceDescription>
                        Évaluez l'efficacité énergétique de votre habitation avec notre service de diagnostic énergétique.
                    </ServiceDescription>
                </ServiceItem>
            </ServiceList>
        </SectionContainer>
    );
};



const Icon = styled.img`
width : 50px ;
margin: 25px;
`


const SectionContainer = styled.section`
    padding: 50px 0;
`;

const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
`;

const ServiceList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ServiceItem = styled.li`
    width: 300px;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    text-align: center;
`;

const ServiceIcon = styled.div`
    font-size: 40px;
    margin-bottom: 10px;
`;

const ServiceName = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
    font-size: 16px;
`;

export default Services;