import Nav from 'react-bootstrap/Nav';



const ButtonArtikel = () => {
    return(
    <Nav  variant="pills" >
        <Nav.Item style={{border:"1px solid black", borderRadius:"6px", marginRight:"10px"}}>
          <Nav.Link eventKey="link-1" style={{color:"black", fontWeight:"400"}}>Terbaru</Nav.Link>
        </Nav.Item >
        <Nav.Item style={{border:"1px solid black", borderRadius:"6px", marginRight:"10px"}}>
          <Nav.Link eventKey="link-2" style={{color:"black"}}>Populer</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{border:"1px solid black", borderRadius:"6px", marginRight:"10px"}}>
          <Nav.Link eventKey="link-3" style={{color:"black"}}>Kanker</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{border:"1px solid black", borderRadius:"6px", marginRight:"10px"}}>
          <Nav.Link eventKey="link-4" style={{color:"black"}}>Cacar Monyet</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{border:"1px solid black", borderRadius:"6px", marginRight:"10px"}}>
          <Nav.Link eventKey="link-5" style={{color:"black"}}>Hepatisis</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{border:"1px solid black", borderRadius:"6px", }}>
          <Nav.Link eventKey="link-6" style={{color:"black"}}>Kehamilan</Nav.Link>
        </Nav.Item> 
    </Nav>
    )
}


export default ButtonArtikel;  