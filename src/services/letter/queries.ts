import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/instance";

type Category = {
  c_id: number;
  c_name: "건의" | "전체보기" | "학교폭력";
};

type Letter = {
  Category: Category;
  c_id: number;
  content: string;
  title: string;
  createdAt: string;
  id: number;
};

export const useListQuery = () => {
  return useQuery({
    queryKey: ["list"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Letter[]>("/letter");
      console.log("1");
      console.log(data);
      return data;
    },
  });
};

export default useListQuery;
