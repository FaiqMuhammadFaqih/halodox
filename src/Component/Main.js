import Navig from "./Navbar";
import Asuransi from "./Asuransi";
import Layanan from "./Layanan";
import Penawaran from "./Penawaran";
import image8 from "./../Assets/path.png"
import image from "./../Assets/halodoc-logo.png"
import image2 from "./../Assets/download.png"
import image3 from "./../Assets/download (1).png"
import image4 from "./../Assets/download (2).png"
import image5 from "./../Assets/download (3).png"
import image6 from "./../Assets/download (4).png"
import image7  from "./../Assets/download (5).png"
import LogoImage from "./../Assets/home-banner-v3.png"
import LogoLayanan from "./../Assets/tc-mw-home.png"
import LogoLayanan1 from "./../Assets/covid-19-test.png"
import LogoLayanan2 from "./../Assets/diabetes-care.png"
import LogoLayanan3 from "./../Assets/heart-care.png"
import LogoLayanan4 from "./../Assets/vaccine_checker.png"
import LogoLayanan5 from "./../Assets/skin-health.png"
import LogoLayanan6 from "./../Assets/sexual-health.png"
import LogoLayanan7 from "./../Assets/mental-health-v2.png"
import LogoLayanan8 from "./../Assets/animal-health-v2.png"
import LogoLayanan9 from "./../Assets/parenting.png"
import LogoPenunjang from "./../Assets/stress-check-icon.png"
import LogoPenunjang1 from "./../Assets/period-tracker-v2.png"
import LogoPenunjang2 from "./../Assets/bmi-calculator-v2.png"
import LogoPenunjang3 from "./../Assets/pregnancy-v2.png"
import LogoPenunjang4 from "./../Assets/heart-risk-calculator.png"
import LogoPenunjang5 from "./../Assets/diabetes-care.png"
import LogoPenunjang6 from "./../Assets/medicine-reminder-v2.png"
import LogoPenunjang7 from "./../Assets/donation.png"
import LogoPenunjang8 from "./../Assets/depresi.png"
import LogoPenunjang9 from "./../Assets/anxiety.png"



import Kartu from "./Kartu";

const Main = () => {
    return(
        <div >
            <Navig img1={image}/>
            <div style={{backgroundImage: `url(${LogoImage})`, backgroundRepeat:"no-repeat", backgroundPosition:"bottom right", backgroundSize:"cover", paddingBottom:"5px", paddingTop:"5px"}}>
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
                    <div  className="col-2" style={{width:"35%"}}>
                        <Asuransi gam={image7} gamb={image8}/>   
                    </div>
                </div>
            </div>
            </div>
            <div>
            <div className="container">
                <div style={{marginTop:"70px"}}>
                    <h1 style={{fontSize:"25px"}}>Layanan Khusus</h1>
                </div>
                <div className="row mb-5 " style={{margin:"20px", gap:"40px"}}>
                <div className="row col-1">
                    <Layanan layanan={LogoLayanan} layan="Layanan Bidan"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoLayanan1} layan="TES COVID-19"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoLayanan2} layan="Perawatan Diabetes"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoLayanan3} layan="Kesehatan Jantung"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoLayanan4} layan="Vaksinasi COVID-19"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoLayanan5} layan="Kesehatan Kulit"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoLayanan6} layan="Kesehatan Seksual"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoLayanan7} layan="Kesehatan Mental"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoLayanan8} layan="Kesehatan Hewan"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoLayanan9} layan="Parenting"/>
                </div>
                </div>
                
            </div>
            </div>
            <div>
            <div className="container">
                <div style={{marginTop:"70px"}}>
                    <h1 style={{fontSize:"30px"}}>Penunjang Kesehatan</h1>
                </div>
                <div className="row mb-5 " style={{margin:"50px", marginLeft:"20px", gap:"43px"}}>
                <div className="row col-1">
                    <Layanan layanan={LogoPenunjang} layan="Cek Stres"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoPenunjang1} layan="Kalender Menstruasi"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoPenunjang2} layan="Kalkulator BMI"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoPenunjang3} layan="Kalender Kehamilan"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoPenunjang4} layan="Risiko Jantung"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoPenunjang5} layan="Risiko Diabetes"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoPenunjang6} layan="Pengingat Obat "/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoPenunjang7} layan="Donasi"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoPenunjang8} layan="Tes Depresi"/>
                </div>
                <div className="row col-1">
                    <Layanan layanan={LogoPenunjang9} layan="TES Gangguan Kecemasan"/>
                </div>                
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Main;