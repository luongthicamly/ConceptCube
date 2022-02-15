import "./thirdPage.scss";
import { useTranslation } from "react-i18next";
import i18n from '../../../../i18next/i18next';
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
    const dataList = t('thirdPage', { returnObjects: true }) as any;
    return (
        <div className="page-three">
            <div className="page-three-container">
                <div className="page-three-content">
                    <div className="item-service">
                        <div className="title-item-service">
                            Game<br/>Development
                        </div>
                        <div className="item-service-img">
                            <img src={ImgOff1} alt=''/>
                        </div>
                        <div className="item-service-content">
                            <p className="title-service">Game Development</p>
                            <p className="content-service">
                                VFX, 소셜광고 디자인, 아트웍, 게임 개발 등<br/>
                                이미지와 디자인 제작에 필요한 모든 것 그리고<br/>
                                고객이 필요로 하는 기술과 결과물을 제공합니다.<br/>
                                또한 모션그래픽 및 자막, 종적 타이포그래피,<br/>
                                애니메이션 등 촬영 이미지와 CG를<br/>
                                합성하여 완성도 있는 결과물을 도출합니다.
                            </p>
                        </div>
                    </div>
                    <div className="item-service">
                        <div className="item-content">
                            <p className="title title_second">Technology</p>
                            <p className="desc">{dataList.technology.text}</p>
                        </div>
                    </div>
                    <div className="item-service">
                        <div className="item-content">
                            <p className="title title_third">Application</p>
                            <p className="desc">{dataList.application.text}</p>
                        </div>
                    </div>
                    <div className="item-service">
                        <div className="item-content">
                            <p className="title title_fourth noteBC">Block Chain</p>
                            <p className="desc">{dataList.blockchain.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageThree;