import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryRadio from "../components/CategoryRadio";
import { Category } from "../types/category";

const dataList = [
  {
    id: 1,
    title: "화장실의 휴지가 자주 부족해요",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...",
    category: "건의",
  },
  {
    id: 2,
    title: "화장실의 휴지가 자주 부족해요",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...",
    category: "건의",
  },
  {
    id: 3,
    title: "화장실의 휴지가 자주 부족해요",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...",
    category: "건의",
  },
  {
    id: 4,
    title: "화장실의 휴지가 자주 부족해요",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...",
    category: "건의",
  },
  {
    id: 5,
    title: "화장실의 휴지가 자주 부족해요",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...",
    category: "건의",
  },
  {
    id: 6,
    title: "화장실의 휴지가 자주 부족해요",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...",
    category: "건의",
  },
  {
    id: 7,
    title: "화장실의 휴지가 자주 부족해요",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...",
    category: "건의",
  },
  {
    id: 8,
    title: "화장실의 휴지가 자주 부족해요",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...",
    category: "건의",
  },
  {
    id: 9,
    title: "화장실의 휴지가 자주 부족해요",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...",
    category: "건의",
  },
  {
    id: 10,
    title: "화장실의 휴지가 자주 부족해요0",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...0",
    category: "건의",
  },
  {
    id: 11,
    title: "화장실의 휴지가 자주 부족해요1",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...1",
    category: "건의",
  },
  {
    id: 12,
    title: "화장실의 휴지가 자주 부족해요2",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...2",
    category: "건의",
  },
  {
    id: 13,
    title: "화장실의 휴지가 자주 부족해요3",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...3",
    category: "건의",
  },
  {
    id: 14,
    title: "화장실의 휴지가 자주 부족해요4",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...4",
    category: "건의",
  },
  {
    id: 15,
    title: "화장실의 휴지가 자주 부족해요5",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...5",
    category: "건의",
  },
  {
    id: 16,
    title: "화장실의 휴지가 자주 부족해요6",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...6",
    category: "건의",
  },
  {
    id: 17,
    title: "화장실의 휴지가 자주 부족해요7",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...7",
    category: "건의",
  },
  {
    id: 18,
    title: "화장실의 휴지가 자주 부족해요8",
    contents:
      "화장실에 휴지가 없어서 자주 불편합니다. 제발!!! 자주 확인하고 배치해주세요...7",
    category: "건의",
  },
];

const ListPage = () => {
  const [category, setCategory] = useState<Category>("전체보기");

  const categoryFilteredList = dataList.filter(
    (item) => category === "전체보기" || item.category === category
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
            defaultChecked
          />
          <CategoryRadio label="건의" onChange={() => setCategory("건의")} />
          <CategoryRadio
            label="학교폭력"
            onChange={() => setCategory("학교폭력")}
          />
          <CategoryRadio label="질문" onChange={() => setCategory("질문")} />
        </div>

        <hr className="bg-[#F6F6F6] h-[1px] border-0 mt-[32px]" />

        <div className="grid grid-cols-3 gap-x-2 gap-y-8 mt-[34px]">
          {categoryFilteredList.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`}
              className="bg-white border-solid border-[#EAEAEA] border-[1.5px] rounded-[15px]
                py-[30px] px-8 flex flex-col justify-between h-[280px] cursor-pointer"
            >
              <div>
                <p className="text-[28px] font-semibold">{item.title}</p>
                <p className="text-[20px] font-semibold mt-3">
                  {item.contents}
                </p>
              </div>
              <p className="text-[#2D9AFF] text-base font-semibold">
                {item.category}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
