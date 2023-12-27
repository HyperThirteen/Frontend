import { useOverlay } from "@toss/use-overlay";
import CategoryRadio from "../components/CategoryRadio";
import SuccessModal from "../components/SuccessModal";

const DetailPage = () => {
  const overlay = useOverlay();

  const handleClickReport = () => {
    overlay.open(({ close, isOpen }) => (
      <SuccessModal
        isOpen={isOpen}
        title={` 부적절한 글이\n신고되었어요!`}
        close={close}
      />
    ));
  };

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
                <CategoryRadio label="건의" />
                <CategoryRadio label="학교폭력" />
                <CategoryRadio label="질문" />
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
            아침운동, 원하는 사람들만으로 운영되었으면 합니다.
          </p>

          <p className="mt-8 resize-none text-[20px] font-semibold placeholder:text-[#CCCCCC] h-full min-h-96">
            아침운동으로 스트레스를 받는 친구들이 많습니다. 또한 아침운동이
            없이도 블라블라블라라
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
