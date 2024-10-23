/* eslint-disable react/prop-types */

import { CardBody, CardContainer, CardFooter } from "./CardStyle";

export function Card({news}) {

  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
        </div>
        <img src={news.image} alt="" />
      </CardBody>
      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{news.likes}</span>
        </div>
        <div>
          <i className="bi bi-chat"></i>
          <span>{news.comments}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
