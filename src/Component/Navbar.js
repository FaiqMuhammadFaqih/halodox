import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Navig = (props) => {
    return(
        <Navbar bg="light" expand="lg" style={{ borderBottom:"1px solid #a6a3a3", backgroundColor:"none"}}>
      <Container>
        <Navbar.Brand href="#"><img  style={{ width:"171px", marginLeft:"20px", marginRight:"45px", }} src={props.img1} alt='image'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#acta" style={{fontSize:"17px", color:"black"}}>Beranda</Nav.Link>
            <Nav.Link href="#acti" style={{fontSize:"17px", }}>Artikel</Nav.Link>
            <Nav.Link href="#actu" style={{fontSize:"17px", }}>Aplikasi</Nav.Link>
            <Nav.Link href="#acte" style={{fontSize:"17px"}}>Riwayat</Nav.Link>
            
          </Nav>
          <Button variant="outline-danger" style={{backgroundColor:"#E0004D", color:"white",  borderRadius:"5px", fontWeight:"600", }}>Login</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}


export default Navig;