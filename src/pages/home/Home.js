import React from "react";
import "./Home.css";
//import main from "../assests/image1.jpeg";
import main1 from "../../assests/gym4.jpg";
import main2 from "../../assests/gym1.jpg";
import main3 from "../../assests/gym3.jpg";
import icon from "../../assests/icon.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
import {Autoplay, Scrollbar } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate=useNavigate();
    return (
        <>
        {/****************************** */}
        <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
            delay:1000,
                disableOnInteraction:false,
            }}
        modules={[Autoplay,Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>

        <div className="container-fluid hero">
                <div className="container gx-0">
                    <div className="row gx-0">
                       
                        <div className="col-md-6">
                            <div className="hero_col2">
                                <img src={main1} alt="img" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hero_col1">
                                <h1>GET HEALTY BODY WITH THE <span className="color-text">PERFECT</span> EXERCISES</h1>
                                <p>Get fit fast with Fitness Gym's
                                    certified personal trainer.Enjoy cardio,
                                    strength,and weight training 
                                    with top equipment.
                                    Join now and make 'Impossible'
                                    'I'm possible'!
                                </p>
                                <div className="hero_btns">
                                    <button onClick={()=>navigate("/services")} className="btn1 btn0">Join Now</button>
                                    <button className="play_btn">
                                        <img src={icon} />
                                        watch video</button>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="container-fluid hero hero1">
                <div className="container gx-0">
                    <div className="row gx-0">
                        <div className="col-md-6">
                            <div className="hero_col1">
                                <h1>GET HEALTY BODY WITH THE <span className="color-text">PERFECT</span> EXERCISES</h1>
                                <p>Get fit fast with Fitness Gym's
                                    certified personal trainer.Enjoy cardio,
                                    strength,and weight training 
                                    with top equipment.
                                    Join now and make 'Impossible'
                                    'I'm possible'!
                                </p>
                                <div className="hero_btns">
                                    <button onClick={()=>navigate("/services")} className="btn1 btn0">Join Now</button>
                                    <button className="play_btn">
                                        <img src={icon} />
                                        watch video</button>
                                </div>
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                            <div className="main_2 px-5">
                                <img src={main2} alt="img" className="img-fluid" />
                            </div>
                        </div>
                        </div>
                    </div>
            </div>

        </SwiperSlide>


        <SwiperSlide>
        <div className="container-fluid hero">
                <div className="container gx-0">
                    <div className="row gx-0">
                       
                        <div className="col-md-6">
                            <div className="main_3">
                                <img src={main3} alt="img" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hero_col1">
                                <h1>GET HEALTY BODY WITH THE <span className="color-text">PERFECT</span> EXERCISES</h1>
                                <p>Get fit fast with Fitness Gym's
                                    certified personal trainer.Enjoy cardio,
                                    strength,and weight training 
                                    with top equipment.
                                    Join now and make 'Impossible'
                                    'I'm possible'!
                                </p>
                                <div className="hero_btns">
                                    <button onClick={()=>navigate("/services")} className="btn1 btn0">Join Now</button>
                                    <button className="play_btn">
                                        <img src={icon} />
                                        watch video</button>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </SwiperSlide>    
      </Swiper>           
    </>
    )
}
export default Home;