import api from "../PublicAPIConfig";

const endpoint = "/calls";

export const getCalls = async (data: any) => {
  try {
    let url = endpoint;

    const result = await api.get(url, { params: { data } });
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};

export const scheduleCallData = async (data: any) => {
  try {
    let url = endpoint;

    const result = await api.post(url, JSON.stringify({ data }));
    return result;
  } catch (err: any) {
    console.log(err, "err");
    return err;
  }
};
