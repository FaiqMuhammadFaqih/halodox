import Card from 'react-bootstrap/Card';




const Asuransi = (props) => {
    return(
        <Card className='px-4 my-3' style={{display:"flex", flexDirection:"row", width:"100%"}}>
          <Card.Img src={props.gam} style={{width:"100%"}}/>
          <Card.Body>
            <Card.Title style={{fontSize:"20px"}}>Sambungkan Asuransimu</Card.Title>
            <Card.Text style={{fontSize:"10px"}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    )
}


export default Asuransi;