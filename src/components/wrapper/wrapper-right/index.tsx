import React from "react";
import "../../../index.css";

const WrapperRight: React.FC = () => {
  return (
    <div className="w-full py-8 max-w-[31.25rem] px-9 xl:px-16 bg-background-secondary border-purple-400 border-2 rounded-[1.5rem]">
      <div className="mb-2">
        <label htmlFor="main_exchange">Moeda principal</label>
      </div>
      <div className="flex mb-6">
        <div className="w-[75%] pr-2">
          <input
            className="px-[1.25rem] block w-full bg-background-primary min-h-[3rem] rounded-[0.625rem]"
            type="text"
            id="main_exchange"
            placeholder="0,0"
          />
        </div>
        <div className="w-[25%] mb-20">
          <select
            className="px-1 block w-full bg-background-primary h-[3rem] rounded-[0.625rem]"
            name="currency"
            id="currency"
          >
            <option value="BRL">BRL</option>
            <option value="BRL">BRL</option>
            <option value="BRL">BRL</option>
          </select>
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="main_exchange">Quantia convertida</label>
      </div>
      <div className="flex mb-6">
        <div className="w-[75%] pr-2">
          <input
            className="px-[1.25rem] block w-full bg-background-primary min-h-[3rem] rounded-[0.625rem]"
            type="text"
            id="main_exchange"
            placeholder="0,0"
          />
        </div>
        <div className="w-[25%]">
          <select
            className="px-1 block w-full bg-background-primary h-[3rem] rounded-[0.625rem]"
            name="currency"
            id="currency"
          >
            <option value="USD">USD</option>
            <option value="USD">USD</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="px-10 w-full max-w-[20.625rem] rounded-[0.625rem] block min-h-[3.9375rem] text-[1.25rem] font-[400] bg-purple-500 hover:scale-105 transition-all">FAZER CONVERSÃO</button>
      </div>
    </div>
  );
};

export default WrapperRight;
