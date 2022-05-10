import React from "react";
import "../../index.css";

const footer: React.FC = () => {
  const d = new Date();

  return (
    <footer className="flex justify-between">
      <img className="hidden xl:block absolute bottom-0" src="images/canva-left.png" alt="Imagem footer esquerda" />
      <img className="hidden xl:block absolute bottom-0 right-0" src="images/canva-right.png" alt="Imagem footer direita" />
      <div className="absolute bottom-3 left-5">
        <h1 className="mb-1 text-lg">Mudar idioma</h1>
        <ul className="flex gap-3">
          <li className="li-link-hover">
            <img src="images/Brazil.png" alt="Brazil flag" />
          </li>
          <li className="li-link-hover">
            <img src="images/USA.png" alt="USA flag" />
          </li>
          <li className="li-link-hover">
            <img src="images/Spain.png" alt="Spain flag" />
          </li>
          <li className="li-link-hover">
            <img src="images/Ukraine.png" alt="Ukraine flag" />
          </li>
          <li className="li-link-hover">
            <img src="images/China.png" alt="China flag" />
          </li>
        </ul>
      </div>

      <div className="absolute flex w-full justify-center bottom-3">
        <h1 className="text-lg">© Coin Base {d.getFullYear()}</h1>
      </div>
        <ul className="flex gap-5 absolute bottom-3 right-3 xl:right-20">
          <li className="li-link-hover">
            <a className="a-link-hover" href="#">
              Suporte
            </a>
          </li>
          <li className="li-link-hover">
            <a className="a-link-hover" href="#">
              Newsletter
            </a>
          </li>
          <li className="li-link-hover">
            <a className="a-link-hover" href="#">
              Doar
            </a>
          </li>
          <li className="li-link-hover">
            <a className="a-link-hover" href="#">
              Quem somos
            </a>
          </li>
        </ul>
    </footer>
  );
};

export default footer;
