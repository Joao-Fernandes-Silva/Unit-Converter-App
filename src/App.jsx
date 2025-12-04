import { ChoiceButton } from "./components/button";
import { useState } from "react";

function App() {
  const [currMenu, setCurrMenu] = useState('temperature')
  const [unit, setUnit] = useState('celsius');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
      <div className="space-y-16 w-full max-w-md bg-slate-800/80 border border-slate-700 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Unit Converter
        </h1>
        <p className="text-sm text-slate-400 mb-6 text-center">
          Start by choosing what you want to convert.
        </p>
        <div className="flex justify-between">
          <ChoiceButton onChoice={() => setCurrMenu('length')}>Length</ChoiceButton>
          <ChoiceButton onChoice={() => setCurrMenu('temperature')} >Temperature</ChoiceButton>
          <ChoiceButton onChoice={() => setCurrMenu('weigth')}>Weigth</ChoiceButton>
        </div>
        {currMenu === 'length' && (
          <div>

          </div>
        )}

        {currMenu === 'temperature' && (
          <div>
            <div className="mb-4 space-y-2">
              <h1>Tempreature Converter</h1>
              <p>Select the units to convert</p>
            </div>
            <div className="justify">
              <div>
                <label htmlFor="temp-unit1">From</label>
                <select id="temp-unit1" value={unit} onChange={(e) => setUnit(e.target.value)}>
                  <option value={"celsius"}>Celsius</option>
                  <option value={"fahrenheit"}>Fahrenheit</option>
                  <option value={"kelvin"}>Kelvin</option>
                </select>
              </div>
              <div>
                <label htmlFor="temp-unit1">From</label>
                <select id="temp-unit1" value={unit} onChange={(e) => setUnit(e.target.value)}>
                  <option value={"celsius"}>Celsius</option>
                  <option value={"fahrenheit"}>Fahrenheit</option>
                  <option value={"kelvin"}>Kelvin</option>
                </select>
              </div>
            </div>
            <div>

            </div>
          </div>
        )}

        {currMenu === 'weigth' && (
          <div>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;