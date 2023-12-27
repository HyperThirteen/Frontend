import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axiosInstance } from "../../apis/instance";

export const useAuthQuery = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) throw new AxiosError("accessToken이 없습니다.", "404");
      const { data } = await axiosInstance.get("/api/auth", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(data);
      return data;
    },
  });
};
