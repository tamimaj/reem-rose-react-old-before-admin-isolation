import logo from "../assets/images/logo.png";
import translate from "../assets/icons/translate.svg";
import ROUTES from "./ROUTES";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const settings = {
  header: [
    {
      text: "header.text1",
      link: ROUTES.HOME,
    },

    // TEMPO
    // {
    //   text: "header.text2",
    //   link: ROUTES.BLOG_PAGE,
    // },

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
      text: "header.aboutUs",
      link: ROUTES.ABOUT_US,
    },
  ],
  scheduleText: "header.scheduleText",
  footerLogo: { url: logo, alt: "ReemRose" },
  logo: { url: logo, alt: "ReemRose" },
  companyName: "ReemRose",
  translateIcon: translate,
  supportEmail: "info@reemrose.com",
  companyAddress: "Spain, Granada",

  socialLinks: [
    {
      name: "GitHub",
      account: "@ReemRose",
      iconComponent: AiFillGithub,
      link: "https://github.com/reemrose",
    },
    {
      name: "LinkedIn",
      account: "@ReemRose",
      iconComponent: AiFillLinkedin,
      link: "https://www.linkedin.com/company/reemrose",
    },
    {
      name: "X",
      account: "@ReemRoseWeb",
      iconComponent: RiTwitterXFill,
      link: "https://twitter.com/reemroseweb",
    },
    {
      name: "YouTube",
      account: "@ReemRoseWeb",
      iconComponent: AiFillYoutube,
      link: "http://www.youtube.com/@ReemRoseWeb",
    },
    {
      name: "Facebook",
      account: "@ReemRoseWeb",
      iconComponent: AiFillFacebook,
      link: "https://www.facebook.com/reemroseweb",
    },
    {
      name: "Instagram",
      account: "@ReemRoseWeb",
      iconComponent: AiFillInstagram,
      link: "https://www.instagram.com/reemroseweb",
    },
  ],

  footerMenu: [
    // {
    //   text: "header.text2",
    //   link: ROUTES.BLOG,
    // },
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

  // duplicate cos the footer menu is different in the mobile.
  // TODO: MAKE A SINGLE MENU
  // CHANGE TRANSLATIONS
  footerMobileMenu: [
    // {
    //   text: "header.text2",
    //   link: ROUTES.BLOG,
    // },

    // TODO
    {
      text: "header.text1",
      link: ROUTES.HOME,
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

export default settings;
