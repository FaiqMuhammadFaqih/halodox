import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Kartu = (props) => {
    return(
      
        <Card style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"5px", border:"1px solid #657d74", paddingbottom:"5px" }}>
          <Card.Img  src={props.image} style={{width:"45%"}} />
          <Card.Body>
            <Card.Title style={{fontSize:"14px"}} >{props.teks}</Card.Title>
          </Card.Body>
        </Card>
    )
}

export default Kartu;