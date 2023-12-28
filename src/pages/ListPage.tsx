import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryRadio from "../components/CategoryRadio";
import useListQuery from "../services/letter/queries";
import { Category } from "../types/category";

const ListPage = () => {
  const [category, setCategory] = useState<Category>("전체보기");

  const { data: listData } = useListQuery();

  const categoryFilteredList = listData?.filter(
    (item) => category === "전체보기" || item.Category.c_name === category
  );

  return (
    <div className="overflow-auto">
      <div className="mx-auto max-w-[1000px] w-full my-28">
        <p className="text-[40px] font-semibold">
          <span className="text-[#2D9AFF]">마음의 편지</span> 모아보기
        </p>
        <p className="text-[20px] font-semibold mt-3">
          필요한 카테고리를 선택해서 볼 수 있어요
        </p>
        <div className="flex gap-6 mt-8">
          <CategoryRadio
            label="전체보기"
            onChange={() => setCategory("전체보기")}
            checked={category === "전체보기"}
          />
          <CategoryRadio
            label="건의"
            onChange={() => setCategory("건의")}
            checked={category === "건의"}
          />
          <CategoryRadio
            label="학교폭력"
            onChange={() => setCategory("학교폭력")}
            checked={category === "학교폭력"}
          />
          <CategoryRadio
            label="질문"
            onChange={() => setCategory("질문")}
            checked={category === "질문"}
          />
        </div>

        <hr className="bg-[#F6F6F6] h-[1px] border-0 mt-[32px]" />

        <div className="grid grid-cols-3 gap-x-2 gap-y-8 mt-[34px]">
          {categoryFilteredList?.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`}
              className="bg-white border-solid border-[#EAEAEA] border-[1.5px] rounded-[15px]
                py-[30px] px-8 flex flex-col justify-between h-[280px] cursor-pointer"
            >
              <div>
                <p className="text-[28px] font-semibold">{item.title}</p>
                <p className="text-[20px] font-semibold mt-3">{item.content}</p>
              </div>
              <p className="text-[#2D9AFF] text-base font-semibold">
                {item.Category.c_name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
