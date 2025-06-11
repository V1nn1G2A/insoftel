"use client";

import { usePopup } from "./PopupContext";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.scss";

export const Popup = () => {
  const { isPopupOpen, popupContent, closePopup } = usePopup();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isPopupOpen) return null;

  return createPortal(
    <div className={styles.popup} onClick={closePopup}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {popupContent || "Пустой попап"}
      </div>
    </div>,
    document.getElementById("portal-root")!
  );
};