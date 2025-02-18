// import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer.jsx"
import { NavLink } from "react-router-dom";
import Image1 from "../Assets/img1.jpg";
import Image2 from "../Assets/img2.jpg";
import Image3 from "../Assets/img3.webp";
import TimelessBand from "../Assets/TImeless Bands.png";
import TrendingMangalsutras from "../Assets/TrendingMangalsutras.png";
import EverydayBraceletes from "../Assets/EverydayBracelets.png";
import AwwDorablrKidsDesigns from "../Assets/AwwDorablrKidsDesigns.png";
import StyleshMensSolitarres from "../Assets/StyleshMensSolitarres.png";
import Under50kNecklaces from "../Assets/Under50kNecklaces.png";
import VideoFrame from "../Assets/videoframe.png";
import Minios from "../Assets/Minios.jpg";
import Utsav from "../Assets/Utsav.jpg";
import HarryPotter from "../Assets/HarryPotter.jpg";
import ReferEarn from "../Assets/ReferEarn.webp";
import Earring from "../Assets/Earring.webp";
import Stylish from "../Assets/Stylish.webp";
import LasthCance from "../Assets/LastChance.jpg";
import Video2 from "../Assets/Video2.png";
import Design from "../Assets/Design.webp";
import Stores from "../Assets/Stores.webp";
import GOld from "../Assets/Gold.png";
import Tanishq from "../Assets/Tanishq.png";
import Image from "../Assets/Image1.png";
import Story1 from "../Assets/Story1.jpg";
import StoryImage2 from "../Assets/StoryImage2.jpg";
import StoryImage3 from "../Assets/StoryImage3.jpg";
import StoryImage4 from "../Assets/SToryImage4.jpg";
import StoryImage5 from "../Assets/StoryImage5.jpg";
import StoryImage6 from "../Assets/StoryImage6.jpg";
import StoryImage7 from "../Assets/StoryImage7.jpg";
import GiftImage from "../Assets/GiftImage.png";

// React icons
import { FaBeer } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

import AboutProductSlider from "./AboutProductSlider";

// swiper slider
import React, { useRef, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";


// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
  useEffect(()=>{    
      AOS.init();
  })
  return (
    <div>
      {/* Intro Text */}
      <p className="introText m-0">
        Introducing CaratLane 8 months PoP! Plan your purchase{" "}
      </p>

      {/* Navbar */}
      <Navbar />

      {/* slider from botstrap */}
      <div className="slider" >
      <AboutProductSlider />
      </div>

      {/* second section */}
      <div className="row m-0 images py-4">
        <div className="col-lg-6 col-12 m-auto h-25">
          <NavLink>
            <img src={Image1} className="img-fluid w-100 h-25" />
          </NavLink>
        </div>
        <div className="col-lg-6">
          <div className="row m-0 p-0">
            <div className="col-12 p-0">
              <NavLink>
                <img src={Image2} className="img-fluid w-100" />
              </NavLink>
            </div>
            <div className="col-12 mt-4 p-0 pt-2">
              <NavLink>
                <img src={Image3} className="img-fluid w-100" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="row m-0 visual_tab">
        <div className="col-lg-4 col-md-6 mt-4 text-center">
          <NavLink className={"tab_content m-auto"}>
            <img src={TimelessBand} className="img-fluid" />
          </NavLink>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 text-center">
          <NavLink className={"tab_content"}>
            <img src={TrendingMangalsutras} className="img-fluid" />
          </NavLink>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 text-center">
          <NavLink className={"tab_content"}>
            <img src={EverydayBraceletes} className="img-fluid" />
          </NavLink>
        </div>
        <div className="col-lg-4 mt-4 col-md-6 text-center">
          <NavLink className={"tab_content"}>
            <img src={AwwDorablrKidsDesigns} className="img-fluid" />
          </NavLink>
        </div>
        <div className="col-lg-4 mt-4 col-md-6 text-center">
          <NavLink className={"tab_content"}>
            <img src={StyleshMensSolitarres} className="img-fluid " />
          </NavLink>
        </div>
        <div className="col-lg-4 mt-4 col-md-6 text-center">
          <NavLink className={"tab_content"}>
            <img src={Under50kNecklaces} className="img-fluid" />
          </NavLink>
        </div>

        <div></div>
      </div>

      {/* Forth Section */}
      <div className="py-3">
        <NavLink>
          <img src={VideoFrame} className="img-fluid" />
        </NavLink>
      </div>

      {/* View all collection */}
      <div className="viewcollection">
        <div className="row m-0 py-5 ">
          <div className="col-lg-4 col-md-4 mt-5">
            <NavLink>
              <img src={Minios} className="img-fluid" data-aos="fade-up"  data-aos-duration="3000"/>
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-4 mt-3">
            <NavLink>
              <img src={Utsav} className="img-fluid" data-aos="fade-down"  data-aos-duration="3000" />
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-4 mt-5">
            <NavLink>
              <img src={HarryPotter} className="img-fluid" data-aos="fade-up"  data-aos-duration="3000"/>
            </NavLink>
          </div>
        </div>
        <button className="collection m-auto d-flex justify-content-center mt-3 mb-5 pt-2 pb-2 ps-5 pe-5 viewcollectionbtn">
          View All Collection 
        </button>
      </div>

      {/* images section */}
      <div className="row m-0">
        <div className="col-lg-6 col-md-6 pt-2">
          <NavLink>
            <img src={ReferEarn} className="img-fluid 1875rem"  />
          </NavLink>
        </div>
        <div className="col-lg-6 col-md-6 pt-2">
          <NavLink>
            <img src={Earring} className="img-fluid 1875rem" />
          </NavLink>
        </div>

        <div className="col-lg-6 col-md-6 pt-4">
          <NavLink>
            <img src={Stylish} className="img-fluid 1875rem" />
          </NavLink>
        </div>

        <div className="col-lg-6 col-md-6 pt-4">
          <NavLink>
            <img src={LasthCance} className="img-fluid 1875rem" />
          </NavLink>
        </div>
      </div>

      {/*  Video2 Section*/}
      <div className="row m-0 py-5">
        <iframe
          width="560"
          height="315"
          autoplay
          src="https://www.youtube.com/embed/vfJYH1_TP-0?si=RG3GfMacQca3pkvN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        {/* </NavLink> */}
      </div>

      {/* Content Images section */}
      <div className="row m-0 design_Stores bg-light">
        <div className="col-lg-6 designs">
          <div className="row m-0">
            <div className="col-lg-8 col-md-6">
              <NavLink>
                <img src={Design} className="img-fluid" />
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6 p-0 ps-lg-0 ps-2">
              <h4>Unsure Which Design To Pick?</h4>
              <p>Book A FREE Home Trial!</p>
              <NavLink>Shedule Appointement</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-6 designs mt-lg-0 mt-5">
          <div className="row m-0">
            <div className="col-lg-8 col-md-6">
              <NavLink>
                <img src={Stores} className="img-fluid" />
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="pt-lg-4 pt-2">Come visit us at any of our stores!</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Exchange Program */}
      <div className="row m-0 bg-light">
        <div className="col-lg-6 text-center">
          <NavLink>
            <img src={GOld} className="img-fluid" />
          </NavLink>
        </div>
        <div className="col-lg-6 StylishUpgrade m-auto">
          <h4>A Stylish Upgrade</h4>
          <p className="">
            - Enjoy 0% Deduction on your gold exchange value. Please note: The
            old gold doesn’t have to be from only CaratLane, it can be any gold
            jewellery you have.{" "}
          </p>
          <NavLink className={"nav-link"}>Know More</NavLink>
        </div>
      </div>

      {/* The Trust of Tanishq */}
      <div className="row py-5 m-0">
        <div className="Tanishq_Content m-auto py-5 text-center">
          <img src={Tanishq} className="img-fluid" />
          <p className="text-light mb-5">
            The highest quality of craftsmanship and innovation,
            <br />
            that brings you modern, everyday designs.
          </p>
          <NavLink className={"KnowMore"}>Know More</NavLink>
        </div>
      </div>

      {/* product slider */}
      <div className="py-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        
        pagination={{
          clickable: true,
        }}

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          }} 

        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{marginLeft:"40px",margin:"auto"}}>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL04313-1YP900_11_listfront.jpg" width={250} height={250} />
          <p>₹24,605</p>
          <strik>₹30,756</strik> 
          <p>Eloria Gleaming Diamond Necklace</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/P/JP04893-1YP900_11_listfront.jpg" width={250} height={250} />
          <p>₹5,993</p>
          <p>₹7,491</p>
          <p>Diamond Siddh Ganpati Pendant</p>
        </SwiperSlide>        
        <SwiperSlide>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR04291-YGP900_11_listfront.jpg" width={250} height={250} />
          <p>₹19,120 </p>
          <p>Trio Miracle Plate Diamond Ring</p>
        </SwiperSlide>      
        <SwiperSlide>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE07109-1YP5S0_11_listfront.jpg" width={250} height={250} />
          <p>₹61,055 </p> 
          <p>₹76,319</p>  
          <p>Zila Gemstone Stud Earrings</p>
        </SwiperSlide>    
        <SwiperSlide>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE06195-1YP900_11_listfront.jpg" width={250} height={250} />
          <p>₹10,851 </p>
          <p>₹13,564</p>
          <p>Sleek Twine Diamond Stud Earrings</p>
        </SwiperSlide>   
        <SwiperSlide>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE06189-1RP900_11_listfront.jpg" width={250} height={250} />
          <p>₹10,876 </p>
          <p>₹13,595</p>
          <p>Shiny Daisy Diamond Stud Earrings</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE07070-1YP600_11_listfront.jpg" width={250} height={250} />
          <p>₹86,564 </p>
          <p>₹1,08,206</p>
          <p>Lindsey Diamond Hoop Earrings</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR00355-YG0000_11_listfront.jpg" width={250} height={250} />
          <p>₹19,563 </p>
          <p>Floret Cutout Gold Band</p>
        </SwiperSlide>   
        <SwiperSlide>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE06193-1YP900_11_listfront.jpg" width={220} height={230} />
          <p>₹12,965 </p>
          <p>Leafy Sparkle Diamond Stud Earrings</p>
        </SwiperSlide> 
        <SwiperSlide>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/S/JS00812-1YP900_11_listfront.jpg" width={220} height={230} />
          <p>₹44,234  </p>
          <p>₹55,292</p>
          <p>Parni Diamond Mangalsutra</p>
        </SwiperSlide> 
        <SwiperSlide>
          <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR04654-RGP900_11_listfront.jpg" width={220} height={230} />
          <p>₹25,768  </p>
          <p>26,308</p>
          <p>Sasha Shimmer Diamond Ring</p>
        </SwiperSlide> 
        
        <div class="swiper-button-prev prevbtn"></div>
        <div class="swiper-button-next nextbtn"></div>
    
      </Swiper>
      </div>

      {/* Swiper Slider   */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="text-center py-3">
          <LuInstagram className="fs-2" style={{ color: "#DD57E5" }} />
          <p className="py-2 fs-2 w-75 m-auto" style={{ color: "grey" }}>
            {" "}
            “I received this Mangalsutra bracelet as my first Karva Chauth gift!
            It's simple and sweet, just like my husband. 🥰”
          </p>
          <p>- Akanksha Joshi via Instagram</p>
        </SwiperSlide>
        <SwiperSlide className="text-center py-3">
          <LuInstagram className="fs-2" style={{ color: "#DD57E5" }} />
          <p className="py-2 fs-2 w-75 m-auto" style={{ color: "grey" }}>
            ”I wanted to buy a cute and trendy Nazaria for my newborn that is{" "}
            <br />
            rash-free & has no sharp edges. That's when I came across <br />{" "}
            CaratLane & found the cutest Nazaria for my boy!”
          </p>
          <p className="py-2">- Dipali Nimavat via Instagram</p>
        </SwiperSlide>
        <SwiperSlide className="text-center py-3">
          <LuInstagram className="fs-2" style={{ color: "#DD57E5" }} />
          <p className="py-2 fs-2 w-75 m-auto" style={{ color: "grey" }}>
            ”My brother surprised me with this necklace last Raksha Bandhan.
            <br /> It was just an aww moment for me. 🥰 Engraving my name on it
            is <br /> the best part!”
          </p>
          <p>- Diksha Saxena via Instagram</p>
        </SwiperSlide>
        <NavLink className="mb-5 d-flex justify-content-center nav-link">
          <button className="collection">Read More</button>
        </NavLink>
      </Swiper>

      {/* Shop our instragrm */}
      <div className="row m-0 py-5 caralanestory">
        <div className="row d-flex justify-content-between m-0 p-0">
          <div className="col-6">
            <h4 className="p-0">Shop Our instragrm</h4>
          </div>
          <div className="col-6">
            <h4 className="p-0 text-end">#MyCaratLaneStory </h4>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-4 p-0 storyimg">
            <NavLink className="storyimg">
              <img src={Story1} className="img-fluid h-100 w-100 story"></img>
            </NavLink>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4 p-0 storyimg">
                <NavLink className="storyimg">
                  <img src={StoryImage2} className="img-fluid story"></img>
                </NavLink>
              </div>
              <div className="col-lg-4 p-0 storyimg">
                <NavLink className="storyimg">
                  <img src={StoryImage3} className="img-fluid story"></img>
                </NavLink>
              </div>
              <div className="col-lg-4 p-0 storyimg">
                <NavLink className="storyimg">
                  <img src={StoryImage4} className="img-fluid story"></img>
                </NavLink>
              </div>
              <div className="col-lg-4 p-0 storyimg">
                <NavLink className="storyimg">
                  <img src={StoryImage5} className="img-fluid story"></img>
                </NavLink>
              </div>
              <div className="col-lg-4 p-0 storyimg">
                <NavLink className="storyimg">
                  <img src={StoryImage6} className="img-fluid story"></img>
                </NavLink>
              </div>
              <div className="col-lg-4 p-0 storyimg">
                <NavLink className="storyimg">
                  <img src={StoryImage7} className="img-fluid story"></img>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* join with caratlane */}
      <div className="row m-0 JoinCaratline">
        <div className="col-lg-12 d-flex justify-content-center justify-content-sm-center">
          <div className="d-flex">
            <img src={GiftImage} className="img-fluid" />
            <div>
              <p className="Insider pt-3">Join CaratLane Insider</p>
              <p>To discover enticing deals, latest arrivals, & more</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none m-sm-auto">
          <p>form</p>
        </div>
      </div>

      {/* Know More */}
      <div className="py-2 mt-5 mb-5 bg-dark text-light text-center">
        <p className="m-0">
          <NavLink style={{ color: "palevioletred" }}>Know More</NavLink>
          about CaratLane
        </p>
      </div>
      
      {/* Footer */}
      <Footer />
          
    </div>
  );
};

export default Homepage;
