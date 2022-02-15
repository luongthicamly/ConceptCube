import React, { useEffect, useRef, useState } from 'react';
import './firstPage.scss';
import BG from '../../../../Assets/Images/bg-first-page.jpg';
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18next/i18next";
import { useLocation } from 'react-router-dom';

interface TranslateProps {
    subTitle: string;
    note: string
}

function FirstPage() {
    const { t } = useTranslation();
    const dataList = t("first", { returnObjects: true }) as TranslateProps;
    const location = useLocation();

    return (
        <div className='first-page'>
            <div className="first-container">
                <div className='inner-content'>
                    <div className='background-container'>
                        <img className='bg' src={BG} alt="" />
                    </div>
                    <div className='about-text'><span>About The Project</span></div>
                    <div className='content-container'>
                        <h1 className='title-page-one'>everything<br/>is in the<br/>conceptcube</h1>
                        <p className='company'>ConceptCube Company Introduction</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FirstPage;