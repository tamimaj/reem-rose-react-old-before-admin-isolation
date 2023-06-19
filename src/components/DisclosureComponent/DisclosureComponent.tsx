import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { HtmlConverter } from "../../hooks/HtmlConverter/HtmlConverter";

type ServiceDataType = {
  title: string;
  content: string;
};
type DisclosureType = {
  servicesData: ServiceDataType[];
};
const DisclosureComponent: React.FC<DisclosureType> = ({
  servicesData,
}): any => {
  const { t } = useTranslation();
  const [active, setActive] = useState<number | null>(null);

  const handleActive = (v: number) => {
    if (active === v) {
      setActive(null);
    } else {
      setActive(v);
    }
  };

  return servicesData.map((v, idx) => (
    <>
      <div
        onClick={() => handleActive(idx)}
        className={`flex justify-between w-[98%] h-[60px] px-[24px] py-[20px] disclosure ${
          active === idx
            ? " bg-gradient-to-r from-primary to-gradientColor text-white"
            : "bg-primaryLight text-bodyText"
        } hover:bg-primary  hover:text-white rounded cursor-pointer mb-4`}
      >
        <h3 className="font-semibold text-start text-base ">{v.title}</h3>
        <div className="w-[24px] h-[24px] flex items-center justify-center ml-1">
          <FiChevronDown
            className={`text-[20px] mt-[2px] icon ${
              active === idx ? "rotate-180 text-white" : "rotate-0 text-primary"
            }`}
          />
        </div>
      </div>
      {active === idx && (
        <div className="mb-8 transition ease-in-out duration-1000 w-full">
          <p
            className="text-heading text-left w-full"
            dangerouslySetInnerHTML={HtmlConverter(v.content)}
          />
        </div>
      )}{" "}
    </>
  ));
};

export default DisclosureComponent;
