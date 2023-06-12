import * as Yup from "yup";
export const validationSchema = [
  Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    github: Yup.string().required("Github is required"),
    linkedin: Yup.string().required("Linkedin is required"),
    website: Yup.string().required("Website is required"),
    coverLetter: Yup.string().required("Cover Letter is required"),
    cv: Yup.string().required("CV is required"),
  }),
  Yup.object().shape({
    title: Yup.string().required("Title is required"),
    slug: Yup.string().required("Slug is required"),
    summary: Yup.string().required("Summary is required"),
    coverImage: Yup.string().required("Cover Image is required"),
    content: Yup.string().required("Content is required"),
    seoTitle: Yup.string().required("Seo Title is required"),
    seoDescription: Yup.string().required("Seo Description is required"),
  }),

  Yup.object().shape({
    name: Yup.string().required("Name is required"),
    slug: Yup.string().required("Slug is required"),
  }),
];
