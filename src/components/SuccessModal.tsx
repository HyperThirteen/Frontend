import CloseIcon from "./CloseIcon";
import SuccessIcon from "./SuccessIcon";

interface Props {
  title: string;
  close: () => void;
  isOpen: boolean;
}

const SuccessModal = ({ title, close, isOpen }: Props) => {
  return isOpen ? (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20 flex items-center justify-center">
      <div className="w-[320px] h-[210px] rounded-[15px] relative bg-white">
        <div className="w-full h-full flex flex-col gap-3.5 items-center justify-center">
          <p className="text-[20px] font-semibold text-center whitespace-pre-wrap">
            {title}
          </p>
          <SuccessIcon width={60} height={60} />
        </div>
        <CloseIcon
          width={16}
          height={16}
          onClick={close}
          className="absolute top-5 right-5"
          cursor="pointer"
        />
      </div>
    </div>
  ) : null;
};

export default SuccessModal;
