import api from "../PublicAPIConfig";

const endpoint = "/contacts";

export const contactSubmission = async (data: any) => {
  try {
    let url = endpoint;

    const result = await api.post(url, JSON.stringify({ data }));
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
