import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import CustomToast from "../../../CustomToast/CustomToast";
import { getSpecificCategory } from "../../../../api/private/categories";
import Loader from "../../../Loader/Loader";

type ModalType = {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const DetailsModal: React.FC<ModalType> = ({ setDialogOpen, id }) => {
  const body = document.querySelector("body");
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    setDialogOpen(false);
    if (body) body.classList.remove("modal-open");
  };

  const detailsData = async () => {
    if (body) body.classList.remove("modal-open");
    setLoading(true);
    const response = await getSpecificCategory(id);
    if (!response || response?.status !== 200) {
      toast(<CustomToast message={"Category Not Found"} />);
      return;
    }
    setData(response.data.categoryData);
    setLoading(false);
  };
  useEffect(() => {
    detailsData();
  }, [id]);

  if (body) body.classList.add("modal-open");
  return (
    <>
      <div className="fixed inset-0 blur-lg bg-black bg-opacity-25 z-50" />

      <div className="fixed w-full left-0  bottom-[-17px] sm:inset-0  z-50">
        <div className="flex w min-h-full items-center justify-center text-center">
          <div>
            <div className="w-full sm:w-[568px] max-w-lg transform overflow-y-auto rounded p-[48px] bg-black text-left align-middle shadow-xl transition-all">
              {loading ? (
                <Loader />
              ) : (
                <div className="flex flex-col  text-white">
                  <h5 className="text-white text-[24px] text-center ">
                    Details Modal
                  </h5>
                  <span className="mt-10 mb-2 font-light text-sm">
                    <span className="font-normal text-base">Id : </span>{" "}
                    {data._id}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Name : </span>{" "}
                    {data.name}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Slug : </span>{" "}
                    {data.slug}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">
                      Language Code :{" "}
                    </span>{" "}
                    {data.langCode ? data.langCode : "not available"}
                  </span>
                  <div className="flex justify-center mt-[40px]">
                    <button
                      onClick={closeModal}
                      className="flex text-white items-center justify-center w-[200px] h-[52px] border border-primary rounded cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailsModal;
