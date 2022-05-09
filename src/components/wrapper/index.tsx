import React from 'react';
import WrapperLeft from './wrapper-left';
import WrapperRight from './wrapper-right';

const Wrapper: React.FC = () => {
  return (
    <div className="flex justify-between h-[500px] mx-[4.375rem]">
      <WrapperLeft />
      <WrapperRight />
    </div>
  );
}

export default Wrapper;