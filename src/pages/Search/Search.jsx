import { useParams } from "react-router-dom";

export function Search(){
    const { title } = useParams();

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}