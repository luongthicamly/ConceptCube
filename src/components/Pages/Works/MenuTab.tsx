import React, { useEffect, useState } from "react";
import DropDown from "../../Dropdown";

interface MenuTabProps {
  menus: any[];
  menuType?: any;
  setMenuType?: any;
}

const MenuTab: React.FC<MenuTabProps> = ({ menus, menuType, setMenuType }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  const handleTab = (tab: string) => {
    setMenuType(tab);
  };

  useEffect(() => {
    changeAspectMobile(window);
    window.addEventListener("resize", changeAspect);
  }, []);

  const changeAspect = (window: any) => {
    if (window.currentTarget.innerWidth >= 1024) {
      setIsDesktop(true);
    } else if (window.currentTarget.innerWidth < 1024) {
      setIsDesktop(false);
    }
  };

  const changeAspectMobile = (window: any) => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else if (window.innerWidth < 1024) {
      setIsDesktop(false);
    }
  };

  const UpdateDimensions = (window: any) => {
    if (window === undefined) {
      return <div />;
    }

    if (isDesktop) {
      return (
        <div className="menu-tab">
          <ul>
            {menus.map((val, key) => (
              <li
                onClick={() => handleTab(val)}
                key={key}
                className={menuType === val ? "select" : "no-select"}
              >
                {val}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="menu-tab">
          <DropDown options={menus} val={menuType} onChange={setMenuType} />
        </div>
      );
    }
  };
  return (
    <>
      <UpdateDimensions />
    </>
  );
};

export default MenuTab;
