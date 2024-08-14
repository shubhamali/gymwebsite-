import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Autoplay, EffectCreative } from 'swiper/modules';
import img1 from "../../assests/test (1).jpg";
import img2 from "../../assests/test3 (1).png";
import img3 from "../../assests/test2 (1).jpg";
import img4 from "../../assests/test4.png";
import icon from "../../assests/test_icon.png";
import img5 from "../../assests/test_partner.png";
import "./testimonal.css";


const Testimonial = () => {
  return (
    <>
      <div className="conatainer-fluid testimonial">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 mt-5">
              <div className="testimonial_col1 pe-5 ">
                <h1 className="main_heading">What Our Happy Clients Say About Us</h1>
                <p className="py-4">I have been a member of Fitness club within for 6 months now and i absoutely love it! The trainers are so motivate and they really help to reach fitness goals.
                </p>
                <div className="row pt-2 align-items-center">
                  <div className="col-md-5 mt-5">
                    <div className="test_images">
                      <img src={img1} alt="" className="img-fluid" />
                      <img src={img2} alt="" className="img-fluid" />
                      <img src={img3} alt="" className="img-fluid" />
                      <img src={img4} alt="" className="img-fluid" />
                      <img src={icon} alt="" className="img-fluid" />

                   </div>

                  </div>
                  <div className="col-md-7 gx-0">
                    <p className="test_p3">
                      <i className="fa-solid fa-star"></i> 4.9 (450 Reviews)
                    </p>
                  </div>
                </div>
                <img src={img5} alt="" className="img-fluid py-4"/>
              </div>
            </div>
            <div className="col-md-5">
            <div className="testimonial_col2">
         <Swiper
         grabCursor={true}
         effect={'creative'}
         creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
           },

        }}
          autoplay={{
          delay:1000,
              disableOnInteraction:false,
          }}

        modules={[ Autoplay,EffectCreative]}
        className="mySwiper"
      >
                  <SwiperSlide>
                    <div className="row test_main">
                      <div className="col-12">
                        <div className="row gx-0 align-items-center">
                          <div className="col-md-4 text center">
                            <img src={img1} alt=""/>
                          </div>
                          <div className="col-md-8">
                            <h5>Farhan Raiz</h5>
                            <p className="test_p1 pt-1">Happy Customer</p>
                        </div>
                        </div>
                        <div className="stars py-3">

                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                        </div>
                        <p className="test_p2">Fantastic gym website! Easy navigation,diverse workouts,and a personal tracker keep me on track.Excellent customer support.Thanks for making fitness enjoyable and hassle-free!</p>
                      </div>
                    </div>
                  </SwiperSlide>
{/******************************************************************************************************************************** */}
                    <SwiperSlide>
                    <div className="row test_main">
                      <div className="col-12">
                        <div className="row gx-0 align-items-center">
                          <div className="col-md-4 text center">
                            <img src={img2} alt=""/>
                          </div>
                          <div className="col-md-8">
                            <h5>Sarah H.</h5>
                            <p className="test_p1 pt-1">Happy Customer</p>
                        </div>
                        </div>
                        <div className="stars py-3">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                        </div>
                        <p className="test_p2">Awesome gym site! User-friendly varied workouts,and a personal tracker keep me engaged.Superb customer support.Thanks for making fitness enjoyable and stress-free.Highly recommended </p>
                      </div>
                    </div>
                  </SwiperSlide>
 {/******************************************************************************************************************************** */}
                  <SwiperSlide>
                    <div className="row test_main">
                      <div className="col-12">
                        <div className="row gx-0 align-items-center">
                          <div className="col-md-4 text center">
                            <img src={img3} alt=""/>
                          </div>
                          <div className="col-md-8">
                            <h5>Mark Joseph</h5>
                            <p className="test_p1 pt-1">Happy Customer</p>
                        </div>
                        </div>
                        <div className="stars py-3">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                        </div>
                        <p className="test_p2">Love the gym website!Easy navigation ,awesome workouts,and the personalized tracker keep me on the track.Quick and helpful customer support too.Thanks for making fitness so accessible</p>
                      </div>
                    </div>
                  </SwiperSlide>
 {/******************************************************************************************************************************** */}
                    <SwiperSlide>
                    <div className="row test_main">
                      <div className="col-12">
                        <div className="row gx-0 align-items-center">
                          <div className="col-md-4 text center">
                            <img src={img4} alt=""/>
                          </div>
                          <div className="col-md-8">
                            <h5>Emily R.</h5>
                            <p className="test_p1 pt-1">Happy Customer</p>
                        </div>
                        </div>
                        <div className="stars py-3">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                        </div>
                        <p className="test_p2"> Joining  Fitness Club has been a game-changer for me. The trainers are knowledgeable, and the community is so supportive.I have seen incredible results in just a few months!</p>
                      </div>
                    </div>
                  </SwiperSlide>


      </Swiper>



              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Testimonial