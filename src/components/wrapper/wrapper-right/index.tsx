import React, { useEffect, useState } from "react";
import "../../../index.css";
import api from "../../../services/api";

interface CurrencyProps {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  ask: string;
  bid: string;
  createDate: string;
  pctChange: string;
  timeStamp: string;
  varBid: string;
}

interface Currencies {
  BTCBRL: CurrencyProps;
  USDBRL: CurrencyProps;
  EURBRL: CurrencyProps;
}

const WrapperRight: React.FC = () => {
  const [currency, setCurrency] = useState<Currencies>();
  const [mainCurrency, setMainCurrency] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState("");
  const [firstValue, setFirstValue] = useState<Number>();
  const [secondValue, setSecondValue] = useState<Number>();
  
  const currencyConverter = (
    mainCurrency: number,
    convertedCurrency: number,
    firstValue: number,
    secondValue: number
  ) => {
    if (mainCurrency > convertedCurrency) {
      return alert((mainCurrency * firstValue) * (convertedCurrency * secondValue));
    } else {
      return alert((mainCurrency * firstValue) / (convertedCurrency * secondValue));
    }
  };

  api
    .get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL")
    .then(({ data }) => {
      setCurrency(data);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div className="w-full py-8 max-w-[31.25rem] mb-10 px-5 xl:px-16 bg-background-secondary border-purple-400 border-2 rounded-[1.5rem]">
      <div className="mb-2">
        <label htmlFor="main_exchange">Moeda principal</label>
      </div>
      <div className="flex mb-6">
        <div className="w-[75%] pr-2">
          <input
            className="px-[1.25rem] block w-full bg-background-primary min-h-[3rem] rounded-[0.625rem]"
            type="text"
            onChange={(e) => setSecondValue(e.target.value as unknown as number)}
            id="main_exchange"
            placeholder="0,0"
          />
        </div>
        <div className="w-[25%] mb-20">
          <select
            className="px-1 block w-full bg-background-primary h-[3rem] rounded-[0.625rem]"
            id="currency"
            defaultValue="Moeda"
            onChange={(e) => setMainCurrency(e.target.value)}
          >
            <option hidden disabled>
              Moeda
            </option>
            <option value={currency?.USDBRL.bid}>USD</option>
            <option value="1">BRL</option>
            <option value={currency?.BTCBRL.low}>BTC</option>
          </select>
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="main_exchange">Quantia convertida</label>
      </div>
      <div className="flex mb-6">
        <div className="w-[75%] pr-2">
          <input
            className="px-[1.25rem] block w-full bg-background-primary min-h-[3rem] rounded-[0.625rem]"
            type="text"
            id="main_exchange"
            onChange={(e) => setFirstValue(e.target.value as unknown as number)}
            placeholder="0,0"
          />
        </div>
        <div className="w-[25%]">
          <select
            className="px-1 block w-full bg-background-primary h-[3rem] rounded-[0.625rem]"
            id="currency"
            defaultValue="Moeda"
            onChange={(e) => setConvertedCurrency(e.target.value)}
          >
            <option hidden disabled>
              Moeda
            </option>
            <option value="USD">USD</option>
            <option value="USD">BRL</option>
            <option value="USD">BTC</option>
          </select>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => currencyConverter(mainCurrency as unknown as number, convertedCurrency as unknown as number, firstValue as unknown as number, secondValue as unknown as number)}
          className="px-10 w-full max-w-[20.625rem] rounded-[0.625rem] block min-h-[3.9375rem] text-[1.25rem] font-[400] bg-purple-500 hover:scale-105 transition-all"
        >
          FAZER CONVERSÃO
        </button>
      </div>
    </div>
  );
};

export default WrapperRight;
