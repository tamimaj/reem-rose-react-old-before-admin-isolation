import logo from "../assets/icons/logo.svg";
import translate from "../assets/icons/translate.svg";
import linkedin from "../assets/icons/linkedIn.svg";
import twitter from "../assets/icons/twitter.svg";
import github from "../assets/icons/github.svg";

export default {
  header: [
    {
      text: "header.text1",
      link: "/",
    },
    {
      text: "header.text2",
      link: "/blog",
    },
    {
      text: "header.text3",
      link: "/portfolio",
    },
    {
      text: "header.text4",
      link: "/careers",
    },
    {
      text: "header.text5",
      link: "/services",
    },
  ],
  scheduleText: "header.scheduleText",
  logo: { url: logo, alt: "REEMROSE" },
  translateIcon: translate,
  icons: {
    github: github,
    linkedin: linkedin,
    twitter: twitter,
  },
};
