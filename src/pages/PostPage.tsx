import { useRef } from "react";
import CategoryRadio from "../components/CategoryRadio";

const PostPage = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  return (
    <div className="overflow-auto">
      <div className="mx-auto max-w-[1000px] w-full mt-28">
        <p className="text-[40px] font-semibold">
          <span className="text-[#2D9AFF]">마음의 소리</span>를 작성해주세요.
        </p>
        <p className="text-[20px] font-semibold mt-3">
          자유롭게 작성하되, 타인에 대한 욕설 비방은 자제해 주세요.
        </p>

        <div className="mt-8 border-solid border-[#EAEAEA] bg-white border-[1.5px] rounded-[15px] p-[54px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <p className="text=[20px] font-semibold">
                해당하는 것을 <span className="text-[#2D9AFF]">모두</span>{" "}
                선택해 주세요
              </p>
              <div className="flex gap-6">
                <CategoryRadio label="건의" />
                <CategoryRadio label="학교폭력" />
                <CategoryRadio label="질문" />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <button className="text-[#2D9AFF] border-solid border-[1px] rounded-[10px] px-[18px] py-[10px] text-[24px] font-semibold">
                전송하기
              </button>
              <button className="text-[#515151] text-[24px] font-semibold">
                임시저장
              </button>
            </div>
          </div>

          <hr className="bg-[#EAEAEA] h-[1px] border-0 mt-[26px]" />

          <input
            className="mt-[34px] text-[28px] font-semibold placeholder:text-[#CCCCCC] w-full"
            placeholder="제목"
          />
          <textarea
            ref={textareaRef}
            className="mt-8 resize-none text-[20px] font-semibold placeholder:text-[#CCCCCC] w-full h-full min-h-96"
            placeholder="마음의 소리를 작성하세요."
            onChange={handleResizeHeight}
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
