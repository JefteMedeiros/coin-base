import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowsLeftRight } from "phosphor-react";
import "../../index.css";
import { apiService } from "../../services/api";
import { data } from "../../mock";

const Wrapper: React.FC = () => {
  const [currencyCodes, setCurrencyCodes] = useState<any[]>([]);
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");

  useEffect(() => {
    const currencies: string[] = []

    data.supported_codes.forEach((code) => {
      currencies.push(code[0]);
    });

    setCurrencyCodes(currencies)
  }, [])

  const convert = async (fromCurrency: string, toCurrency: string, fromValue: number) => {
    const response = await apiService.get(`/pair/${fromCurrency}/${toCurrency}`);
    const data = response.data;
    setToValue(fromValue * data.conversion_rate)
  }

  const {register, handleSubmit} = useForm({
    defaultValues: {
      value: 0,
      firstCurrency: "USD",
      secondCurrency: "BRL"
    }
  })

  const handleConvert = () => {
    
  }

  return (
    <div className="flex mt-0 min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-10.5625rem)] xl:min-h-[calc(100vh-11.6875rem)] px-10 m-auto max-w-[1360px] lg:mt-10 items-center lg:items-start flex-col lg:flex-row justify-end sm:justify-center lg:justify-between">
      <div className="flex flex-col w-full max-w-[31.25rem] text-center xl:text-left mb-10 xl:mb-0 justify-start xl:mt-6">
        <h1 className="hidden lg:block mb-10 bg-purple-600 px-5 py-2 rounded-full self-start">
          Praticidade e agilidade
        </h1>
        <h1 className="text-center lg:text-left text-[2rem] lg:text-[3rem] xl:text-[4rem] xl:leading-[5rem]">
          A sua plataforma de conversões
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleConvert)} className="w-full py-8 max-w-[31.25rem] mb-10 px-5 xl:px-16 bg-background-secondary border-purple-400 border-2 rounded-[1.5rem]">
        <div className="flex flex-col gap-10 space-between">
          <div>
            <div className="mb-2">
              <label htmlFor="main_exchange">Valor</label>
            </div>
            <div className="flex">
              <div className="w-full">
                <input
                  className="px-[1.25rem] block w-full bg-background-primary min-h-[3rem] rounded-[0.625rem]"
                  type="number"
                  {...register("value", {valueAsNumber: true})}
                  placeholder="0,00"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 justify-between mb-6">
              <div className="flex-1">
                <label>De</label>
                <select
                  className="px-1 block w-full bg-background-primary h-[3rem] rounded-[0.625rem]"
                  {...register("firstCurrency")}
                >
                  <option hidden disabled>
                    Moeda
                  </option>
                  {currencyCodes.map(currency => {
                    return (
                      <option key={currency} value={currency}>{currency}</option>
                    )
                  })}
                </select>
              </div>
              <div className="mt-5">
                <ArrowsLeftRight size={32} />
              </div>
              <div className="flex-1">
                <label>Para</label>
                <select
                  className="px-1 block w-full bg-background-primary h-[3rem] rounded-[0.625rem]"
                  defaultValue="Moeda"
                  {...register("secondCurrency")}
                >
                  <option hidden disabled>
                    Moeda
                  </option>
                  {currencyCodes.map(currency => {
                    return (
                      <option key={currency} value={currency}>{currency}</option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold font-[Roboto] tracking-widest mb-4 text-md">
          {fromValue} {fromCurrency} = {toValue} {toCurrency} 
        </div>
        <div className="w-full flex justify-center">
          <button onClick={() => convert(fromCurrency, toCurrency, fromValue)} className="px-10 w-full uppercase rounded-xl block min-h-[3.9375rem] text-[1.25rem] font-[400] bg-purple-500 transition-all ring-offset-4 ring-offset-background-primary ring-purple-500 hover:ring-2">
            fazer conversão
          </button>
        </div>
      </form>
    </div>
  );
};

export default Wrapper;
