import api from "../privateAPIConfig";

const endpoint = "/posts";

interface SearchType {
  [key: string]: any;
}

export const getBlogPosts = async (
  page: number,
  pageSize: number,
  searchKey: string | null,
  search: string | null,
  filter: {
    isPublished?: boolean;
  } | null,
  sort: object | null
) => {
  try {
    let url = endpoint;
    let params;
    let searchData: SearchType = {};
    if (searchKey) searchData[searchKey] = search;
    if (search) {
      if (sort) {
        params = { page, pageSize, search: { ...searchData }, sort };
      } else {
        params = { page, pageSize, search: { ...searchData } };
      }
    } else if (filter) {
      if (sort) {
        params = { page, pageSize, filters: { ...filter }, sort };
      } else {
        params = { page, pageSize, filters: { ...filter } };
      }
    } else {
      if (sort) {
        params = { page, pageSize, sort };
      } else params = { page, pageSize };
    }
    const result = await api.get(url, { params: params });
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};

export const createPost = async (data: object) => {
  try {
    let url = endpoint;

    const result = await api.post(url, { data });
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};

export const EditPost = async (data: object) => {
  try {
    let url = endpoint;

    const result = await api.put(url, { data });
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
export const getSpecificPost = async (id: string) => {
  try {
    let url = endpoint + "/" + id;

    const result = await api.get(url);
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
