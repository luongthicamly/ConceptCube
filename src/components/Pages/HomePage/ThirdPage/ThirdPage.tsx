import "./thirdPage.scss";
import { useTranslation } from "react-i18next";
import i18n from '../../../../i18next/i18next';
import { useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgOn1 from '../../../../Assets/Images/slidePageFour/on-game-dev-img.png';
import ImgOn2 from '../../../../Assets/Images/slidePageFour/on-ui-design-img.png';
import ImgOn3 from '../../../../Assets/Images/slidePageFour/on-si-img.png';
import ImgOn4 from '../../../../Assets/Images/slidePageFour/on-game-mar-img.png';
import ImgOff1 from '../../../../Assets/Images/slidePageFour/off-game-dev-img.png';
import ImgOff2 from '../../../../Assets/Images/slidePageFour/off-ui-design-img.png';
import ImgOff3 from '../../../../Assets/Images/slidePageFour/off-si-img.png';
import ImgOff4 from '../../../../Assets/Images/slidePageFour/off-game-mar-img.png';

function PageThree() {
    const { t } = useTranslation();
    const data = t('thirdPage', { returnObjects: true }) as any;
    const [image1, setImage1] = useState(ImgOff1);
    const [image2, setImage2] = useState(ImgOff2);
    const [image3, setImage3] = useState(ImgOff3);
    const [image4, setImage4] = useState(ImgOff4);
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                }
            }
        ]
    };
    return (
        <div className="page-three">
            <div className="page-three-container">
                <div className="page-three-content">
            
                    <Slider {...settings}>
                    <div className="item-service">
                        <a onMouseEnter={() => setImage1(ImgOn1)} onMouseLeave={() => setImage1(ImgOff1)}>
                            <div className="title-item-service">
                                Game<br/>Development
                            </div>
                            <div className="item-service-img">
                                <img src={image1}  alt=''/>
                            </div>
                            <div className="item-service-content">
                                <p className={"title-service"+(image1 === ImgOn1 ? '' : ' d-none')}>Game Development</p>
                                <p className={`content-service ${i18n.language === 'en' ? 'd-none' : ''}`}>
                                    {data.gammeDevelopment.text1}<br/>
                                    {data.gammeDevelopment.text2}<br/>
                                    {data.gammeDevelopment.text3}<br/>
                                    {data.gammeDevelopment.text4}<br/>
                                    {data.gammeDevelopment.text5}<br/>
                                    {data.gammeDevelopment.text6}
                                </p>
                                <p className={`content-service content-en ${i18n.language === 'ko' ? 'd-none' : ''}`}>
                                    {data.gammeDevelopment.text}
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="item-service">
                        <a onMouseEnter={() => setImage2(ImgOn2)} onMouseLeave={() => setImage2(ImgOff2)}>
                            <div className="title-item-service">
                                UI<br/>Design
                            </div>
                            <div className="item-service-img">
                                <img src={image2}  alt=''/>
                            </div>
                            <div className="item-service-content">
                                <p className={"title-service"+(image2 === ImgOn2 ? '' : ' d-none')}>UI design</p>
                                <p className={`content-service ${i18n.language === 'en' ? 'd-none' : ''}`}>
                                    {data.uiDesign.text1}<br/>
                                    {data.uiDesign.text2}<br/>
                                    {data.uiDesign.text3}<br/>
                                    {data.uiDesign.text4}<br/>
                                    {data.uiDesign.text5}<br/>
                                    {data.uiDesign.text6}
                                </p>
                                <p className={`content-service content-en ${i18n.language === 'ko' ? 'd-none' : ''}`}>
                                    {data.uiDesign.text}
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="item-service">
                        <a onMouseEnter={() => setImage3(ImgOn3)} onMouseLeave={() => setImage3(ImgOff3)}>
                            <div className="title-item-service">
                                SI
                            </div>
                            <div className="item-service-img">
                                <img src={image3}  alt=''/>
                            </div>
                            <div className="item-service-content">
                                <p className={"title-service"+(image3 === ImgOn3 ? '' : ' d-none')}>SI</p>
                                <p className={`content-service ${i18n.language === 'en' ? 'd-none' : ''}`}>
                                    {data.si.text1}<br/>
                                    {data.si.text2}<br/>
                                    {data.si.text3}<br/>
                                    {data.si.text4}<br/>
                                    {data.si.text5}<br/>
                                    {data.si.text6}
                                </p>
                                <p className={`content-service content-en ${i18n.language === 'ko' ? 'd-none' : ''}`}>
                                    {data.si.text}
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="item-service">
                        <a onMouseEnter={() => setImage4(ImgOn4)} onMouseLeave={() => setImage4(ImgOff4)}>
                            <div className="title-item-service">
                                Game<br/>Marketing
                            </div>
                            <div className="item-service-img">
                                <img src={image4}  alt=''/>
                            </div>
                            <div className="item-service-content">
                                <p className={"title-service"+(image4 === ImgOn4 ? '' : ' d-none')}>Game Marketing</p>
                                <p className={`content-service ${i18n.language === 'en' ? 'd-none' : ''}`}>
                                    {data.gameMarketing.text1}<br/>
                                    {data.gameMarketing.text2}<br/>
                                    {data.gameMarketing.text3}<br/>
                                    {data.gameMarketing.text4}<br/>
                                    {data.gameMarketing.text5}<br/>
                                    {data.gameMarketing.text6}
                                </p>
                                <p className={`content-service content-en ${i18n.language === 'ko' ? 'd-none' : ''}`}>
                                    {data.gameMarketing.text}
                                </p>
                            </div>
                        </a>
                    </div>
                    </Slider>
                   
                </div>
            </div>
        </div>
    );
}
export default PageThree;