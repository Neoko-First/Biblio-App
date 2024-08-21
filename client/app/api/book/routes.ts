import axiosInstance from "../axiosConfig";

export const getAllBooks = async (page = 0, pageSize = 10, search = "") => {
  let url = `/books?pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  if (search) {
    url += `&filters[$or][0][name][$containsi]=${search}`;
  }

  try {
    const response = await axiosInstance.get("/books");
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};