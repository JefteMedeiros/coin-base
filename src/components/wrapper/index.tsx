import React from 'react';
import WrapperLeft from './wrapper-left';
import WrapperRight from './wrapper-right';
import '../../index.css';

const Wrapper: React.FC = () => {
  return (
    <div className="wrapper-container">
      <WrapperLeft />
      <WrapperRight />
    </div>
  );
}

export default Wrapper;