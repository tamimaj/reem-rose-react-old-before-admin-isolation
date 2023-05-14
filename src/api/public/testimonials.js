import api from "../PublicAPIConfig";

const endpoint = "/testimonials";

export const getTestimonials = async () => {
  try {
    let url = endpoint;
    const result = await api.get(url);
    return result;
  } catch (err) {
    console.log(err, "err");
  }
};
