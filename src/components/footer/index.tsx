import React from 'react';

const footer: React.FC = () => {
  return (
    <>
      <div className='absolute bottom-0'>
        <img src="images/canva-left.png" alt="" />
      </div>
      <div className='absolute bottom-0 right-0'>
        <img src="images/canva-right.png" alt="" />
      </div>
    </>
  );
}

export default footer;