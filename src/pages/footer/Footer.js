import"./footer.css";
// import {  faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
//  import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import logo from "../assets/logo_main.png";
//import { faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";




const Footer = () => {
  return (
    <>
      <div className="container-fluid Footer">
        <div className="container">
          <div className="row gx-0 footer_row1 py-4">
            <div className="col-md-4 col-sm-4 pb-md-4 pb-lg-0 col-lg-2 ">
              <div className="footer_col1 pb-3">
                <h5 className="ft_h5">Company</h5>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Why Us</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Partnership</a>
                  </li>
                </ul>
              </div>
            </div>

          <div className="col-md-4 col-sm-4 pb-md-4 pb-lg-0 col-lg-2 ">
              <div className="footer_col1 pb-3">
                <h5 className="ht_5">Categories</h5>
                <ul>
                  <li>
                    <a href="#">Basic Yoga</a>
                  </li>
                  <li>
                    <a href="#">Strength Training</a>
                  </li>
                  <li>
                    <a href="#">Body Building</a>
                  </li>
                  <li>
                    <a href="#">Weight Loss</a>
                  </li>
                </ul>
              </div>
            </div>

         <div className="col-md-4 col-sm-4 pb-md-4 pb-lg-0 col-lg-2 ">
             <div className="footer_col1 pb-3">
                <h5 className="ht_5">Help</h5>
                <ul>
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <a href="#">Support Center</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
{/****************************************************************************************************** */}
             <div className="col-md-4 col-sm-4 pb-md-4 pb-lg-0 col-lg-2 ">
            <div className="footer_col1 ">
                <div className="footer_icons">
                  <h5 className="ft_5">Contact us</h5>
                  {/***************************************** */}
                  <div className="row pb-3">
                    <div className="col-2 ">
                      {/* <FontAwesomeIcon icon={faPhone} /> */}
                    </div>
                    <div className="col-10">
                      +91 2003425365
                    </div>

                  </div>
                  {/*********************************************************** */}
                    <div className="row pb-3">
                    <div className="col-2">
                      {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                    </div>
                    <div className="col-10">
                      fitness@example.com
                    </div>
                  </div>
                  {/******************************************************************* */}
                  <div className="row">
                    <div className="col-2 pb-3">
                      {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                    </div>
                    <div className="col-10">
                      #451 Mandian Road Hyderabad
                    </div>

                  </div>
                  {/******************************************************************************** */}

                </div>
              </div>
            </div>
            </div>
          {/****************************************************** */}
          <div className="row gx-0 footer_row2 align-items-center">
            <div className="col-md-3">
              {/* <img src={logo}alt="" className="img fluid footer_img"/> */}
            </div>

            <div className="col-md-6 text-center">
              <p>
                @2024<span>Fitness</span>. All copyrights reserved.
             </p>
            </div>
            <div className="col-md-3 text-end">
              <div className="icons">
             
              </div>


              </div>

            </div>

          </div>

        </div>



    </>
  )
}

export default Footer