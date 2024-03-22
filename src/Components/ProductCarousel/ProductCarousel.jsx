import React from 'react'
import "./ProductCarousel.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryBanner from "../CategoryBanner/CategoryBanner";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";



const Next = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <MdArrowForwardIos
          style={{ color: "black", fontSize: 25, fontWeight: 900 }}
        />
      </div>
    );
  };
  const Prev = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        
        <MdOutlineArrowBackIosNew
          style={{ color: "black", fontSize: 25, fontWeight: 900 }}
        />
      </div>
    );
  };


const ProductCarousel = ({bgImg,Title,Data}) => {

    const Settings = {
        dots: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        infinite:false,
      };

  return (
 
  <div className='CategoryCarousel'>
    
    <div className='CategoryCarousel-left' style={{background:`url(${bgImg}) no-repeat 0px bottom`}}>
    <p className='CategoryCarousel-title'>{Title}</p>
    <button className='CategoryCarousel-btn'>View All</button>
    </div>


    <div className="CategoryCarousel-right">

    <Slider nextArrow={<Next />} prevArrow={<Prev />} {...Settings}>
        {
        Data.map((item, index) => (
            <Link key={index} to={"/products"}>
              <CategoryBanner
                ImgSrc={item.ImgSrc}
                Title={item.CategoryName}
                Brand={item.Brand}
              />
            </Link>
          ))
          }
        </Slider>
{/*         
        <Slider nextArrow={<Next />} prevArrow={<Prev />} {...Settings}>
          {Data.map((item, index) => (
            <Link key={index} to={"/products"}>
              <CategoryBanner
                ImgSrc={item.ImgSrc}
                Title={item.CategoryName}
                Brand={item.Brand}
              />
            </Link>
          ))}
        </Slider> */}
        </div>
  </div>
  
  )
}

export default ProductCarousel
