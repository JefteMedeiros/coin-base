import React from 'react';
import WrapperLeft from './wrapper-left';
import WrapperRight from './wrapper-right';

const Wrapper: React.FC = () => {
  return (
    <div className="flex justify-between min-h-[31.25rem] mt-[1rem] xl:mt-[6rem] mx-[4.375rem]">
      <WrapperLeft />
      <WrapperRight />
    </div>
  );
}

export default Wrapper;