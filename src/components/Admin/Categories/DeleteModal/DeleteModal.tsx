import React from "react";
import { toast } from "react-toastify";

import CustomToast from "../../../CustomToast/CustomToast";
import { deleteApplication } from "../../../../api/private/applications";
import { deleteCategory } from "../../../../api/private/categories";

type ModalType = {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteId: string;
  value: string;
  getData: () => void;
};

const DeleteModal: React.FC<ModalType> = ({
  setDialogOpen,
  deleteId,
  value,
  getData,
}) => {
  const body = document.querySelector("body");

  const closeModal = () => {
    setDialogOpen(false);
    if (body) body.classList.remove("modal-open");
  };

  const deleteData = async () => {
    setDialogOpen(false);
    if (body) body.classList.remove("modal-open");
    const response = await deleteCategory(deleteId);
    if (!response || response?.status !== 200) {
      toast(<CustomToast message={"Failed to delete Post"} />);
      return;
    }
    toast(<CustomToast type="success" message={"Post Deleted Successfully"} />);
    getData();
  };
  if (body) body.classList.add("modal-open");
  return (
    <>
      <div className="fixed inset-0 blur-lg bg-black bg-opacity-25 z-50" />

      <div className="fixed w-full left-0  bottom-[-17px] sm:inset-0  z-50">
        <div className="flex w min-h-full items-center justify-center text-center">
          <div>
            <div className="w-full sm:w-[568px] max-w-lg transform overflow-y-auto rounded p-[48px] bg-black text-left align-middle shadow-xl transition-all">
              <div className="flex flex-col items-center">
                <h5 className="text-white text-[24px]">Delete Modal</h5>
                <p className="text-heading text-base mt-[48px]">
                  {`Are you sure you want to delete Category "${value}"?`}
                </p>
                <div className="flex mt-[48px]">
                  <button
                    onClick={deleteData}
                    className="flex items-center justify-center w-[208px] h-[52px] text-white rounded bg-gradient-to-r from-primary to-gradientColor mr-4"
                  >
                    Confirm
                  </button>

                  <button
                    onClick={closeModal}
                    className="flex text-white items-center justify-center w-[200px] h-[52px] border border-primary rounded cursor-pointer"
                  >
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
export default DeleteModal;
