"use client";
import styles from "./menu.module.css";
import MenuIcon from "../../../../../public/icons/menu.svg";
import { useState } from "react";
import { ButtonIcon } from "@/app/components/buttons/buttonIcon/buttonIcon";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.menu}>
      <ButtonIcon label="Menu" onClick={() => setShowMenu((prev) => !prev)}>
        <MenuIcon />
      </ButtonIcon>

      {showMenu && (
        <div className={styles.wrapper}>
          menu
        </div>
      )}
    </div>
  );
};