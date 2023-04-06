import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const Artikel = () => {
    return(
    <Navbar style={{width:"1155px", marginTop:"40px"}}>
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:"30px",  fontWeight:"600"}}>Baca 100+ Artikel Baru</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login" style={{fontSize:"15px", textDecoration:"none", fontWeight:"600", color:"#E0004D"}}>Lihat Semua</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Artikel;