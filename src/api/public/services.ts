import api from "../PublicAPIConfig";

const endpoint = "/services";

export const getServices = async () => {
  try {
    let url = endpoint;
    const result = await api.get(url);
    return result;
  } catch (err) {
    console.log(err, "err");
  }
};

export const getServiceById = async (id: string) => {
  try {
    let url = endpoint + "/" + id;
    const result = await api.get(url);
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
