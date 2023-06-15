import React, { Fragment, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../../../settings/ROUTES";
import DeleteModal from "../DeleteModal/DeleteModal";
import StatusTag from "../StatusTag/StatusTag";

interface TestimonialType {
  _id: string;
  name: string;
  profileImage: string;
  profession: string;
  published: boolean;
  title: string;
  coverImage: string;
  serviceProvidedAt: Date;
}
interface TableType {
  testimonialData: TestimonialType[];
  getTestimonialData: () => {};
}
const Table: React.FC<TableType> = ({
  testimonialData,
  getTestimonialData,
}) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState("");
  const [name, setName] = useState("");

  const handleDeleteModal = (id: string, name: string) => {
    setModalOpen(true);
    setDeleteId(id);
    setName(name);
  };
  const moveToDetails = (id: string) => {
    navigate(
      ROUTES.ADMIN_HOME + ROUTES.ADMIN_TESTIMONIALS_DETAILS_LINK + "/" + id
    );
  };
  return (
    <>
      <table className="xl:w-full w-[95%] min-w-[1200px]  border-separate border-spacing-x-0 border-spacing-y-[10px]">
        <thead className="text-white text-sm bg-primaryLight h-[50px] rounded">
          <tr>
            <td className="pl-4 w-[300px]">Id</td>
            <td className="w-[250px]">Name</td>
            <td className="w-[250px]">Profession</td>
            <td className="text-center w-[100px]">Published</td>
            <td className="text-center w-[100px]">Actions</td>
          </tr>
        </thead>
        <tbody>
          {testimonialData.map((v, idx) => (
            <tr key={idx} className="text-white">
              <td
                onClick={() => moveToDetails(v._id)}
                className="pb-[9px] cursor-pointer"
              >
                {v._id}
              </td>
              <td
                className="flex w-[300px] cursor-pointer"
                onClick={() => moveToDetails(v._id)}
              >
                <img
                  src={v.profileImage}
                  alt={v.name}
                  className="w-[30px] h-[25px]"
                />{" "}
                <span className="ml-4">{v.name}</span>
              </td>
              <td>{v.profession}</td>

              <td className="flex justify-center items-center">
                {v.published ? (
                  <StatusTag
                    value="Published"
                    className="text-primary bg-primaryLight"
                  />
                ) : (
                  <StatusTag
                    value="Draft"
                    className="text-yellow bg-lightYellow"
                  />
                )}
              </td>

              <td className="w-[100px] ">
                <span className="flex justify-center">
                  <AiOutlineEdit
                    className="text-primary text-[20px] cursor-pointer"
                    onClick={() =>
                      navigate(
                        ROUTES.ADMIN_HOME +
                          ROUTES.ADMIN_EDIT_TESTIMONIALS_LINK +
                          "/" +
                          v._id
                      )
                    }
                  />
                  <MdDeleteOutline
                    className="text-primary text-[20px] cursor-pointer"
                    onClick={() => handleDeleteModal(v._id, v.name)}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <DeleteModal
          setDialogOpen={setModalOpen}
          deleteId={deleteId}
          value={name}
          getData={getTestimonialData}
        />
      )}
    </>
  );
};

export default Table;
