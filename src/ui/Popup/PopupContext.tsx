"use client";

import { createContext, useState, useContext, ReactNode, useCallback, useMemo } from "react";

type PopupStateContextType = {
  isPopupOpen: boolean;
  popupContent: ReactNode | null;
};

type PopupDispatchContextType = {
  openPopup: (content: ReactNode) => void;
  closePopup: () => void;
};

const PopupStateContext = createContext<PopupStateContextType | undefined>(undefined);
const PopupDispatchContext = createContext<PopupDispatchContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

  const openPopup = useCallback((content: ReactNode) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
    setPopupContent(null);
  }, []);

  const stateValue = useMemo(() => ({ isPopupOpen, popupContent }), [isPopupOpen, popupContent]);
  const dispatchValue = useMemo(() => ({ openPopup, closePopup }), [openPopup, closePopup]);

  return (
    <PopupStateContext.Provider value={stateValue}>
      <PopupDispatchContext.Provider value={dispatchValue}>
        {children}
      </PopupDispatchContext.Provider>
    </PopupStateContext.Provider>
  );
};

export const usePopupDispatch = () => {
  const context = useContext(PopupDispatchContext);
  if (!context) {
    throw new Error('usePopupDispatch must be used within a PopupProvider');
  }
  return context;
};

export const usePopupState = () => {
  const context = useContext(PopupStateContext);
  if (!context) {
    throw new Error('usePopupState must be used within a PopupProvider');
  }
  return context;
};