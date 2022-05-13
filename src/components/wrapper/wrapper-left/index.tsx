import React from "react";

const WrapperLeft: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[31.25rem] text-center xl:text-left mb-10 xl:mb-0 justify-start xl:mt-6">
        <h1 className="bg-purple-600 px-5 py-2 rounded-full self-start">
          Praticidade e agilidade
        </h1>
        <h1 className="text-left text-3xl xl:text-[4rem] xl:leading-[5rem] mt-[4.6875rem]">
          A sua plataforma de conversões
        </h1>
      </div>
    </>
  );
};

export default WrapperLeft;
