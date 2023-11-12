
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navegation = () => {
  return (
   <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           <Link  to="/"
              className="text-light mt-2 pe-2 text-decoration-none">
                Home
           </Link>
           <Link  to="/Favoritos"
              className="text-light mt-2 pe-2 text-decoration-none">
                Favoritos
           </Link>
          </Nav>
        </Container>
      </Navbar>
   </>
       
      

  )
}

export default Navegation   
