import React, { useContext } from "react";
import ImgDsDark from "assets/images/ds-dark.svg";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import * as C from "./styler";

interface Props {
  toggleTheme(): void;
}
export const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <C.Conatiner className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        <nav className="my-2 my-md-0 mr-md-3">
          <img src={ImgDsDark} alt="DevSuperior" width="120" />
        </nav>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.titleColor}
          onColor={colors.titleColor}
        />
      </div>
    </C.Conatiner>
  );
};
