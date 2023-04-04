import Navig from "./Navbar";
import image from "./../Assets/halodoc-logo.png"
import image2 from "./../Assets/download.png"
import image3 from "./../Assets/download (1).png"
import image4 from "./../Assets/download (2).png"
import image5 from "./../Assets/download (3).png"
import image6 from "./../Assets/download (4).png"
import LogoImage from "./../Assets/home-banner-v3.png"

import Kartu from "./Kartu";

const Main = () => {
    return(
        <div >
            <Navig img1={image}/>
            <div style={{backgroundImage: `url(${LogoImage})`, backgroundRepeat:"no-repeat", margin:"0", backgroundPosition:"bottom right", backgroundSize:"cover", paddingBottom:"100px"}}>
            <div className="container" >
                <div className="row"style={{margin:"15px"}}>
                    <h1  style={{fontSize:"32px", color:"#2d2f2e", paddingTop:"50px", fontWeight:"700"}}>Solusi Kesehatan Terlengkap</h1>
                    <p style={{width:"650px", color:"#8a8082"}}>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc!</p>
                </div>
                <div className="row gap-3 mb-5 m-3">
                    <div className="col-2">
                        <Kartu image={image2} teks="Chat Dengan Docter"/>
                    </div>
                    <div className="col-2">
                        <Kartu image={image3} teks="Toko Kesehatan"/>
                    </div>
                    <div className="col-2">
                        <Kartu image={image4} teks="Buat Janji RS"/>
                    </div>
                    <div className="col-2">
                        <Kartu image={image5} teks="Janji Medis"/>
                    </div>
                    <div className="col-2">
                        <Kartu image={image6} teks="Layanan Home Lab"/>
                    </div>
                    <div style={{width:"35%"}}>
                        <Kartu/>
                    </div>
                </div>
               
            </div>
            </div>
        </div>
    )
}

export default Main;