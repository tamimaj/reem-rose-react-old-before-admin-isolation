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

  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",

  //admin routes
  LOGIN: "/login",
  ADMIN: "/admin/*",
  ADMIN_HOME: "/admin",

  //post routes
  ADMIN_BLOGS: "/posts",
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
  ADMIN_CATEGORIES: "/categories",

  //project routes
  ADMIN_PROJECTS: "/projects",
  ADMIN_ADD_PROJECT: "/add-project",
  ADMIN_EDIT_PROJECT: "/edit-project/:id",
  ADMIN_EDIT_PROJECT_LINK: "/edit-project",
  ADMIN_PROJECT_DETAILS: "/project-details/:id",
  ADMIN_PROJECT_DETAILS_LINK: "/project-details",

  //testimonials routes
  ADMIN_TESTIMONIALS: "/testimonials",
  ADMIN_ADD_TESTIMONIAL: "/add-testimonial",
  ADMIN_EDIT_TESTIMONIAL: "/edit-testimonial/:id",
  ADMIN_EDIT_TESTIMONIALS_LINK: "/edit-testimonial",
  ADMIN_TESTIMONIAL_DETAILS: "/testimonial-details/:id",
  ADMIN_TESTIMONIALS_DETAILS_LINK: "/testimonial-details",

  //Services routes
  ADMIN_SERVICES: "/services",
  ADMIN_ADD_SERVICE: "/add-service",
  ADMIN_EDIT_SERVICE: "/edit-service/:id",
  ADMIN_EDIT_SERVICE_LINK: "/edit-service",
  ADMIN_SERVICE_DETAILS: "/service-details/:id",
  ADMIN_SERVICE_DETAILS_LINK: "/service-details",

  //Careers routes
  ADMIN_CAREERS: "/careers",
  ADMIN_ADD_CAREER: "/add-career",
  ADMIN_EDIT_CAREER: "/edit-career/:id",
  ADMIN_EDIT_CAREER_LINK: "/edit-career",
  ADMIN_CAREER_DETAILS: "/career-details/:id",
  ADMIN_CAREER_DETAILS_LINK: "/career-details",

  //Call routes
  ADMIN_CALLS: "/calls",
  ADMIN_CALL_DETAILS: "/call-details/:id",
  ADMIN_CALL_DETAILS_LINK: "/call-details",
};

export default ROUTES;
