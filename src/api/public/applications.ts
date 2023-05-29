import api from "../PublicAPIConfig";

const endpoint = "/applications";

export const applicationSubmission = async (data: any) => {
  try {
    let url = endpoint;

    const result = await api.post(url, JSON.stringify({ data }));
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
