"use client";
import styles from "./favourite.module.css";
import FavouriteIcon from "../../../../../public/icons/heart.svg";
import { useState } from "react";

import { ButtonIcon } from "@/app/components/buttons/buttonIcon/buttonIcon";

export const Favourite = () => {
  const [showFav, setShowFav] = useState(false);

  return (
    <div>
      <ButtonIcon label="Menu" onClick={() => setShowFav((prev) => !prev)}>
        <FavouriteIcon />
      </ButtonIcon>

      {showFav && (
        <div className={styles.wrapper}>
          Favourite
        </div>
      )}
    </div>
  );
};