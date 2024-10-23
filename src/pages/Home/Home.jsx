import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../Data.js";
import { HomeBody } from "./HomeStyled.jsx";

export default function Home(){
    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map((item, index) => {
                    return (
                        <Card key={index} news={item}/>
                    )
                })}
            </HomeBody>
        </>
    )
}