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
      link: ROUTES.BLOG_PAGE,
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

    {
      text: "footer.text4",
      link: ROUTES.CONTACT_US,
    },
    {
      text: "footer.text5",
      link: ROUTES.ABOUT_US,
    },
  ],
  footerPrivacy: [
    {
      text: "footer.text3",
      link: ROUTES.TERMS_AND_CONDITIONS,
    },
    {
      text: "footer.text1",
      link: ROUTES.TERMS_OF_USE,
    },
    {
      text: "footer.text2",
      link: ROUTES.PRIVACY_POLICY,
    },
  ],
  admin: [
    {
      text: "admin.section1",
      link: ROUTES.ADMIN_HOME,
    },
    {
      text: "admin.section2",
      link: ROUTES.ADMIN_HOME,
    },
    {
      text: "admin.section3",
      link: ROUTES.ADMIN_HOME,
    },
    {
      text: "admin.section4",
      link: ROUTES.ADMIN_HOME,
    },
    {
      text: "admin.section5",
      link: ROUTES.ADMIN_HOME,
    },
    {
      text: "admin.section6",
      link: ROUTES.ADMIN_HOME,
    },
    {
      text: "admin.section7",
      link: ROUTES.ADMIN_HOME,
    },
    {
      text: "admin.section8",
      link: ROUTES.ADMIN_HOME,
    },
    {
      text: "admin.section9",
      link: ROUTES.ADMIN_HOME,
    },
  ],
};
