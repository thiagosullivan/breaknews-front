/* eslint-disable react/prop-types */
import { useState } from "react";
import { InputSpace, TextareaSpace } from "./InputStyle";

export function Input({
  type,
  placeholder,
  register,
  name,
  isInput = true,
  value: initialValue,
}) {
  const [value, setValue] = useState(initialValue);

  let inputProps = {
    type,
    placeholder,
    ...register(name),
    onChange: (e) => setValue(e.target.value),
  };

  if (value) inputProps.value = value;

  return (
    <>
      {isInput ? (
        <InputSpace {...inputProps} />
      ) : (
        <TextareaSpace {...inputProps} />
      )}
    </>
  );
}
