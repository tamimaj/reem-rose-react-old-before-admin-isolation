import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../../../settings/ROUTES";
import DeleteModal from "../DeleteModal/DeleteModal";

interface ServicesType {
  _id: string;
  title: string;
  seoTitle: string;
}
interface TableType {
  servicesData: ServicesType[];
  getServicesData: () => {};
}
const Table: React.FC<TableType> = ({ servicesData, getServicesData }) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState("");
  const [title, setTitle] = useState("");

  const handleDeleteModal = (id: string, title: string) => {
    setModalOpen(true);
    setDeleteId(id);
    setTitle(title);
  };
  const moveToDetails = (id: string) => {
    navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_SERVICE_DETAILS_LINK + "/" + id);
  };
  return (
    <>
      <table className="xl:w-full w-[95%] min-w-[1200px]  border-separate border-spacing-x-0 border-spacing-y-[10px]">
        <thead className="text-white text-sm bg-primaryLight h-[50px] rounded">
          <tr>
            <td className="pl-4 w-[300px]">Id</td>
            <td className="w-[250px]">Title</td>
            <td className="w-[250px]">SeoTitle</td>
            <td className="text-center w-[100px]">Actions</td>
          </tr>
        </thead>
        <tbody>
          {servicesData.map((v, idx) => (
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
                <span className="ml-4">{v.title}</span>
              </td>
              <td>{v.seoTitle}</td>

              <td className="w-[100px] ">
                <span className="flex justify-center">
                  <AiOutlineEdit
                    className="text-primary text-[20px] cursor-pointer"
                    onClick={() =>
                      navigate(
                        ROUTES.ADMIN_HOME +
                          ROUTES.ADMIN_EDIT_SERVICE_LINK +
                          "/" +
                          v._id
                      )
                    }
                  />
                  <MdDeleteOutline
                    className="text-primary text-[20px] cursor-pointer"
                    onClick={() => handleDeleteModal(v._id, v.title)}
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
          value={title}
          getData={getServicesData}
        />
      )}
    </>
  );
};

export default Table;
