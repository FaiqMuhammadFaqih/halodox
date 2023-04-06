import Card from 'react-bootstrap/Card';



const Lihat = (props) => {
    return(
        <Card  style={{ display:"flex", flexDirection:"row" }}>
          <Card.Body>
            <Card.Title style={{fontSize:"13px", }} >{props.tul}</Card.Title>
          </Card.Body>
        </Card>
    )
}

export default Lihat;