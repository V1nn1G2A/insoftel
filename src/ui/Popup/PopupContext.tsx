"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type PopupContextType = {
  isPopupOpen: boolean;
  popupContent: ReactNode | null;
  openPopup: (content: ReactNode) => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

  const openPopup = (content: ReactNode) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null); // Очищаем контент при закрытии
  };

  return (
    <PopupContext.Provider value={{ isPopupOpen, popupContent, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};