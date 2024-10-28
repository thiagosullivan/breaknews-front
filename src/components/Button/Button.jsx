/* eslint-disable react/prop-types */
import { ButtonSpace } from "./ButtonStyle";

export function Button({ type, text, style, onClick }){
    return <ButtonSpace onClick={onClick} style={style} type={type}>{text}</ButtonSpace>
}