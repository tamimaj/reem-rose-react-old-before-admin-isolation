import api from "../PublicAPIConfig";

const endpoint = "/posts";

export const getBlogPosts = async (
  page: number,
  pageSize: number,
  title: string | undefined,
  category: string | undefined
) => {
  try {
    let url = endpoint;
    let params;
    if (title) params = { page, pageSize, search: { title: title } };
    else if (category)
      params = { page, pageSize, filters: { categories: category } };
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
