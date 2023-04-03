import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Navig = (props) => {
    return(
        <Navbar bg="light" expand="lg" style={{borderBottom:"1px solid #a6a3a3", backgroundColor:"#f3dbe8"}}>
      <Container >
        <Navbar.Brand href="#"><img  style={{ width:"171px", marginLeft:"20px", marginRight:"45px", }} src={props.img1} alt='image'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{fontSize:"17px", marginRight:"20px", color:"black"}}>Beranda</Nav.Link>
            <Nav.Link href="#action2" style={{fontSize:"17px", marginRight:"20px"}}>Artikel</Nav.Link>
            <Nav.Link href="#action2" style={{fontSize:"17px", marginRight:"20px"}}>Aplikasi</Nav.Link>
            <Nav.Link href="#action2" style={{fontSize:"17px"}}>Riwayat</Nav.Link>
            
          </Nav>
          <Button variant="outline-danger" style={{backgroundColor:"#e02e56", color:"white",  borderRadius:"5px", fontWeight:"600", }}>Login</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}


export default Navig;