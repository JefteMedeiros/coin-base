import React, { useEffect, useState } from "react";
import accounting from "accounting";
import { useForm } from "react-hook-form";
import { ArrowsLeftRight } from "phosphor-react";
import "../../index.css";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { apiService } from "../../services/api";

interface OperationProps {
  convert_from_currency: string;
  convert_to_currency: string;
  convert_from_value: number;
  convert_to_value: number;
}

const Wrapper: React.FC = () => {
  const [currencyCodes, setCurrencyCodes] = useState<any[]>([]);
  const [operation, setOperation] = useState<OperationProps>({
    convert_from_value: 0,
    convert_to_value: 0,
    convert_from_currency: "Moeda",
    convert_to_currency: "Moeda",
  });

  const getCurrencyCodes = async () => {
    const response = await apiService.get("/codes");
    const data = response.data;
    const currencies: string[] = [];

    data.supported_codes.forEach((code: any) => {
      currencies.push(code[0]);
    });

    setCurrencyCodes(currencies);
  };

  useEffect(() => {
    getCurrencyCodes();
  }, []);

  const operationSchema = z.object({
    convert_from_currency: z.string(),
    convert_to_currency: z.string(),
    convert_from_value: z
      .number()
      .min(1, "O valor deve estar entre 1 e 999.999.999")
      .max(999999999, "O valor deve estar entre 1 e 999.999.999"),
    convert_to_value: z.number(),
  });

  type OperationFormData = z.infer<typeof operationSchema>;

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(operationSchema),
    defaultValues: {
      convert_from_value: 0,
      convert_to_value: 0,
      convert_from_currency: "",
      convert_to_currency: "",
    },
  });

  const handleConvert = async (data: OperationFormData) => {
    const response = await apiService.get(
      `/pair/${data.convert_from_currency}/${data.convert_to_currency}`
    );
    const responseData = await response.data;
    const newOperation: OperationProps = {
      convert_from_currency: data.convert_from_currency,
      convert_to_currency: data.convert_to_currency,
      convert_from_value: data.convert_from_value,
      convert_to_value: data.convert_from_value * responseData.conversion_rate,
    };
    console.log(newOperation.convert_to_value);
    console.log(responseData.conversion_rate);
    setOperation(newOperation);
  };

  return (
    <div className="flex mt-0 min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-10.5625rem)] xl:min-h-[calc(100vh-11.6875rem)] px-4 lg:px-10 m-auto max-w-[1360px] lg:mt-10 items-center lg:items-start flex-col lg:flex-row justify-center lg:justify-between">
      <div className="flex flex-col w-full max-w-[31.25rem] text-center xl:text-left mb-10 xl:mb-0 justify-start xl:mt-6">
        <h1 className="hidden lg:block mb-10 bg-purple-600 px-5 py-2 rounded-full self-start">
          Praticidade e agilidade
        </h1>
        <h1 className="text-center lg:text-left text-[2rem] lg:text-[3rem] xl:text-[4rem] xl:leading-[5rem]">
          A sua plataforma de conversões
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(handleConvert)}
        className="w-full py-8 max-w-[31.25rem] mb-10 px-5 xl:px-16 bg-background-secondary border-purple-400 border-2 rounded-[1.5rem]"
      >
        <div className="flex flex-col gap-10 space-between">
          <div>
            <label htmlFor="main_exchange">Valor</label>
            <div className="mt-2 flex">
              <div className="w-full">
                <input
                  type="number"
                  required
                  className="px-[1.25rem] block w-full bg-background-primary min-h-[3rem] rounded-[0.625rem]"
                  {...register("convert_from_value", { valueAsNumber: true })}
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
                  {...register("convert_from_currency")}
                >
                  <option defaultValue={"Moeda"} disabled hidden>
                    Moeda
                  </option>
                  {currencyCodes.map((currency) => {
                    return (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    );
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
                  {...register("convert_to_currency")}
                >
                  <option defaultValue={"Moeda"} hidden disabled>
                    Moeda
                  </option>
                  {currencyCodes.map((currency) => {
                    return (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 justify-center items-center sm:flex-row font-bold font-[Roboto] tracking-widest mb-4 text-sm">
          <h1>
            {accounting.formatMoney(operation.convert_from_value, {
              symbol: operation.convert_from_currency,
              format: "%v %s",
            })}
          </h1>
          <h1>=</h1>
          <h1>
            {accounting.formatMoney(operation.convert_to_value, {
              symbol: operation.convert_to_currency,
              format: "%v %s",
            })}
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="px-10 w-full rounded-xl block min-h-[3.9375rem] text-[1.25rem] font-[400] bg-purple-500 transition-all ring-offset-4 ring-offset-background-primary ring-purple-500 hover:ring-2"
          >
            Fazer Conversão
          </button>
        </div>
      </form>
    </div>
  );
};

export default Wrapper;
