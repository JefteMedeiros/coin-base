import React from "react";

const header: React.FC = () => {
  return (
    <div className="mt-[2.5rem] mx-[4.375rem] flex justify-between">
      <img src="images/coin-base.svg" alt="Coin Base Logo" />
      <ul className="flex gap-[2.625rem] items-center">
        <li className="li-link-hover"><a className="a-link-hover" href="#">Página principal</a></li>
        <li className="li-link-hover"><a className="a-link-hover" href="#">Cotações</a></li>
        <li className="li-link-hover"><a className="a-link-hover" href="#">Tendencias</a></li>
        <li className="li-link-hover">
          <button
            type="button"
            className="purple-button"
          >
            Ver mais
          </button>
        </li>
      </ul>
    </div>
  );
};

export default header;
