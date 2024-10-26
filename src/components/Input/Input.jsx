/* eslint-disable react/prop-types */
import { InputSpace } from "./InputStyle";

export function Input({ type, placeholder, register, name }) {
  return (
    <InputSpace type={type} placeholder={placeholder} />
  );
}
