import spainFlag from "../../assets/icons/spain.svg";
import usFlag from "../../assets/icons/usFlag.svg";
import saudiFlag from "../../assets/icons/saudi-arabia.svg";

interface langProps {
  name: string;
  flag: string;
  dir?: string;
  code: string;
}
export const translationMenu: langProps[] = [
  {
    name: "EN",
    code: "en",
    flag: usFlag,
  },
  {
    name: "AR",
    code: "ar",
    dir: "rtl",
    flag: saudiFlag,
  },
  {
    name: "ES",
    code: "es",
    flag: spainFlag,
  },
];
