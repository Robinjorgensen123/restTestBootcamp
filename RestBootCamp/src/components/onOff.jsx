import { useState } from "react";

const Toggle = () => {
  const [onOff, setOnOff] = useState(true);

  const handleClick = () => {
    setOnOff((prev) => !prev);
  };

  return <button onClick={handleClick}>{onOff ? "on" : "off"}</button>;
};

export default Toggle;
