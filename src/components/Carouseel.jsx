import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components"

function Carouseel() {
    return (
        <Container>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.guide-artisan-ile-de-france.fr%2Fimg%2Factualites%2F1600x640%2Ftrouver-un-chauffagiste-a-paris.jpg&f=1&nofb=1&ipt=8e22a6b8d8a20eeb881ebf1658ab092b0ec8457b6af6be9f16e4df7f40d75486&ipo=images"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caroussel-caption'>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-20"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.guide-artisan-rhone-alpes.fr%2Fimg%2Factualites%2F1600x640%2Ffaire-appel-a-un-chauffagiste-pres-de-chez-vous.jpg&f=1&nofb=1&ipt=a65ae0424373c3aec6074f43f2bbccea83cf7c7b394849d2155cf20319cf479c&ipo=images"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='caroussel-caption'>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.guide-artisan-limousin.fr%2Fimg%2Factualites%2Fcomment-choisir-le-bon-artisan-chauffagiste.jpg&f=1&nofb=1&ipt=8df5c74a88fdb40ae30d29f2eed0cf60e357744dc2b465e2237d9f20bfc965d2&ipo=images"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='caroussel-caption'>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

const Container = styled.div`
& .caroussel-caption {
    background-color: #ffffff50 ;
}
`

export default Carouseel;