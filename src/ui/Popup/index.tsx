"use client";

import { usePopupDispatch } from "./PopupContext";
import { usePopupState } from './PopupContext'
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.scss";

export const Popup = () => {
  const { closePopup } = usePopupDispatch();
  const { isPopupOpen, popupContent } = usePopupState();
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