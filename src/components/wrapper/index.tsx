import React from 'react';
import WrapperLeft from './wrapper-left';
import WrapperRight from './wrapper-right';
import '../../index.css';

const Wrapper: React.FC = () => {
  return (
    <div className="flex flex-col items-center xl:items-start xl:flex-row justify-between min-h-[31.25rem] mt-[3rem] xl:mt-[6rem] mx-10 xl:mx-[4.375rem]">
      <WrapperLeft />
      <WrapperRight />
    </div>
  );
}

export default Wrapper;