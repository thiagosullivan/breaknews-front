/* eslint-disable react/prop-types */
import { ButtonSpace } from "./ButtonStyle";

export function Button({ type, text }){
    return <ButtonSpace type={type}>{text}</ButtonSpace>
}