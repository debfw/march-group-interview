import React, { useState, useEffect } from "react";

function NumberList() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
      // Iterate only once to create the new array and avoid looping in the setNumbers async function
    const newNumbers = numbers.map((num) => (num % 2 === 0 ? num * 2 : num));
    setNumbers(newNumbers);
  }, []);

  return (
    <div className="flex">
      {numbers.map((num) => (
        <p key={num}>{num}</p>
      ))}
    </div>
  );
}

export default NumberList;
