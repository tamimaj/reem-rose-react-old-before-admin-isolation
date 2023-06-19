import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../settings/ROUTES";
import DeleteModal from "../DeleteModal/DeleteModal";

interface CareerType {
  _id: string;
  role: string;
  location: string;
  seoTitle: string;
}
interface TableType {
  careerData: CareerType[];
  getCareerData: () => {};
}
const Table: React.FC<TableType> = ({ careerData, getCareerData }) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState("");
  const [role, setRole] = useState("");

  const handleDeleteModal = (id: string, role: string) => {
    setModalOpen(true);
    setDeleteId(id);
    setRole(role);
  };
  const moveToDetails = (id: string) => {
    navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_CAREER_DETAILS_LINK + "/" + id);
  };
  return (
    <>
      <table className="xl:w-full w-[95%] min-w-[1200px]  border-separate border-spacing-x-0 border-spacing-y-[10px]">
        <thead className="text-white text-sm bg-primaryLight h-[50px] rounded">
          <tr>
            <td className="pl-4 w-[300px]">Id</td>
            <td className="w-[300px]">Role</td>
            <td className="w-[400px]">Location</td>
            <td className="w-[300px]">Seo Title</td>
            <td className="text-center w-[100px]">Actions</td>
          </tr>
        </thead>
        <tbody>
          {careerData.map((v, idx) => (
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
                {v.role}
              </td>
              <td>{v.location}</td>
              <td>{v.seoTitle}</td>
              <td className="w-[100px] ">
                <span className="flex justify-center">
                  <AiOutlineEdit
                    className="text-primary text-[20px] cursor-pointer"
                    onClick={() =>
                      navigate(
                        ROUTES.ADMIN_HOME +
                          ROUTES.ADMIN_EDIT_CAREER_LINK +
                          "/" +
                          v._id
                      )
                    }
                  />
                  <MdDeleteOutline
                    className="text-primary text-[20px] cursor-pointer"
                    onClick={() => handleDeleteModal(v._id, v.role)}
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
          value={role}
          getData={getCareerData}
        />
      )}
    </>
  );
};

export default Table;
