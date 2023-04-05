import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./../css/style.css"



const IsiArtikel = (props) => {
    return(
        <Card className='tek'  style={{ width: '18rem', display:"flex", flexDirection:"column",  justifyContent:"center",}}>
      <Card.Img variant="top" src={props.gmbr} />
      <Card.Body>
      <Card.Text className='we'  style={{fontSize:"15px", fontWeight:"600",}}>
          {props.tekss}
        </Card.Text>
      <Button variant="outline-secondary" disabled  style={{width:"30%", fontSize:"7px", color:"red"}}>Go somewhere</Button>
        <Card.Text className='yok' >
          <p style={{fontSize:"15px"}}>Tetap Jaga kesehatan, Terutama Di Bulan Ramadhan Ini</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    )
}

export default IsiArtikel;
