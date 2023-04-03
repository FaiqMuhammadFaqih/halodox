import Navig from "./Navbar";
import image from "./../Assets/halodoc-logo.png"
import image2 from "./../Assets/download.png"
import image3 from "./../Assets/download (1).png"
import image4 from "./../Assets/download (2).png"
import image5 from "./../Assets/download (3).png"
import image6 from "./../Assets/download (4).png"

import Kartu from "./Kartu";

const Main = () => {
    return(
        <div>
            <Navig img1={image}/>

            <div className="container">
                <div className="row"style={{margin:"15px"}}>
                    <h1  style={{fontSize:"32px", color:"#494243", paddingTop:"50px"}}>Solusi Kesehatan Terlengkap</h1>
                    <p style={{width:"650px", color:"#8a8082"}}>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc!</p>
                </div>
                <div className="row">
                    <Kartu img2={image2}/>
                </div>
            </div>
        </div>
    )
}

export default Main;