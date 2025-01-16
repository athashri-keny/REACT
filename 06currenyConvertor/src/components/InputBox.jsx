import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white p-4 rounded-lg text-sm flex flex-col md:flex-row items-center gap-4 shadow-md ${className}`}
    >
      {/* Amount Input Section */}
      <div className="w-full md:w-1/2">
        <label
          htmlFor={amountInputId}
          className="block text-gray-600 font-medium mb-1"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Selector Section */}
      <div className="w-full md:w-1/2">
        <label
          className="block text-gray-600 font-medium mb-1"
        >
          Currency Type
        </label>
        <select
          className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-gray-800 cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
