import { useMutation } from "@tanstack/react-query";
import { useOverlay } from "@toss/use-overlay";
import { axiosInstance } from "../../apis/instance";
import SuccessModal from "../../components/SuccessModal";

type PostLetterData = {
  s_id: string;
  title: string;
  content: string;
  c_id: string;
};

const usePostLetterMutation = () => {
  const overlay = useOverlay();

  return useMutation({
    mutationFn: async (postData: PostLetterData) => {
      console.log(postData);
      const { data } = await axiosInstance.post("/letter", postData);
      console.log(data);
      return data;
    },
    onSuccess() {
      overlay.open(({ close, isOpen }) => (
        <SuccessModal
          isOpen={isOpen}
          title={`마음의 편지가\n전송이 되었어요!`}
          close={close}
        />
      ));
    },
  });
};

export default usePostLetterMutation;
