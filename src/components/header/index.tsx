import React from "react";
import { List } from 'phosphor-react';

const header: React.FC = () => {
  return (
    <div className="mt-[2.5rem] flex justify-between mx-[4.375rem]">
      <img src="images/coin-base.svg" alt="Coin Base Logo" />
      <ul className="flex gap-[2.625rem] items-center">
        <li className="hidden xl:block li-link-hover"><a className="a-link-hover" href="#">Página principal</a></li>
        <li className="hidden xl:block li-link-hover"><a className="a-link-hover" href="#">Cotações</a></li>
        <li className="hidden xl:block li-link-hover"><a className="a-link-hover" href="#">Tendencias</a></li>
        <li className="hidden xl:block li-link-hover">
          <button
            type="button"
            className="purple-button"
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
