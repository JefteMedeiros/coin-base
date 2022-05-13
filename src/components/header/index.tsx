import React from "react";
import { List } from 'phosphor-react';

const header: React.FC = () => {
  return (
    <div className="mt-10 flex justify-between mx-10 xl:mx-[4.375rem]">
      <img className="hover:cursor-pointer hover:scale-110" src="images/coin-base.svg" alt="Coin Base Logo" />
      <ul className="flex gap-[2.625rem] items-center">
        <li className="hidden xl:block hover:scale-110 transition-all"><a className="hover:underline-offset-4 hover:underline" href="#">Página principal</a></li>
        <li className="hidden xl:block hover:scale-110 transition-all"><a className="hover:underline-offset-4 hover:underline" href="#">Cotações</a></li>
        <li className="hidden xl:block hover:scale-110 transition-all"><a className="hover:underline-offset-4 hover:underline" href="#">Tendencias</a></li>
        <li className="hidden xl:block hover:scale-110 transition-all">
          <button
            type="button"
            className="bg-purple-500 w-[9.25rem] h-[3.125rem] rounded-md"
          >
            Ver mais
          </button>
        </li>
        <List className="text-purple-500 xl:hidden" size={32} />
      </ul>
    </div>
  );
};

export default header;
