import React from "react";

import {
  DiAndroid,
  DiAngularSimple,
  DiApple,
  DiJava,
  DiNodejsSmall,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiDjango, SiJavascript } from "react-icons/si";

import gobbler from "../../assets/icons/gobbler.svg";
import net from "../../assets/icons/net.svg";
import techIcon from "../../assets/icons/techicon.svg";
import vue from "../../assets/icons/vue.svg";
import techIcon2 from "../../assets/icons/techIcon2.svg";

type IconsType = {
  v: string;
};
const Icons: React.FC<IconsType> = ({ v }) => {
  return (
    <>
      {v === "Gobbler" && (
        <img src={gobbler} alt="gobbler" className="[32px] mr-4 h-[32px] " />
      )}
      {v === "Android" && (
        <div className="[32px] mr-4 h-[32px]">
          <DiAndroid className="w-full h-full text-white" />
        </div>
      )}
      {v === "Swift" && (
        <div className="[32px] mr-4 h-[32px]">
          <DiApple className="w-full h-full text-white" />
        </div>
      )}
      {v === "Java" && (
        <div className="[32px] mr-4 h-[32px]">
          <DiJava className="w-full h-full text-white" />
        </div>
      )}
      {v === "Python" && (
        <div className="[32px] mr-4 h-[32px]">
          <DiPython className="w-full h-full text-white" />
        </div>
      )}
      {v === "Dot Net" && (
        <img src={net} alt="net" className="[32px] mr-4 h-[32px]" />
      )}
      {v === "Javascript" && (
        <div className="[32px] mr-4 h-[32px]">
          <SiJavascript className="text-[26px] text-white" />
        </div>
      )}
      {v === "React" && (
        <div className="[32px] mr-4 h-[32px]">
          <DiReact className="w-full h-full text-white" />
        </div>
      )}
      {v === "Angular" && (
        <div className="[32px] mr-4 h-[32px]">
          <DiAngularSimple className="w-full h-full text-white" />
        </div>
      )}
      {v === "Node" && (
        <div className="[32px] mr-4 h-[32px]">
          <DiNodejsSmall className="w-full h-full text-white" />
        </div>
      )}
      {v === "Tech1" && (
        <img src={techIcon} alt="tech1" className="[32px] mr-4 h-[32px]" />
      )}
      {v === "Django" && (
        <div className="[32px] mr-4 h-[32px]">
          <SiDjango className="w-full h-full text-white" />
        </div>
      )}
      {v === "vue" && (
        <img src={vue} alt="vue" className="[32px] mr-4 h-[32px]" />
      )}
      {v === "tech2" && (
        <img src={techIcon2} alt="tech2" className="[32px] mr-4 h-[32px]" />
      )}
    </>
  );
};

export default Icons;
