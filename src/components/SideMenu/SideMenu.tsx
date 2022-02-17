import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import i18n from '../../i18next/i18next';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/HomePage/Home';
import logo from '../../Assets/Images/logo-icon.png'
import './SideMenu.scss';
import Works from '../Pages/Works';
import Team from '../Pages/Team/Team';

const SideMenu = () => {
    const [selected, setSelected] = useState<'ko' | 'en'>('ko');
    const [colorMenu, setColorMenu] = useState<string>('#fff');
    const location = useLocation();
    const navigate = useNavigate();

    const { t } = useTranslation();

    const [closeSideMenu, setCloseSideMenu] = useState<boolean>();

    const handleChangeLanguage = (lang: 'ko' | 'en') => {
        if (lang === 'ko') {
            i18n.changeLanguage('ko');
            setSelected(lang);
        } else {
            i18n.changeLanguage(lang);
            setSelected(lang);
        }
    };
    const handleClickHome = () => {
        setCloseSideMenu(false);
    };

    useEffect(() => {
        if (location.hash === '#fourthPage' || location.pathname === '/works' || location.pathname === '/contact') {
            const el: any = document.querySelectorAll('#fp-nav ul li a');
            el?.forEach((e) => e?.classList.add('active-color-dot'));
            setColorMenu('#1b0080');
        } else {
            const el: any = document.querySelectorAll('#fp-nav ul li a');
            el?.forEach((e) => e?.classList.remove('active-color-dot'));
            setColorMenu('#fff');
        }
    }, [location.hash, location.pathname]);
    useLayoutEffect(() => {
        handleChangeLanguage(selected);
    }, []);
    console.log(location.hash)
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="works" element={<Works />} />
                <Route path="teams" element={<Team />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            <div className={`logo ${location.hash === '#firstPage' || location.hash === '' ? '' :'d-none'}`} >
                <a
                    href="#firstPage"
                    onClick={(e) => {
                        if (location.pathname === '/') {
                        } else {
                            e.preventDefault();
                            navigate('/');
                        }
                    }}
                >
                    <img className='back' src={logo} alt="" />
                </a>
            </div>
            <div className="side-menu-container">
                
                <nav role="navigation">
                    <div id="side-menu-toggle">
                        <input type="checkbox" checked={closeSideMenu} onClick={() => setCloseSideMenu((prev) => !prev)} />
                        <div className="side-menu-container-change-lang-wrapper">
                            <div
                                style={{ color: colorMenu }}
                                className={`change-lang en ${selected === 'en' ? 'select' : ''} ${location.hash === '#fourthPage'  ? 'color-four' : ''}`}
                                onClick={() => handleChangeLanguage('en')}
                            >
                                EN
                            </div>
                            <div
                                style={{ color: colorMenu }}
                                className={`change-lang ko ${selected === 'ko' ? 'select' : ''} ${location.hash === '#fourthPage'  ? 'color-four' : ''}`}
                                onClick={() => handleChangeLanguage('ko')}
                            >
                                KR
                            </div>
                        </div>

                        <span style={{ backgroundColor: colorMenu }}></span>
                        <span style={{ backgroundColor: colorMenu }}></span>
                        <span style={{ backgroundColor: colorMenu }}></span>
                        <ul id="menu">
                            <div className="side-menu-container-change-lang-menu">
                                <div
                                    className={`side-menu-container-change-lang-menu-item ko ${selected === 'en' ? 'select' : ''}`}
                                    onClick={() => handleChangeLanguage('en')}
                                >
                                    EN
                                </div>
                                <div
                                    className={`side-menu-container-change-lang-menu-item ko ${selected === 'ko' ? 'select' : ''}`}
                                    onClick={() => handleChangeLanguage('ko')}
                                >
                                    KR
                                </div>
                            </div>
                            <div className="title-list">
                                <ul>
                                    <li>
                                        <NavLink className="list" to="/" onClick={() => handleClickHome()}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="list" to="/works" onClick={() => handleClickHome()}>
                                            Works
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="list" to="/teams" onClick={() => handleClickHome()}>
                                            Teams
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="list" to="/contact" onClick={() => handleClickHome()}>
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="info-wrapper">
                                <p id="address" className={selected === 'ko' ? 'ko-font' : ''}>
                                    {t('address')}
                                    <br />
                                    Tel 02. 851. 2662/ Fax 02. 851. 2662
                                </p>
                                <p className="link">
                                    <a
                                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr"
                                        target="blank"
                                    >
                                        View Map
                                    </a>
                                </p>
                                <br />
                                <p>Company.</p>
                                <p className="link">
                                    <a href="mailto:support@taejin.co.kr" title="">
                                        support@taejin.co.kr
                                    </a>
                                </p>
                                <br />
                                <p>Technical support</p>
                                <p className="link">
                                    <a href="mailto:support@taejin.co.kr" title="">
                                        support@taejin.co.kr
                                    </a>
                                </p>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SideMenu;