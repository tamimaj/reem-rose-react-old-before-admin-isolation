import api from "../privateAPIConfig";

const endpoint = "/posts";

export const getBlogPosts = async (
  page: number,
  pageSize: number,
  searchKey: string | null,
  search: string | null,
  categoryId: string | null
) => {
  try {
    let url = endpoint;
    let params;
    const searchData = { searchKey: search };
    if (search) params = { page, pageSize, searchData };
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
