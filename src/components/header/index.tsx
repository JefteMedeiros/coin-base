import React from "react";
import { List } from "phosphor-react";

const Header: React.FC = () => {
  return (
    <div className="pt-6 flex m-auto max-w-[1360px] px-4 lg:px-10 justify-between items-center">
      <a className="w-[7.5rem] sm:w-auto" href="#">
        <img
          className="hover:cursor-pointer hover:animate-pulse"
          src="images/coin-base.svg"
          alt="Coin Base Logo"
        />
      </a>
      <ul className="flex gap-[2.625rem] items-center">
        <li className="hidden xl:block hover:scale-105 transition-all">
          <a href="#">
            Página principal
          </a>
        </li>
        <li className="hidden xl:block hover:scale-105 transition-all">
          <a href="#">
            Cotações
          </a>
        </li>
        <li className="hidden xl:block hover:scale-105 transition-all">
          <a href="#">
            Tendencias
          </a>
        </li>
        <li className="hidden xl:block ring-offset-4 ring-offset-background-primary ring-purple-500 hover:ring-2 rounded-md transition-all">
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

export default Header;
