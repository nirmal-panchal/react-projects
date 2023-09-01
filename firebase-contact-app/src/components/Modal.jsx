import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ closeAM, openAM, children }) => {
  return (
    openAM && (
      <div className="grid place-items-center backdrop-blur-sm h-screen z-40 w-screen absolute top-0">
        <div className="m-auto relative z-50 min-h-[200px] rounded-lg shadow-md min-w-[80%] bg-white p-4">
          <div className="flex justify-end">
            <AiOutlineClose
              onClick={closeAM}
              className="text-xl cursor-pointer"
            />
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
