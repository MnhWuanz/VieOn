import axiosInstance from "./index.service";

export const registerService = async (data) => {
  const response = await axiosInstance.post("/api/users", data);
  return response;
};

export const getUsers = async () => {
   return await axiosInstance.get("/api/users/");
};
export const getUserId=async(id)=>{
   if(id==1){
   return await axiosInstance.get("/api/users/");
  }else if(id==undefined){
    return ;
  }else{
    return await axiosInstance.get(`/api/users/${id}`);
  }
}

export const deleteUser = async (id) => {
  const response = await axiosInstance.delete(`/api/users/${id}`);
  return response;
};

export const updateUser=async(id,data)=>{
  const response= await axiosInstance.put(`/api/users/${id}`,data);
  return response;
}

