import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fourthPage.scss"
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function FourthPage() {
    const { t } = useTranslation();
    const data = t('fourth', { returnObjects: true }) as any;
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                }
            }
        ]
    };
    
    const renderData = data.history.map((val: any) => (
        <div className={"item-history item-" + (val.year)} key={val.id}>
            <p className="title-year">{val.year}</p>

            <div className="item-box">
                {
                    val.childrenYears.map((child: any) => (
                        <div className="item-box-item" key={child.id}>
                            <h2>{child.title}</h2>
                            <p>{child.type}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    ))
    return (
        <div className="fourth-page">
           
            <div className='fourth-container'>
                <h1 className="fourth-title">History</h1>
                <div className="list-history">
                    <Slider {...settings}>
                        {renderData}
                    </Slider>
                </div>
            </div>
        </div>

    );
}

export default FourthPage;
