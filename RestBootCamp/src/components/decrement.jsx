import { useState } from "react";

const NumberButton = () => {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue((prev) => prev - 1);
  };

  return (
    <section>
      <button onClick={handleAdd}>Remove</button>
      <span>{value}</span>
    </section>
  );
};

export default NumberButton;
