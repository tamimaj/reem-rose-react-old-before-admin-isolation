import api from "../PublicAPIConfig";

const endpoint = "/careers";

export const getCareers = async () => {
  try {
    let url = endpoint;
    const result = await api.get(url);
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};

export const getCareersDetails = async (slug: string) => {
  try {
    let url = endpoint + "/bySlug";
    const result = await api.get(url, { params: { slug } });
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
