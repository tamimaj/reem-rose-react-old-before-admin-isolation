import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../settings/ROUTES";
import DeleteModal from "../DeleteModal/DeleteModal";
import moment from "moment";

interface CallType {
  _id: string;
  requestorName: string;
  requestorEmail: string;
  startDate: string;
  endDate: string;
}
interface TableType {
  callData: CallType[];
  getCallData: () => {};
}
const Table: React.FC<TableType> = ({ callData, getCallData }) => {
  const navigate = useNavigate();
  // const [modalOpen, setModalOpen] = useState<boolean>(false);
  // const [deleteId, setDeleteId] = useState("");
  // const [role, setRole] = useState("");

  // const handleDeleteModal = (id: string, role: string) => {
  //   setModalOpen(true);
  //   setDeleteId(id);
  //   setRole(role);
  // };
  const moveToDetails = (id: string) => {
    navigate(ROUTES.ADMIN_HOME + ROUTES.ADMIN_CALL_DETAILS_LINK + "/" + id);
  };
  return (
    <>
      <table className="xl:w-full w-[95%] min-w-[1200px]  border-separate border-spacing-x-0 border-spacing-y-[10px]">
        <thead className="text-white text-sm bg-primaryLight h-[50px] rounded">
          <tr>
            <td className="pl-4 w-[300px]">Id</td>
            <td className="w-[300px]">Name</td>
            <td className="w-[400px]">Email</td>
            <td className="w-[300px]">Start Time</td>
            <td className="w-[250px]">End Time</td>
            {/* <td className="text-center w-[100px]">Actions</td> */}
          </tr>
        </thead>
        <tbody>
          {callData.map((v, idx) => (
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
                {v.requestorName}
              </td>
              <td>{v.requestorEmail}</td>
              <td>{moment.utc(v.startDate).format("DD.MM.YY, HH:mm")}</td>
              <td>{moment.utc(v.endDate).format("DD.MM.YY, HH:mm")}</td>
              {/*<td className="w-[100px] ">
                <span className="flex justify-center">
                   <MdDeleteOutline
                    className="text-primary text-[20px] cursor-pointer"
                    onClick={() => handleDeleteModal(v._id, v.requestorName)}
                  /> 
                </span>
              </td>*/}
            </tr>
          ))}
        </tbody>
      </table>
      {/* {modalOpen && (
        <DeleteModal
          setDialogOpen={setModalOpen}
          deleteId={deleteId}
          value={role}
          getData={getCallData}
        />
      )} */}
    </>
  );
};

export default Table;
