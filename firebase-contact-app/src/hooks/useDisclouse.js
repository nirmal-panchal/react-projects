import React, { useState } from "react";

const useDisclouse = () => {
  const [openAM, setOpenAM] = useState(false);

  const handleOpenAM = () => {
    setOpenAM(true);
  };
  const handleCloseAM = () => {
    setOpenAM(false);
  };
  return { handleCloseAM, openAM, handleOpenAM };
};

export default useDisclouse;
