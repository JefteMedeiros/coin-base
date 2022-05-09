import React from "react";

const header: React.FC = () => {
  return (
    <div className="mt-[2.5rem] mx-[4.375rem] flex justify-between">
      <img src="images/coin-base.svg" alt="Coin Base Logo" />
      <ul className="flex gap-[2.625rem] items-center">
        <li className="hover:scale-110 transition-all"><a className="underline-offset-4 hover:underline" href="#">Página principal</a></li>
        <li className="hover:scale-110 transition-all"><a className="underline-offset-4 hover:underline" href="#">Cotações</a></li>
        <li className="hover:scale-110 transition-all"><a className="underline-offset-4 hover:underline" href="#">Tendencias</a></li>
        <li className="hover:scale-110 transition-all">
          <button
            type="button"
            className="bg-purple-500 w-[9.25rem] h-[3.125rem] rounded-md"
          >
            Ver mais
          </button>
        </li>
      </ul>
    </div>
  );
};

export default header;
