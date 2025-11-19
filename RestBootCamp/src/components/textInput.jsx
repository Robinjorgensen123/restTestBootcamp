import { useState } from "react";

const TextInputCapitalize = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;

    const onlyLettersRegex = /^[a-zA-ZÅÄÖåäö]*$/;

    if (!onlyLettersRegex.test(input)) {
      setError("Endast bokstäver är tillåtna");
    } else {
      setError("");
    }

    if (input.length === 0) {
      setValue("");
      return;
    }

    const first = input[0].toUpperCase();
    const rest = input.slice(1);
    setValue(first + rest);
  };

  return (
    <section>
      <input
        type="text"
        aria-label="text-input"
        value={value}
        onChange={handleChange}
      />
      {error && <p role="alert">{error}</p>}
    </section>
  );
};

export default TextInputCapitalize;
