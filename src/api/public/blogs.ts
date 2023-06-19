import api from "../PublicAPIConfig";

const endpoint = "/posts";

export const getBlogPosts = async (
  page: number,
  pageSize: number,
  title: string | null,
  categoryId: string | null
) => {
  try {
    let url = endpoint;
    let params;
    if (title) params = { page, pageSize, search: { title: title } };
    else if (categoryId)
      params = { page, pageSize, filters: { categories: categoryId } };
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

export const getSpecificPost = async (slug: string) => {
  try {
    let url = endpoint + "/bySlug";

    const result = await api.get(url, { params: { slug } });
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
