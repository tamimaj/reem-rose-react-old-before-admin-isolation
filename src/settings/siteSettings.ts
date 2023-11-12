import logo from "../assets/images/logo.png";
import translate from "../assets/icons/translate.svg";
import ROUTES from "./ROUTES";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

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
  footerLogo: { url: logo, alt: "ReemRose" },
  logo: { url: logo, alt: "ReemRose" },
  companyName: "ReemRose",
  translateIcon: translate,
  socialLinks: [
    {
      name: "GitHub",
      iconComponent: AiFillGithub,
      link: "https://github.com/reemrose",
    },
    {
      name: "LinkedIn",
      iconComponent: AiFillLinkedin,
      link: "https://www.linkedin.com/company/reemrose",
    },
    {
      name: "Twitter",
      iconComponent: AiOutlineTwitter,
      link: "https://twitter.com/reemroseweb",
    },
  ],

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
      text: "admin.title",
      link: ROUTES.ADMIN_HOME,
    },
    {
      text: "admin.section1",
      link: ROUTES.ADMIN_HOME + ROUTES.ADMIN_BLOGS,
    },
    {
      text: "admin.section2",
      link: ROUTES.ADMIN_HOME + ROUTES.ADMIN_APPLICATIONS,
    },
    {
      text: "admin.section3",
      link: ROUTES.ADMIN_HOME + ROUTES.ADMIN_CALLS,
    },
    {
      text: "admin.section4",
      link: ROUTES.ADMIN_HOME + ROUTES.ADMIN_CATEGORIES,
    },
    {
      text: "admin.section5",
      link: ROUTES.ADMIN_HOME + ROUTES.ADMIN_PROJECTS,
    },
    {
      text: "admin.section6",
      link: ROUTES.ADMIN_HOME + ROUTES.ADMIN_TESTIMONIALS,
    },
    {
      text: "admin.section7",
      link: ROUTES.ADMIN_HOME + ROUTES.ADMIN_SERVICES,
    },
    {
      text: "admin.section8",
      link: ROUTES.ADMIN_HOME + ROUTES.ADMIN_CAREERS,
    },
  ],
};
