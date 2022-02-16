import React from 'react';
import './fifthPage.scss';
import background from '../../../../Assets/Images/05-bg.png';
import { RightOutlined } from '@ant-design/icons'

function FifthPage() {
    return (
        <div className='fifth-container'>
            <img src={background} alt='' className='bg-page'/>
            <div className="fifth-wrapper">
                <div className="block-item">
                    <h3 className="fifth-name">Partnership.</h3>
                    <div className="email">
                        <a href="mailto:looc.tzlee@gmail.com">
                            <p className="fifth-contact">looc.tzlee@gmail.com</p>
                            <div className="mail-icon">
                                <p>✉</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="block-item">
                    <h3 className="fifth-name">Recruiting.</h3>
                    <div className="email">
                        <a href="mailto:looc.tzlee@gmail.com">
                            <p className="fifth-contact">looc.tzlee@gmail.com</p>
                            <div className="mail-icon">
                                <p>✉</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="block-item">
                    <h3 className="fifth-name">Learn more.</h3>
                    <a href="#">
                        <p className="fifth-contact">Learn more about us <RightOutlined /></p>
                    </a>
                </div>
            </div>
            <div className='fifth-title'>
                Let's<br/>
                Make the world<br/>
                Together.<br/>
            </div>
        </div>
    );
}

export default FifthPage;
