'use client'

import { createContext, useContext } from "react";

export interface Modal {
  isOpen: boolean;
  isFullScreen?: boolean;
  children: React.ReactNode;
  hasCloseBtn?: boolean
  onClose?: () => void;
}

export interface Popup {
  message: string
  status: 'success' | 'error'
}

interface CustomContextType {
  modal: Modal | null;
  setModal: (arg: Modal | null) => void;
  popup: Popup | null;
  setPopup: (arg: Popup | null) => void;
}

export const CustomContext = createContext<CustomContextType>({
  modal: null,
  setModal: () => { },
  popup: null,
  setPopup: () => { },
});

export const useGeneralContext = () => useContext(CustomContext);