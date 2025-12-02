function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-800/80 border border-slate-700 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Unit Converter
        </h1>
        <p className="text-sm text-slate-400 mb-6 text-center">
          Start by choosing what you want to convert.
        </p>
        <div className="">
          <button>Temperature</button>
          <button>Lenght</button>
          <button>Weight</button>
        </div>
      </div>
    </div>
  );
}

export default App;