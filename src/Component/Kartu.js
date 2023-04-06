import Card from 'react-bootstrap/Card';
import "./../css/style.css"


const Kartu = (props) => {
    return(
      
        <Card  style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"5px",  paddingbottom:"5px" }}>
          <Card.Img src={props.image} style={{width:"45%", marginTop:"10px"}} />
          <Card.Body>
            <Card.Title style={{fontSize:"13px"}} >{props.teks}</Card.Title>
          </Card.Body>
        </Card>
    )
}

export default Kartu;