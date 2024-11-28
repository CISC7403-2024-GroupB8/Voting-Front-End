import React, { useState } from 'react';

function App() {
  const [catCount, setCatCount] = useState(0);
  const [dogCount, setDogCount] = useState(0);
  const [isCatHovered, setIsCatHovered] = useState(false);
  const [isDogHovered, setIsDogHovered] = useState(false);

  const totalCount = catCount + dogCount;
  const catPercentage = totalCount === 0 ? 50 : (catCount / totalCount) * 100;
  const dogPercentage = totalCount === 0 ? 50 : (dogCount / totalCount) * 100;

  console.log('catPercentage:', catPercentage.toFixed(2));
  console.log('dogPercentage:', dogPercentage.toFixed(2));

  return (
    <div className="flex flex-row h-screen w-screen">
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <h1 className="text-3xl font-bold text-white hover:scale-110 transition-all">Which do you like more?</h1>

        <br />

        <button
          onClick={() => setCatCount(catCount + 1)}
          className="bg-white  text-green-500 font-bold py-4 px-6 rounded m-2 transition-transform transform hover:scale-110"
        >
          Cat ({catPercentage.toFixed(2)}%)
        </button>
        <button
          onClick={() => setDogCount(dogCount + 1)}
          className="bg-white  text-blue-500 font-bold py-4 px-6 rounded m-2 transition-transform transform hover:scale-110"
        >
          Dog ({dogPercentage.toFixed(2)}%)
        </button>

        <p className="text-xl font-semibold mt-4 text-white hover:scale-110 transition-all">
          Total Votes: {totalCount}
        </p>
      </div>

      {/* 綠色部分 */}
      <div
        style={{ flexBasis: isCatHovered ? (catPercentage > 80 ? `${catPercentage}%` : '80%') : `${catPercentage}%` }}
        className="bg-green-500 transition-all duration-300"
        onMouseEnter={() => setIsCatHovered(true)}
        onMouseLeave={() => setIsCatHovered(false)}
      ></div>
      {/* 藍色部分 */}
      <div
        style={{ flexBasis: isDogHovered ? (dogPercentage > 80 ? `${dogPercentage}%` : '80%') : `${dogPercentage}%` }}
        className="bg-blue-500 transition-all duration-300"
        onMouseEnter={() => setIsDogHovered(true)}
        onMouseLeave={() => setIsDogHovered(false)}
      ></div>
    </div>
  )
}

export default App;