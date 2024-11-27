import React, { useState } from 'react';

function App() {
  const [catCount, setCatCount] = useState(0);
  const [dogCount, setDogCount] = useState(0);

  const totalCount = catCount + dogCount;
  const catPercentage = totalCount === 0 ? 50 : (catCount / totalCount) * 100;
  const dogPercentage = totalCount === 0 ? 50 : (dogCount / totalCount) * 100;

  if (false) {
    return (
      <div
        className={`
          flex items-center justify-center min-h-screen transition-all duration-500 
          bg-[linear-gradient(to_right,_green_${catPercentage}%,_blue_${dogPercentage}%)]
          `}
      // style={{
      //   background: `linear-gradient(to right, blue ${catPercentage}%, green ${catPercentage}%)`,
      // }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold underline text-blue-500">
            Which Pets Do You Like?
          </h1>


        </div>
      </div>
    );
  }
  return (
    <div className="flex h-screen w-screen translate-all duration-500">
      <div style={{ position: 'absolute' }}>
        <button
          onClick={() => setCatCount(catCount + 1)}
          className="bg-white  text-blue-700 font-bold py-2 px-4 rounded m-2 transition-transform transform hover:scale-110"
        >
          Cat ({catPercentage.toFixed(2)}%)
        </button>
        <button
          onClick={() => setDogCount(dogCount + 1)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 transition-transform transform hover:scale-110"
        >
          Dog ({dogPercentage.toFixed(2)}%)
        </button>

        <p className="text-xl font-semibold mt-4">
          Total Votes: {totalCount}
        </p>
      </div>

      {/* 綠色部分 */}
      <div
        style={{ flexBasis: `${catPercentage}%` }}
        className="bg-green-500"
      ></div>
      {/* 藍色部分 */}
      <div
        style={{ flexBasis: `${dogPercentage}%` }}
        className="bg-blue-500"
      ></div>
    </div>
  )
}

export default App;