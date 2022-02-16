import React, { useEffect, useState } from "react";
import List from "./List";
import MenuTab from "./MenuTab";
import "./style.scss";
import Popup from "./Popup";
import Footer from "./Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const menus = [
  "ALL",
  "SHOWREEL",
  "COMMERCIAL",
  "MOTION",
  "OPENING TITLE",
  "MV",
  "ARTWORK",
  "DESIGN",
];
const Works = () => {
  const { t } = useTranslation();
    const data = t("works", { returnObjects: true }) as any;
  const [menuType, setMenuType] = useState(menus[0]);
  const [filterData, setFilterData] = useState(data);
  const [openPopup, setOpenPopup] = useState(false);
  const [idItem, setIdItem] = useState();
  const [item, setItem] = useState(data[0]);

  useEffect(() => {
    const card = document.querySelectorAll(".card-pd");
    gsap.set(card, {
      opacity: 0,
      scale: 0.6,
    });

    ScrollTrigger.batch(card, {
      onEnter: batch => {

        card.forEach((card, index) => {

          gsap.to(card, { opacity: 1, scale: 1, stagger: 0.4, delay: index * 0.2 });
        });
      }

    });
  }, []);


  useEffect(() => {
    (() => {
      if (menuType === menus[0]) {
        setFilterData(data);
      } else {
        const newData = data.filter((val: any) => val.desc === menuType);
        setFilterData(newData);
      }
    })();

    (() => {
      if (idItem) {
        const newItem = data.filter((val: any) => val.id === idItem);
        setItem(newItem[0]);
      }
    })();
  }, [menuType, idItem, data]);

  return (
    <>
      <div className="wrapper_page padding">
        <div className="works_">
          <div className="logo-title">
            <div className="title">
              <p className="bold">WORKS</p>
            </div>
          </div>

          <div className="card-all-wrapper">
            <MenuTab
              menus={menus}
              setMenuType={setMenuType}
              menuType={menuType}
            />
            <List
              data={filterData}
              setIdItem={setIdItem}
              setOpenPopup={setOpenPopup}
            />
          </div>
          <Footer />
        </div>
      </div>
      {openPopup && <Popup data={item} setOpenPopup={setOpenPopup} />}
    </>
  );
};

export default Works;
