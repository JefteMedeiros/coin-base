import React from 'react';

const WrapperRight: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center min-h-[30.875rem] border-purple-400 border-2 bg-background-secondary w-[37.5rem] rounded-[1.5rem]">
        <div className='flex flex-col gap-[8.75rem] mt-[45px]'>
          <div>
            <h1 className='text-[1.125rem]'>Moeda principal</h1>
            <input className="min-h-[48px] px-5 w-[335px] mt-2 bg-background-primary rounded-[0.625rem]" type="text" placeholder='0,00'/>
            <select className="min-h-[48px] px-5 w-[177px] mt-2 ml-8 bg-background-primary rounded-[0.625rem]" name="exchange" id="exchange">
              <option value="BRL">BRL</option>
              <option value="BRL">BRL</option>
              <option value="BRL">BRL</option>
            </select>
          </div>
          <div>
            <h1 className='text-[1.125rem]'>Quantia convertida</h1>
            <input className="min-h-[48px] px-5 w-[335px] mt-2 bg-background-primary rounded-[0.625rem]" type="text" placeholder='0,00'/>
            <select className="min-h-[48px] px-5 w-[177px] mt-2 ml-8 bg-background-primary rounded-[0.625rem]" name="exchange" id="exchange">
              <option value="USD">USD</option>
              <option value="USD">USD</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
        <button className="rounded-[0.625rem] mb-8 w-[20.6875rem] min-h-[3.9375rem] text-[1.25rem] font-[400] bg-purple-500 hover:scale-110 transition-all">FAZER CONVERSÃO</button>
      </div>
    </>  
  );
}

export default WrapperRight;