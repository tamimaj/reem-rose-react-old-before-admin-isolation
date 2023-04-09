import { useState } from "react";
import { useTranslation } from "react-i18next";

import dashboard from "../../assets/icons/dashboard.svg";
import { IoMdApps } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Search from "../../components/Admin/Search/Search";
import Tags from "../../components/Tags/Tags";
import StatusTag from "../../components/Admin/StatusTag/StatusTag";
import Modal from "../../components/Modal/Modal";
import SortMenu from "../../components/Admin/SortMenu/SortMenu";
import { Link } from "react-router-dom";
import ROUTES from "../../settings/ROUTES";

const Admin = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  return (
    <div className=" pt-4 pb-20 w-full flex justify-center">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        <Link
          to={ROUTES.HOME}
          className="text-white md:w-[712px] text-[24px] xs:text-[28px] lg:text-[32px] text-center mt-4 mb-[48px] lg:mb-[80px]"
        >
          {t("admin.heading")}
        </Link>
        <div className="flex w-full">
          <div className="flex flex-col justify-between 2xl:items-start items-center 2xl:w-[227px] h-[300px] 2xl:h-full bg-primaryLight py-8 px-4 2xl:p-8 rounded mr-6">
            <div className="flex flex-col">
              <div className="flex cursor-pointer mb-4">
                <img
                  src={dashboard}
                  alt="dashboard icon"
                  className="w-[20px] h-[20px] 2xl:mr-3"
                />
                <span className="2xl:flex hidden text-bodyText hover:text-white">
                  {t("admin.title")}
                </span>
              </div>
              <div className="flex cursor-pointer mb-4">
                <IoMdApps className="w-[20px] h-[20px] 2xl:mr-3 text-primary" />
                <span className="text-bodyText hover:text-white 2xl:flex hidden">
                  {t("admin.section1")}
                </span>
              </div>
              <div className="flex cursor-pointer mb-4">
                <IoMdApps className="w-[20px] h-[20px] 2xl:mr-3 text-primary" />
                <span className="text-bodyText hover:text-white 2xl:flex hidden">
                  {t("admin.section2")}
                </span>
              </div>
              <div className="flex cursor-pointer mb-4">
                <IoMdApps className="w-[20px] h-[20px] 2xl:mr-3 text-primary" />
                <span className="text-bodyText hover:text-white 2xl:flex hidden">
                  {t("admin.section3")}
                </span>
              </div>
            </div>
            <div className="flex cursor-pointer">
              <FiLogOut className="w-[20px] h-[20px] 2xl:mr-3 text-primary" />
              <span className="text-sm text-white 2xl:flex hidden">
                Log out
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[90%] xl:w-full">
            <div className="flex 2xl:w-[1198px] md:flex-row flex-col  w-full md:justify-between">
              <div className="flex flex-col w-full">
                <Search />
                <div className="flex mt-2 flex-wrap">
                  <Tags tag="Search 1" />
                  <Tags tag="Search 2" />
                  <Tags tag="Search 3" />
                  <Tags tag="Search 4" />
                  <Tags tag="Search 5" />
                  <Tags tag="Search 6" />
                </div>
              </div>
              <div className="flex mt-4 md:mt-0">
                <SortMenu />
                <div className="flex items-center justify-center w-[40px] h-[40px] p-2 bg-primaryLight rounded mr-2">
                  <BiChevronLeft className="text-[24px] text-primary" />
                </div>
                <div className="flex items-center justify-center w-[40px] h-[40px] p-2 bg-primaryLight rounded">
                  <BiChevronRight className="text-[24px] text-primary" />
                </div>
              </div>
            </div>

            <div className="w-full my-6 overflow-x-scroll">
              <table className="xl:w-full w-[95%] min-w-[1200px] ">
                <thead className="text-white text-sm bg-primaryLight h-[50px] rounded">
                  <td className="pl-4">{t("admin.table.heading1")}</td>
                  <td className="w-[400px]">{t("admin.table.heading2")}</td>
                  <td className="text-center">{t("admin.table.heading3")}</td>
                  <td className="text-center">{t("admin.table.heading4")}</td>
                  <td className="text-center">{t("admin.table.heading5")}</td>
                </thead>
                <tbody>
                  <tr className="py-2 text-heading h-[52px] text-sm">
                    <td className="pl-4">#888777</td>
                    <td>
                      Behind the Scenes: The Role and Importance of Back-End
                      Development in Creating Seamless User Experiences
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <StatusTag
                          className="text-primary bg-primaryLight"
                          value="Enabled"
                        />
                      </div>
                    </td>
                    <td className="text-center">14.02.2023</td>
                    <td className="text-primary text-center">
                      {t("admin.table.heading5")}
                    </td>
                  </tr>
                  <tr className="py-2 text-heading h-[52px] text-sm bg-primaryLight">
                    <td className="pl-4">#888777</td>
                    <td>
                      Behind the Scenes: The Role and Importance of Back-End
                      Development in Creating Seamless User Experiences
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <StatusTag
                          className="text-yellow bg-lightYellow"
                          value="Scheduled"
                        />
                      </div>
                    </td>
                    <td className="text-center">14.02.2023</td>
                    <td className="text-primary text-center">
                      {t("admin.table.heading5")}
                    </td>
                  </tr>
                  <tr className="py-2 text-heading h-[52px] text-sm">
                    <td className="pl-4">#888777</td>
                    <td>
                      Behind the Scenes: The Role and Importance of Back-End
                      Development in Creating Seamless User Experiences
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <StatusTag
                          className="text-primary bg-primaryLight"
                          value="Enabled"
                        />
                      </div>
                    </td>
                    <td className="text-center">14.02.2023</td>
                    <td className="text-primary text-center">
                      {t("admin.table.heading5")}
                    </td>
                  </tr>
                  <tr className="py-2 text-heading h-[52px] text-sm bg-primaryLight">
                    <td className="pl-4">#888777</td>
                    <td>
                      Behind the Scenes: The Role and Importance of Back-End
                      Development in Creating Seamless User Experiences
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <StatusTag
                          className="text-red bg-lightRed"
                          value="Disabled"
                        />
                      </div>
                    </td>
                    <td className="text-center">14.02.2023</td>
                    <td className="text-primary text-center">
                      {t("admin.table.heading5")}
                    </td>
                  </tr>
                  <tr className="py-2 text-heading h-[52px] text-sm">
                    <td className="pl-4">#888777</td>
                    <td>
                      Behind the Scenes: The Role and Importance of Back-End
                      Development in Creating Seamless User Experiences
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <StatusTag
                          className="text-primary bg-primaryLight"
                          value="Enabled"
                        />
                      </div>
                    </td>
                    <td className="text-center">14.02.2023</td>
                    <td className="text-primary text-center">
                      {t("admin.table.heading5")}
                    </td>
                  </tr>
                  <tr className="py-2 text-heading h-[52px] text-sm bg-primaryLight">
                    <td className="pl-4">#888777</td>
                    <td>
                      Behind the Scenes: The Role and Importance of Back-End
                      Development in Creating Seamless User Experiences
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <StatusTag
                          className="text-red bg-lightRed"
                          value="Disabled"
                        />
                      </div>
                    </td>
                    <td className="text-center">14.02.2023</td>
                    <td className="text-primary text-center">
                      {t("admin.table.heading5")}
                    </td>
                  </tr>
                  <tr className="py-2 text-heading h-[52px] text-sm">
                    <td className="pl-4">#888777</td>
                    <td>
                      Behind the Scenes: The Role and Importance of Back-End
                      Development in Creating Seamless User Experiences
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <StatusTag
                          className="text-yellow bg-lightYellow"
                          value="Scheduled"
                        />
                      </div>
                    </td>
                    <td className="text-center">14.02.2023</td>
                    <td className="text-primary text-center">
                      {t("admin.table.heading5")}
                    </td>
                  </tr>
                  <tr className="py-2 text-heading h-[52px] text-sm bg-primaryLight">
                    <td className="pl-4">#888777</td>
                    <td>
                      Behind the Scenes: The Role and Importance of Back-End
                      Development in Creating Seamless User Experiences
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <StatusTag
                          className="text-primary bg-primaryLight"
                          value="Enabled"
                        />
                      </div>
                    </td>
                    <td className="text-center">14.02.2023</td>
                    <td className="text-primary text-center">
                      {t("admin.table.heading5")}
                    </td>
                  </tr>
                  <tr className="py-2 text-heading h-[52px] text-sm">
                    <td className="pl-4">#888777</td>
                    <td>
                      Behind the Scenes: The Role and Importance of Back-End
                      Development in Creating Seamless User Experiences
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <StatusTag
                          className="text-primary bg-primaryLight"
                          value="Enabled"
                        />
                      </div>
                    </td>
                    <td className="text-center">14.02.2023</td>
                    <td className="text-primary text-center">
                      {t("admin.table.heading5")}
                    </td>
                  </tr>
                  <tr className="py-2 text-heading h-[52px] text-sm bg-primaryLight">
                    <td className="pl-4">#888777</td>
                    <td>
                      Behind the Scenes: The Role and Importance of Back-End
                      Development in Creating Seamless User Experiences
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <StatusTag
                          className="text-primary bg-primaryLight"
                          value="Enabled"
                        />
                      </div>
                    </td>
                    <td className="text-center">14.02.2023</td>
                    <td className="text-primary text-center">
                      {t("admin.table.heading5")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex w-full ml-[30%]  md:ml-0 md:justify-center items-center mt-[48px] text-heading text-sm">
              <span className="mr-6">{t("pagination.previous")}</span>
              <span className="mr-4">1</span>
              <span className="mr-4">2</span>
              <span>3</span>
              <span className="ml-6">{t("pagination.next")}</span>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <Modal setDialogOpen={setModalOpen} />}
    </div>
  );
};

export default Admin;
