const ROUTES = {
  HOME: "/",
  BLOG: "/blog",
  BLOG_PAGE: "/blog?page=1",
  BLOG_POST: "/blog-post/:slug",
  CAREERS: "/careers",
  CAREER_DETAILS: "/career-details/:slug",
  SERVICES: "/services",
  PORTFOLIO: "/portfolio",
  SCHEDULE: "/schedule",
  TERMS_OF_USE: "/terms-of-use",
  CONTACT_US: "/contact-us",
  ABOUT_US: "/about-us",

  LOGIN: "/login",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",

  //admin routes
  ADMIN: "/admin/*",
  ADMIN_HOME: "/admin",

  //post routes
  ADMIN_BLOGS: "/post",
  ADMIN_ADD_BLOG: "/add-post",
  ADMIN_EDIT_BLOG: "/edit-post/:id",
  ADMIN_EDIT_BLOG_LINK: "/edit-post",
  ADMIN_BLOG_DETAILS: "/post-details/:id",
  ADMIN_BLOG_DETAILS_LINK: "/post-details",

  //application routes
  ADMIN_APPLICATIONS: "/applications",
  ADMIN_APPLICATION_DETAILS: "/application-details/:id",
  ADMIN_APPLICATION_DETAILS_LINK: "/application-details",

  //category routes
  ADMIN_CATEGORIES: "/category",
};

export default ROUTES;
