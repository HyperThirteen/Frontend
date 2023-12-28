import { useParams } from "react-router-dom";
import { useReportMutation } from "../services/letter/mutations";
import { useListQuery } from "../services/letter/queries";

const DetailPage = () => {
  const { id } = useParams();

  const { mutate: reportMutate } = useReportMutation();

  const handleClickReport = () => {
    id && reportMutate(id);
  };

  const { data: listData } = useListQuery();

  const filteredItem = listData?.filter((item) => item.id === Number(id))[0];

  return (
    <div className="overflow-auto">
      <div className="mx-auto max-w-[1000px] w-full mt-28">
        <p className="text-[40px] font-semibold">
          <span className="text-[#2D9AFF]">마음의 편지</span>를 작성해주세요.
        </p>
        <p className="text-[20px] font-semibold mt-3">
          자유롭게 작성하되, 타인에 대한 욕설 비방은 자제해 주세요.
        </p>

        <div className="mt-8 border-solid border-[#EAEAEA] bg-white border-[1.5px] rounded-[15px] p-[54px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <p className="text=[20px] font-semibold">
                해당하는 것을 <span className="text-[#2D9AFF]">모두</span>
                선택해 주세요
              </p>
              <div className="flex gap-6">
                <p className="text-[#2D9AFF] text-base font-semibold">
                  {filteredItem?.Category.c_name}
                </p>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <button
                className="text-[#FF2D60] border-solid border-[1px] rounded-[10px] px-[18px] py-[10px] text-[24px] font-semibold"
                onClick={handleClickReport}
              >
                신고하기
              </button>
            </div>
          </div>

          <hr className="bg-[#EAEAEA] h-[1px] border-0 mt-[26px]" />

          <p className="mt-[34px] text-[28px] font-semibold">
            {filteredItem?.title}
          </p>

          <p className="mt-8 resize-none text-[20px] font-semibold placeholder:text-[#CCCCCC] h-full min-h-96">
            {filteredItem?.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
