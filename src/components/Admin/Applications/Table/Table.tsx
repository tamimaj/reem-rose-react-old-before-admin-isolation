import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../settings/ROUTES";
import DeleteModal from "../DeleteModal/DeleteModal";

interface ApplicationType {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  careerData: [
    {
      role: string;
    }
  ];
}
interface TableType {
  applicationData: ApplicationType[];
  getApplicationData: () => {};
}
const Table: React.FC<TableType> = ({
  applicationData,
  getApplicationData,
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
      ROUTES.ADMIN_HOME + ROUTES.ADMIN_APPLICATION_DETAILS_LINK + "/" + id
    );
  };
  return (
    <>
      <table className="xl:w-full w-[95%] min-w-[1200px]  border-separate border-spacing-x-0 border-spacing-y-[10px]">
        <thead className="text-white text-sm bg-primaryLight h-[50px] rounded">
          <tr>
            <td className="pl-4 w-[300px]">Id</td>
            <td className="w-[300px]">Name</td>
            <td className="w-[400px]">Email</td>
            <td className="w-[300px]">Phone Number</td>
            <td className="w-[300px]">Applied For</td>
            <td className="text-center w-[100px]">Actions </td>
          </tr>
        </thead>
        <tbody>
          {applicationData.map((v, idx) => (
            <tr key={idx} className="text-white">
              <td
                onClick={() => moveToDetails(v._id)}
                className="pb-[9px] cursor-pointer"
              >
                {v._id}
              </td>
              <td
                className="flex cursor-pointer"
                onClick={() => moveToDetails(v._id)}
              >
                {v.name}
              </td>
              <td>{v.email}</td>
              <td>{v.phoneNumber}</td>
              <td>{v?.careerData[0].role}</td>

              <td className="w-[100px] ">
                <span className="flex justify-center">
                  {/* <AiOutlineEdit
                    className="text-primary text-[20px] cursor-pointer"
                    onClick={() =>
                      navigate(
                        ROUTES.ADMIN_HOME +
                          ROUTES.ADMIN_EDIT_BLOG_LINK +
                          "/" +
                          v._id
                      )
                    }
                  /> */}
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
          getData={getApplicationData}
        />
      )}
    </>
  );
};

export default Table;
