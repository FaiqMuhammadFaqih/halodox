import Card from 'react-bootstrap/Card';


const Penawaran = (props) => {
    return(
    <Card style={{width:"300px", marginTop:"10px", border:"none", margin:"15px", display:"flex", flexDirection:"row"}}>
        <Card.Img variant="top" src={props.penawar} style={{width:"300px", marginTop:"10px", borderRadius:"7px"}}/>    
    </Card>
    )
}

export default Penawaran;