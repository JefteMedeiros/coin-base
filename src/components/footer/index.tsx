import { Globe } from "phosphor-react";
import React from "react";
import "../../index.css";

const footer: React.FC = () => {
  const d = new Date();

  return (
    <>
      <footer className="absolute bottom-0 w-full">
        <Globe
          className="absolute bottom-2 left-2 text-purple-500 xl:hidden"
          size={32}
        />
        <div className="flex w-full justify-center xl:justify-between">
          <div className="hidden xl:block relative">
            <img src="images/canva-left.png" alt="" />
            <div className="flex flex-col absolute bottom-3 left-4">
              <h1 className="mb-1">Mudar idioma</h1>
              <ul className="flex gap-3">
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
          <div className="self-end">
            <h1 className="mb-3">
              &copy; <span className="text-[#f5c92d]">Coin</span> base 2022
            </h1>
          </div>
          <div className="hidden xl:flex flex-col self-end">
            <img src="images/canva-right.png" alt="" />
            <div className="absolute bottom-3 right-20">
              <ul className="flex gap-3">
                <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">Suporte</li>
                <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">Newsletter</li>
                <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">Doar</li>
                <li className="hover:underline transition-all underline-offset-2 cursor-pointer hover:scale-105">Quem somos</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
