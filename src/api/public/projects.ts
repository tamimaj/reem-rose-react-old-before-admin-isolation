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
export const getProjectsData = async (page: number, pageSize: number) => {
  try {
    let url = endpoint + "/data";
    const params = { page, pageSize };

    const result = await api.get(url, { params: params });
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
