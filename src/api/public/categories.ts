import api from "../PublicAPIConfig";

const endpoint = "/categories";

export const getCategories = async () => {
  try {
    let url = endpoint;
    const result = await api.get(url);
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
