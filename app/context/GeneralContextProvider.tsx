'use client'

import React, { useState } from "react";
import { CustomContext, type Modal, type Popup } from "./GeneralContext";

export const GeneralContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState<Modal | null>(null);
  const [popup, setPopup] = useState<Popup | null>(null);
  const value = {
    modal,
    setModal,
    popup,
    setPopup,
  };

  return (
    <CustomContext.Provider value={value}>
      {children}
    </CustomContext.Provider>
  );
};