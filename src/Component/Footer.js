import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'remixicon/fonts/remixicon.css'
import gmbrfoo from "./../Assets/halodoc-footer-logo.png"
import play from "./../Assets/google-play-badge.png"
import apps from "./../Assets/app-store-badge.png"
import halod from "./../Assets/logo halodoc.png"
import "./../css/style.css"
import Medsos from "./../Assets/twitter-white.png"
import Medsos2 from "./../Assets/facebook-white.png"
import Medsos3 from "./../Assets/instagram-white.png"
import Medsos4 from "./../Assets/youtube-white.png"

const Footer = (props) => {
    return(
        <MDBFooter  className='text-center text-lg-start text-muted' style={{backgroundColor:"#46568E", color:"white", paddingTop:"5px"}}>
      <section className='' style={{ color:"white"}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3 gap-5'  style={{gap:"20px"}}>
            
            <MDBCol  lg="2" xl="2" >
            <img src={gmbrfoo} style={{width:"200px", marginBottom:"40px"}}></img>
            <h6 className='fw-bold mb-3 fs-lg-1'>Site Map</h6>
              <p >
                <a href='#' style={{textDecoration:"none", color:"white"}}> FAQ</a>
              </p>
              <p>
                <a href='#' style={{textDecoration:"none", color:"white"}}>Blog</a>            
              </p>
              <p>
                <a href='#' style={{textDecoration:"none", color:"white"}}>Syarat & Ketentuan</a>
              </p>
              <p>
                <a href='#' style={{textDecoration:"none", color:"white"}}>Kebijakan Privasi</a>
              </p>
              <p>
                <a href='#' style={{textDecoration:"none", color:"white"}}>Kebijakan Privasi </a>     
              </p>
            </MDBCol>
            <MDBCol  lg="2" xl="2" mt-5 style={{marginTop:"90px"}}>
              
              <br>
              </br>
              <p>
                <a href='#' style={{textDecoration:"none", color:"white"}}>Karir</a>     
              </p>
              <p>
                <a href='#' style={{textDecoration:"none", color:"white"}}>Security</a>     
              </p>
              <p>
                <a href='#' style={{textDecoration:"none", color:"white"}}>Media</a>     
              </p>
              <p>
                <a href='#' style={{textDecoration:"none", color:"white"}}>Corporate Partnership</a>     
              </p>
            </MDBCol>

            <MDBCol  lg="2" xl="3" style={{marginTop:"80px"}}>
              <h6 className='fw-bold mb-3 fs-lg-1'>Layanan Pengaduan Konsumen</h6>
                <p>
                  <h6 className='fw-bold  fs-lg-0'>PT Media Dokter Investama</h6>
                    Jl. H.R. Rasuna Said Kav B32-33, Jakarta Selatan
                    help@halodoc.com / 021-5095-9900
                </p>
                <p>
                  Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
                  Kementerian Perdagangan Republik Indonesia
                  0853 1111 1010 (WhatsApp)
                </p>
            </MDBCol>

            
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' style={{marginTop:"80px"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Download App Di</h6>
             
                <img src={play} style={{width:"40%", marginRight:"10px"}}></img>
                <img src={apps} style={{width:"35%"}}></img>
        
                <h6 className='text-uppercase fw-bold mb-4 mt-5'>Apakah Kamu Dokter?</h6>
              
              <div>
                <div className="cac"style={{display:"flex", flexDirection:"row", alignItems:"center", width:"110px", borderRadius:"5px"}}>
                  <img src={halod} className='bton' style={{ }}></img>
                  <h1 className='h1' style={{margin:"5px"}}>DAFTAR</h1>
                </div>
              </div>       
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='p-4' style={{ backgroundColor:"#35406B", color:"white", display:"flex", justifyContent:"space-between", width:"100%", alignItems:"center"}}>
        <h6 className='text-uppercase fw-bold '>©HALODOC, 2023. ALL RIGHTS RESERVED</h6>
        
        <div style={{ color:"white", display:"flex", flexDirection:"row",  width:"500px",  alignItems:"center", gap:"10px"}}> 
          <h6 className='text-uppercase fw-bold '>Follow Kami Di:</h6>
            <div  style={{gap:"50px"}}>
              <a href='https://twitter.com/'>
                <i class="ri-twitter-fill"></i>
              </a>    
              <a>
                <i class="ri-facebook-fill"></i>   
              </a>
              <a>
                <i class="ri-instagram-line"></i>
              </a>
              <a>
                <i class="ri-youtube-line"></i>
              </a>
            </div>           
        </div>  
      </div>
    </MDBFooter>
    )
}

export default Footer; 