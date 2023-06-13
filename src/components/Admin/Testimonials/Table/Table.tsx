import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../../../settings/ROUTES";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";

interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  langCode: string;
}
interface TableType {
  categoryData: CategoryType[];
  getCategoryData: () => {};
}
const Table: React.FC<TableType> = ({ categoryData, getCategoryData }) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleDeleteModal = (id: string, name: string) => {
    setModalOpen(true);
    setId(id);
    setName(name);
  };
  const moveToDetails = (id: string) => {
    setId(id);
    setDetailsModalOpen(true);
  };

  const handleUpdateModal = (id: string) => {
    setId(id);
    setEditModalOpen(true);
  };
  return (
    <>
      <table className="xl:w-full w-[95%] min-w-[1200px]  border-separate border-spacing-x-0 border-spacing-y-[10px]">
        <thead className="text-white text-sm bg-primaryLight h-[50px] rounded">
          <tr>
            <td className="pl-4 w-[300px]">Id</td>
            <td className="w-[300px]">Name</td>
            <td className="w-[400px]">Slug</td>
            <td className="w-[300px]">Language Code</td>
            <td className="text-center w-[100px]">Actions</td>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((v, idx) => (
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
                <span>{v.name}</span>
              </td>
              <td>{v.slug}</td>
              <td>{v.langCode}</td>

              <td className="w-[100px] ">
                <span className="flex justify-center">
                  <AiOutlineEdit
                    className="text-primary text-[20px] cursor-pointer"
                    onClick={() => handleUpdateModal(v._id)}
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
          deleteId={id}
          value={name}
          getData={getCategoryData}
        />
      )}
      {detailsModalOpen && (
        <DetailsModal setDialogOpen={setDetailsModalOpen} id={id} />
      )}
      {editModalOpen && (
        <EditModal
          setDialogOpen={setEditModalOpen}
          id={id}
          getData={getCategoryData}
        />
      )}
    </>
  );
};

export default Table;
