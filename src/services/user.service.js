import axiosInstance from "./index.service";

export const registerService = async (data) => {
  const response = await axiosInstance.post("/api/user", data);
  return response;
};

export const getUsers = async () => {
  const response = await axiosInstance.get("/api/user");
  return response;
};

export const deleteUser = async (id) => {
  const response = await axiosInstance.delete(`/api/user/${id}`);
  return response;
};
