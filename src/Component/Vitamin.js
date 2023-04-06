import Card from 'react-bootstrap/Card';


const Vitamin = (props) => {
    return(
        <Card  style={{width:"410px", display:"flex", flexDirection:"row" }}>
          <Card.Img src={props.vit} style={{width:"10%", margin:"10px"}} />
          <Card.Body>
            <Card.Title style={{fontSize:"13px", }} >{props.tulis}</Card.Title>
          </Card.Body>
        </Card>
    )
}

export default Vitamin;