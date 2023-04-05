import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const IsiArtikel = (props) => {
    return(
        <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.gmbr} />
      <Card.Body>
      <Card.Text style={{fontSize:"15px"}}>
          {props.tekss}
        </Card.Text>
      <Button variant="danger">Go somewhere</Button>
        <Card.Text>
          {props.teksss}
        </Card.Text>
        
      </Card.Body>
    </Card>
    )
}

export default IsiArtikel;
