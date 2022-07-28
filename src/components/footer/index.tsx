import React from "react";
import { Globe } from "phosphor-react";
import "../../index.css";

const Footer: React.FC = () => {
  return (
    <footer className="flex p-3 lg:px-10 m-auto max-w-[1360px] items-end justify-between">
      <div>
        <div className="flex flex-col">
          <Globe className="ml-2 text-purple-500 lg:hidden" size={32} />
          <div className="hidden lg:flex flex-col">
            <h1 className="mb-1">Mudar idioma</h1>
            <ul className="gap-3 flex">
              <li className="transition-all cursor-pointer hover:scale-105">
                <img src="images/Brazil.png" alt="" />
              </li>
              <li className="transition-all cursor-pointer hover:scale-105">
                <img src="images/USA.png" alt="" />
              </li>
              <li className="transition-all cursor-pointer hover:scale-105">
                <img src="images/Spain.png" alt="" />
              </li>
              <li className="transition-all cursor-pointer hover:scale-105">
                <img src="images/China.png" alt="" />
              </li>
              <li className="transition-all cursor-pointer hover:scale-105">
                <img src="images/Ukraine.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-3">
          <li className="transition-all cursor-pointer hover:scale-105">
            Suporte
          </li>
          <li className="transition-all cursor-pointer hover:scale-105">
            Newsletter
          </li>
          <li className="transition-all cursor-pointer hover:scale-105">
            Doar
          </li>
          <li className="transition-all cursor-pointer hover:scale-105">
            Quem somos
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
