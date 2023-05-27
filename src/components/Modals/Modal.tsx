import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useOutsideClick } from "../../hooks/outsideClick/useOutsideClick";
import siteSettings from "../../settings/siteSettings";

type ModalType = {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalType> = ({ setDialogOpen }) => {
  const { t } = useTranslation();

  const body = document.querySelector("body");

  const closeModal = () => {
    setDialogOpen(false);
    if (body) body.classList.remove("modal-open");
  };
  const modalRef = useRef(null);
  useOutsideClick(modalRef, closeModal);

  const handleDialog = () => {
    closeModal();
  };

  if (body) body.classList.add("modal-open");
  return (
    <>
      <div className="fixed inset-0 blur-lg bg-black bg-opacity-25 z-50" />

      <div className="fixed w-full left-0  bottom-[-17px] sm:inset-0  z-50">
        <div className="flex w min-h-full items-center justify-center text-center">
          <div ref={modalRef}>
            <div className="w-full sm:w-[568px] max-w-lg transform overflow-y-auto rounded p-[48px] bg-black text-left align-middle shadow-xl transition-all">
              <div className="flex flex-col items-center">
                <h5 className="text-white text-[24px]">Modal Title</h5>
                <span className="text-lightWhite text-base">Modal Title</span>
                <p className="text-heading text-base mt-[48px]">
                  Body text for the modal
                </p>
                <div className="flex mt-[48px]">
                  <button className="flex items-center justify-center w-[208px] h-[52px] text-white rounded bg-gradient-to-r from-primary to-gradientColor mr-4">
                    Confirm
                  </button>

                  <button className="flex text-white items-center justify-center w-[200px] h-[52px] border border-primary rounded cursor-pointer">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
