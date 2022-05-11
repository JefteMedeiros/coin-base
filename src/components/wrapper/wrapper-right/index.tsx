import React from "react";
import "../../../index.css";

const WrapperRight: React.FC = () => {
  return (
    <div className="wrapper-right-container">
      <div className="wrapper-right-box">
        <div className="right-box-inputs">
          <div className="flex gap-8 w-full justify-center">
            <input
              className="px-[21px] bg-background-primary w-[335px] min-w-[177px] h-[3rem] rounded-[10px]"
              type="text"
              placeholder="0,0"
            />
            <select
              className="px-[21px] self-end bg-background-primary w-[177px] min-w-[95px] h-[3rem] rounded-[10px]"
              name="currency"
              id="currency"
            >
              <option value="BRL">BRL</option>
              <option value="BRL">BRL</option>
              <option value="BRL">BRL</option>
            </select>
          </div>
          <div className="flex gap-8 w-full justify-center">
            <div>
            <label htmlFor="">Teste</label>
            <input
              className="px-[21px] bg-background-primary w-[335px] min-w-[177px] h-[3rem] rounded-[10px]"
              type="text"
              placeholder="0,0"
            />
            </div>
            
            <select
              className="px-[21px] self-end bg-background-primary w-[177px] min-w-[95px] h-[3rem] rounded-[10px]"
              name="currency"
              id="currency"
            >
              <option value="BRL">BRL</option>
              <option value="BRL">BRL</option>
              <option value="BRL">BRL</option>
            </select>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="wrapper-right-button">FAZER CONVERSÃO</button>
        </div>
      </div>
    </div>
  );
};

export default WrapperRight;
