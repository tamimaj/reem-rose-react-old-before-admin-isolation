import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

import StatusTag from "../StatusTag/StatusTag";

interface BlogType {
  _id: string;
  title: string;
  coverImage: string;
  summary: string;
  categoriesData: [
    {
      name: string;
    }
  ];
  isPublished: boolean;
}
interface TableType {
  blogData: BlogType[];
}
const Table: React.FC<TableType> = ({ blogData }) => {
  const { t } = useTranslation();
  return (
    <table className="xl:w-full w-[95%] min-w-[1200px] border-separate border-spacing-x-0 border-spacing-y-[10px]">
      <thead className="text-white text-sm bg-primaryLight h-[50px] rounded">
        <tr>
          <td className="pl-4 w-[300px]">{t("admin.postTable.heading1")}</td>
          <td className="w-[300px]">{t("admin.postTable.heading2")}</td>
          <td className="w-[400px]">{t("admin.postTable.heading3")}</td>
          <td className="w-[300px]">{t("admin.postTable.heading4")}</td>
          <td className="text-center w-[100px]">
            {t("admin.postTable.heading5")}
          </td>
          <td className="text-center w-[100px]">
            {t("admin.postTable.heading6")}
          </td>
        </tr>
      </thead>
      <tbody>
        {blogData.map((v, idx) => (
          <tr key={idx} className="text-white">
            <td className="pb-[9px]">{v._id}</td>
            <td className="flex w-[300px]">
              <img
                src={v.coverImage}
                alt={v.title}
                className="w-[30px] h-[25px]"
              />{" "}
              <span className="ml-4">{v.title}</span>
            </td>
            <td>{v.summary}</td>
            <td>
              {v.categoriesData.map((category, idx) => (
                <Fragment key={idx}>
                  {category.name} {v.categoriesData.length !== idx + 1 && " , "}
                </Fragment>
              ))}
            </td>
            <td className="flex justify-center items-center">
              {v.isPublished ? (
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
                <AiOutlineEdit className="text-primary text-[20px] cursor-pointer" />
                <MdDeleteOutline className="text-primary text-[20px] cursor-pointer" />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
