import React from "react";

const header: React.FC = () => {
  return (
    <div className="mt-[2.5rem] mx-[4.375rem] flex justify-between">
      <img src="images/coin-base.svg" alt="Coin Base Logo" />
      <div className="flex gap-[1.625rem] items-center">
        <h1>Página principal</h1>
        <h1>Cotações</h1>
        <h1>Tendencias</h1>
        <button type="button" className="bg-purple-500 w-[9.25rem] h-[3.125rem] rounded-md">Ver mais</button>
      </div>
    </div>
  );
};

export default header;
