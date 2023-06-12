import React from "react";
import { toast } from "react-toastify";
import Select from "react-select";

import CustomToast from "../../../CustomToast/CustomToast";
import { createCategory } from "../../../../api/private/categories";
import { useFormik } from "formik";
import { initialValues } from "../../../../helpers/intialValues";
import { validationSchema } from "../../../../helpers/validationSchema";
import slugify from "slugify";
import { customStyles } from "../../../../assets/styles/SelectStyles";

type ModalType = {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getData: () => void;
};

const AddModal: React.FC<ModalType> = ({ setDialogOpen, getData }) => {
  const body = document.querySelector("body");
  const closeModal = () => {
    setDialogOpen(false);
    if (body) body.classList.remove("modal-open");
  };
  const formik = useFormik({
    initialValues: initialValues[2],
    validationSchema: validationSchema[2],
    onSubmit: (values) => handleAddData(values),
  });
  const handleAddData = async (values: object) => {
    if (body) body.classList.remove("modal-open");
    const response = await createCategory(values);
    if (!response || response?.status !== 200) {
      toast(<CustomToast message={"Category Not Stored Successfully"} />);
      return;
    }
    getData();
    toast(
      <CustomToast type="success" message={"Category Stored Successfully"} />
    );
    setDialogOpen(false);
  };

  if (body) body.classList.add("modal-open");

  const handleOnNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let value = e.target.value;

    let slugifiedValue = slugify(value, { lower: true });

    formik.setFieldValue("slug", slugifiedValue);

    formik.handleBlur(e);
  };

  const handleOnSlugBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let value = e.target.value;

    let slugifiedValue = slugify(value, { lower: true });

    formik.setFieldValue("slug", slugifiedValue);

    formik.handleBlur(e);
  };

  return (
    <>
      <div className="fixed inset-0 blur-lg bg-black bg-opacity-25 z-50" />

      <div className="fixed w-full left-0  bottom-[-17px] sm:inset-0  z-50">
        <div className="flex min-h-full items-center justify-center text-center">
          <div>
            <div className="w-full sm:w-[568px] max-w-lg transform overflow-y-auto rounded p-[48px] bg-black text-left align-middle shadow-xl transition-all">
              <div className="flex flex-col  text-white">
                <h5 className="text-white text-[24px] text-center ">
                  Add Category Modal
                </h5>
                <div className="flex flex-col w-full mb-8 lg:mb-0  mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={(e) => handleOnNameBlur(e)}
                    placeholder="Name"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryDarker outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red text-xs flex mt-1">
                      {formik.errors.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-full mb-8 lg:mb-0  mr-4 mt-2">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Slug
                  </label>
                  <input
                    type="text"
                    name="slug"
                    onChange={formik.handleChange}
                    value={formik.values?.slug || ""}
                    onBlur={(e) => handleOnSlugBlur(e)}
                    placeholder="Slug"
                    className="w-full h-[36px] rounded text-bodyText bg-primaryDarker outline-none pl-4 py-2 pr-2 mt-2 text-base"
                  />
                  {formik.touched.slug && formik.errors.slug && (
                    <p className="text-red text-xs flex mt-1 font-semibold">
                      {formik.errors.slug}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-8 lg:mb-0 mt-2  mr-4">
                  <label className="font-semibold text-sm text-white ml-[1px]">
                    Lang Code
                  </label>
                  <Select
                    defaultValue={{ value: "en", label: "English" }}
                    onChange={(v) => {
                      formik.setFieldValue("langCode", v?.value);
                    }}
                    styles={customStyles}
                    options={[
                      { value: "en", label: "English" },
                      { value: "ar", label: "Arabic" },
                      { value: "es", label: "Spanish" },
                      { value: "fr", label: "French" },
                    ]}
                    className="w-full  rounded py-2 text-base"
                  />
                </div>
                <div className="flex mt-[48px]">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      formik.handleSubmit();
                    }}
                    className="flex items-center justify-center w-[208px] h-[52px] text-white rounded bg-gradient-to-r from-primary to-gradientColor mr-4"
                  >
                    Add
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
export default AddModal;
