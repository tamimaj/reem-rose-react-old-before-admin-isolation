import api from "../PublicAPIConfig";

const endpoint = "/posts";

export const getBlogPosts = async (
  page: number,
  pageSize: number,
  search: object,
  filters: object
) => {
  try {
    console.log(search, "v");
    let url = endpoint;
    let params;
    if (search) params = { page, pageSize, search };
    else if (filters) params = { page, pageSize, filters };
    else {
      params = { page, pageSize };
    }
    const result = await api.get(url, { params: params });
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
