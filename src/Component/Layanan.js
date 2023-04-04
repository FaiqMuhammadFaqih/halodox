import Card from 'react-bootstrap/Card';




const Layanan = (props) => {
    return(
        <Card style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"5px", border:"none", paddingbottom:"5px"}}>
          <Card.Img src={props.layanan} style={{width:"60px", marginTop:"10px"}}/>
          <Card.Body>
            <Card.Title style={{fontSize:"15px", textAlign:"center", fontWeight:"350"}}>{props.layan}</Card.Title>
          </Card.Body>
        </Card>
    )
}


export default Layanan;