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
  ADMIN_BLOGS: "/post",
  ADMIN_ADD_BLOG: "/add-blog",
};

export default ROUTES;
