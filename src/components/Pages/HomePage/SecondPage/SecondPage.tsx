import React from 'react';
import './secondPage.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgSlide1 from '../../../../Assets/Images/slide/console-img-1.png';
import ImgSlide2 from '../../../../Assets/Images/slide/console-img-2.png';
import ImgSlide3 from '../../../../Assets/Images/slide/console-img-3.png';
import ImgSlide4 from '../../../../Assets/Images/slide/console-img-4.png';
import ImgSlide5 from '../../../../Assets/Images/slide/console-img-5.png';
import ImgSlide6 from '../../../../Assets/Images/slide/console-img-6.png';
function SecondPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return (
        <div className="second-container">

            <div className="second-page-container">
                <div className='bg-second-page'>
                    Creative,<br/> Fun and- <br/>Enjoyable<br/> work <br/>Impressive
                </div>
            </div>
            <div className="second-page-content">
                <div className='slider-second-page'>
                    <Slider {...settings}>
                        <div>
                            <img className='img-slider' src={ImgSlide1} alt="" />
                        </div>
                        <div>
                            <img className='img-slider' src={ImgSlide2} alt="" />
                        </div>
                        <div>
                            <img className='img-slider' src={ImgSlide3} alt="" />
                        </div>
                        <div>
                            <img className='img-slider' src={ImgSlide4} alt="" />
                        </div>
                        <div>
                            <img className='img-slider' src={ImgSlide5} alt="" />
                        </div>
                        <div>
                            <img className='img-slider' src={ImgSlide6} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SecondPage;