"use client";
import styles from "./cart.module.css";
import CartIcon from "../../../../../public/icons/circle.svg";
import { useState } from "react";
import { ButtonIcon } from "@/app/components/buttons/buttonIcon/buttonIcon";

export const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <ButtonIcon label="Menu" onClick={() => setShowCart((prev) => !prev)}>
        <CartIcon />
      </ButtonIcon>

      {showCart && (
        <div className={styles.wrapper}>
          Cart
        </div>
      )}
    </div>
  );
};