import { Globe, GlobeStand } from "phosphor-react";
import React from "react";
import "../../index.css";

const footer: React.FC = () => {
  const date = new Date();

  return (
    <footer className="flex sticky items-center p-3 justify-between top-[100%] w-full">
      <div>
        <div className="flex flex-col">
        <Globe
          className="ml-2 text-purple-500 xl:hidden"
          size={32}
        />
          <div className="hidden xl:flex flex-col">
            <h1 className="mb-1">Mudar idioma</h1>
            <ul className="gap-3 flex">
              <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">
                <img src="images/Brazil.png" alt="" />
              </li>
              <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">
                <img src="images/USA.png" alt="" />
              </li>
              <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">
                <img src="images/Spain.png" alt="" />
              </li>
              <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">
                <img src="images/China.png" alt="" />
              </li>
              <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">
                <img src="images/Ukraine.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <h1 className="">
          &copy; <span className="text-[#f5c92d]">Coin</span> base 2022
        </h1>
      </div>
      <div className="hidden xl:block">
        <ul className="flex gap-3">
          <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">
            Suporte
          </li>
          <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">
            Newsletter
          </li>
          <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">
            Doar
          </li>
          <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">
            Quem somos
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default footer;
