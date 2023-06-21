import { useEffect, useState, Fragment } from "react";
import moment from "moment";

import { useParams } from "react-router-dom";
import Loader from "../../../../components/Loader/Loader";
import { getSpecificCall } from "../../../../api/private/call";

interface CallDetailsType {
  _id: string;
  requestorName: string;
  requestorEmail: string;
  description: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  attendees: [
    {
      email: string;
      joining: boolean;
    }
  ];
  externalId: string;
}

const CallDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [callData, setCallData] = useState<CallDetailsType>({
    _id: "",
    requestorName: "",
    requestorEmail: "",
    description: "",
    startDate: "",
    endDate: "",
    attendees: [{ email: "", joining: false }],

    createdAt: "",
    updatedAt: "",
    externalId: "",
  });

  const getCallData = async () => {
    if (id) {
      setLoading(true);
      let response = await getSpecificCall(id);
      if (!response || response?.status !== 200) {
        return;
      }
      setCallData(response.data.callData);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCallData();
  }, [id]);

  return (
    <div className=" pt-4 pb-20 w-full flex justify-center overflow-x-hidden">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl mr-12">
              Call Details
            </h6>
            <div className="flex w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden">
              <div className="flex flex-col md:flex-row md:justify-between w-full text-white">
                <div className="flex flex-col ">
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Name : </span>{" "}
                    {callData.requestorName}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Email : </span>{" "}
                    {callData.requestorEmail}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Created At : </span>{" "}
                    {moment(callData.createdAt).format("DD.MM.YY")}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Start Date: </span>{" "}
                    {moment.utc(callData.startDate).format("DD.MM.YY, HH:mm")}
                  </span>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Id : </span>{" "}
                    {callData._id}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Updated At : </span>{" "}
                    {moment(callData.updatedAt).format("DD.MM.YY")}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Start Date: </span>{" "}
                    {moment.utc(callData.endDate).format("DD.MM.YY, HH:mm")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">
                Description{" "}
              </span>{" "}
              <span className="my-2 text-white">{callData.description}</span>
            </div>
            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">Attendees </span>{" "}
              {callData.attendees.map((attendee, idx) => (
                <div className="text-white flex flex-col" key={idx}>
                  <span className="mt-1 font-light text-sm">
                    <span className="font-normal text-base">Email : </span>{" "}
                    {attendee.email}
                  </span>
                  <span className="mb-2 font-light text-sm">
                    <span className="font-normal text-base">Joining : </span>{" "}
                    {attendee.joining ? "Yes" : "No"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallDetails;
