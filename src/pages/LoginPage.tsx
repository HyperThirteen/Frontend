const LoginPage = () => {
  return (
    <div className="w-screen h-screen bg-[#4E4E4E] flex items-center justify-center">
      <div className="w-[880px] h-[294px] rounded-[20px] bg-[#EAEAEA] flex flex-col items-center justify-between pt-[44px] pb-[78px]">
        <p className=" text-[45px] font-semibold">마음의 소리</p>
        <button className="py-[30px] gap-8 bg-white rounded-[20px] w-[560px] flex items-center justify-center">
          <img src="/bsm.png" alt="bsm" />
          <p className="text-[32px] font-semibold">BSM 계정으로 로그인하기</p>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
