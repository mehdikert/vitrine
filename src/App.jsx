//import './App.css'
import About from './components/About'
import Carouseel from './components/Carouseel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services'
import styled from "styled-components"
function App() {

  return (
    <Container>
      <Header />
      <Carouseel />
      <Services />
      <About />
      <Contact />
      <Footer />
    </Container>
  )
}


const Container = styled.div`
display : flex ; 
flex-direction : column ;
justify-content: space-between;
`

export default App
