import { ChoiceButton, ConverterButton } from "./components/button";
import { useState } from "react";
import { ConvertTemp } from "./utils/converter";
import { Result } from "postcss";

function App() {
  const [currMenu, setCurrMenu] = useState('temperature')
  const [fromUnit, setFromUnit] = useState('celsius');
  const [toUnit, setToUnit] = useState('fahrenheit');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  function handleConvertTemperature() {
    setResult(ConvertTemp(inputValue, fromUnit, toUnit));
  }


  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
      <div className="space-y-16 w-full max-w-md bg-slate-800/80 border border-slate-700 rounded-xl p-6 shadow-lg">

        {/*-------------------------Main Menu-----------------------------*/}

        <h1 className="text-2xl font-semibold mb-4 text-center">
          Unit Converter
        </h1>
        <p className="text-sm text-slate-400 mb-6 text-center">
          Start by choosing what you want to convert.
        </p>

        <div className="flex justify-between">
          <ChoiceButton onChoice={() => setCurrMenu('length')} classItem={"cursor-pointer text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5"}>Length</ChoiceButton>
          <ChoiceButton onChoice={() => setCurrMenu('temperature')} classItem={"cursor-pointer text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5"}>Temperature</ChoiceButton>
          <ChoiceButton onChoice={() => setCurrMenu('weigth')} classItem={"cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5"}>Weigth</ChoiceButton>
        </div>

        {/*----------------------Length Converter------------------------*/}

        {currMenu === 'length' && (
          <div>

          </div>
        )}

        {/*----------------------Temperature Converter------------------------*/}

        {currMenu === 'temperature' && (
          <div>
            <div className="mb-4 space-y-2">
              <h1>Tempreature Converter</h1>
              <p>Select the units to convert</p>
            </div>
            {/*----- Dropdownds----- */}
            <div className="flex">
              <div className="flex items-center gap-4">
                <label htmlFor="temp-unit1">From</label>
                <select id="temp-unit1" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="bg-slate-700 text-white border border-slate-600 rounded-lg px-4 py-2">
                  <option value={"celsius"}>Celsius</option>
                  <option value={"fahrenheit"}>Fahrenheit</option>
                  <option value={"kelvin"}>Kelvin</option>
                </select>
              </div>
              <div className="flex items-center gap-8 ml-8">
                <label htmlFor="temp-unit2">To</label>
                <select id="temp-unit2" value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="bg-slate-700 text-white border border-slate-600 rounded-lg px-4 py-2">
                  <option value={"celsius"}>Celsius</option>
                  <option value={"fahrenheit"}>Fahrenheit</option>
                  <option value={"kelvin"}>Kelvin</option>
                </select>
              </div>
            </div>
            {/*------Input Value------- */}

            <div className="mt-4">
              <input id="temp-value" type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Value to convert" className="w-full bg-slate-700 text-white border border-slate-600 rounded-lg px-4 py-2" />
            </div>
            {/*------Converter Button-------- */}
            <div>
              <ConverterButton
                onClick={handleConvertTemperature}
                className={"w-full mt-4 cursor-pointer text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5"}>
                Convert
              </ConverterButton>
            </div>
            {/*------Result------- */}
            <div className="mt-4 p-3 rounded-lg bg-slate-700 border border-slate-600">
              <span className="font-semibold text-white">
                {result === '' ? 'Result will show here' : result}
              </span>
            </div>
          </div>
        )}

        {/*----------------------Weigth Converter------------------------*/}

        {currMenu === 'weigth' && (
          <div>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;