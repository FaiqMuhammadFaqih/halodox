import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Kartu = (props) => {
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>

    )
}

export default Kartu;