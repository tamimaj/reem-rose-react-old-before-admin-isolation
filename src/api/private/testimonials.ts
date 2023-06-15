import api from "../privateAPIConfig";

const endpoint = "/testimonials";

interface SearchType {
  [key: string]: any;
}

export const getTestimonials = async (
  page: number,
  pageSize: number,
  searchKey: string | null,
  search: string | null,
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

export const createTestimonial = async (data: object) => {
  try {
    let url = endpoint;

    const result = await api.post(url, { data });
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
export const updateTestimonial = async (data: object) => {
  try {
    let url = endpoint;

    const result = await api.put(url, { data });
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
export const getSpecificTestimonial = async (id: string) => {
  try {
    let url = endpoint + "/" + id;

    const result = await api.get(url);
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
export const deleteTestimonial = async (id: string) => {
  try {
    let url = endpoint + "/" + id;

    const result = await api.delete(url);
    return result;
  } catch (err) {
    console.log(err, "err");
    return null;
  }
};
