import logo from "../assets/icons/logo.svg";
import footerLogo from "../assets/icons/footerLogo.svg";
import translate from "../assets/icons/translate.svg";
import ROUTES from "./ROUTES";

export default {
  header: [
    {
      text: "header.text1",
      link: ROUTES.HOME,
    },
    {
      text: "header.text2",
      link: ROUTES.BLOG,
    },
    {
      text: "header.text3",
      link: ROUTES.PORTFOLIO,
    },
    {
      text: "header.text4",
      link: ROUTES.CAREERS,
    },
    {
      text: "header.text5",
      link: ROUTES.SERVICES,
    },
  ],
  scheduleText: "header.scheduleText",
  footerLogo: { url: footerLogo, alt: "REEMROSE" },
  logo: { url: logo, alt: "REEMROSE" },
  companyName: "ReemRose",
  translateIcon: translate,
  icons: {
    text1: "GitHub",
    text2: "LinkedIn",
    text3: "Twitter",
  },
  footerMenu: [
    {
      text: "header.text2",
      link: ROUTES.BLOG,
    },
    {
      text: "header.text3",
      link: ROUTES.PORTFOLIO,
    },
    {
      text: "header.text4",
      link: ROUTES.CAREERS,
    },
    {
      text: "header.text5",
      link: ROUTES.SERVICES,
    },
  ],
  footerPrivacy: [
    {
      text: "footer.text1",
      link: ROUTES.TERMSOFUSE,
    },
    {
      text: "footer.text2",
      link: ROUTES.PRIVACYPOLICY,
    },
    {
      text: "footer.text3",
      link: ROUTES.TERMSANDCONDITIONS,
    },
    {
      text: "footer.text4",
      link: ROUTES.CONTACTUS,
    },
    {
      text: "footer.text5",
      link: ROUTES.ABOUTUS,
    },
  ],
};
