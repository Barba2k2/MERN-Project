import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter } from "./CardStyle";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{props.title}</h2>
          <img src={props.image} alt="Imagem" />
        </div>
        <TextLimit text={props.text} limit={20} />
      </CardBody>

      <CardFooter>
        {/* --- LIKES --- */}
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{props.likes}</span>
        </div>

        {/* --- COMMENTS --- */}
        <div>
          <i className="bi bi-chat"></i>
          <span>{props.comments}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}

Card.propTypes;
