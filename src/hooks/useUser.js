import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/user.service";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["get-users"],
    queryFn: () => getUsers(),
    select: (res) => res,
    staleTime: 5000,
  });
};
