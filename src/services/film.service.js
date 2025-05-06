import axiosInstance from "./index.service";

export const getFilmService = async () => {
  const response = await axiosInstance.get("/api/film");
  return response;
};
