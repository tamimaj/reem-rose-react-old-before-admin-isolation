import api from "../PublicAPIConfig";

const endpoint = "/projects";

export const getProjects = async () => {
  try {
    let url = endpoint;
    const result = await api.get(url);
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
