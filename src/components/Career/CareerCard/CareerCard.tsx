import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import LanguageDetector from "../../../hooks/LanguageDetector/LanguageDetector";

type CareerType = {
  heading: string;
  date: string;
  location: string;
  info: string;
};
type CareerDataType = {
  careerData: CareerType;
};

const CareerCard: React.FC<CareerDataType> = ({ careerData }) => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<string | null>("");

  LanguageDetector(setLang);

  return (
    <div className="rounded px-6 py-4 w-full bg-primaryLight mb-4">
      <div className="flex items-end justify-between">
        <h5 className="font-RobotoSlab font-semibold text-[20px] text-primary">
          {careerData.heading}
        </h5>
        <span className="text-bodyText text-sm">{careerData.date}</span>
      </div>
      <span className="text-bodyText text-sm mt-2">{careerData.location}</span>
      <p className="my-4 text-heading text-base">{careerData.info}</p>

      <Link
        to={"/career-details"}
        className="cursor-pointer text-primary text-base font-semibold flex items-center"
      >
        {t("careers.seeDetails")}{" "}
        {lang === "ar" ? (
          <FiChevronLeft className="text-[20px] ml-4 mt-[2px]" />
        ) : (
          <FiChevronRight className="text-[20px] ml-4 mt-[2px]" />
        )}
      </Link>
    </div>
  );
};

export default CareerCard;
