import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyle";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={150} />
          </CardHeader>

          <CardFooter>
            {/* --- LIKES --- */}
            <section>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{props.likes?.lenght}</span>
            </section>

            {/* --- COMMENTS --- */}
            <section>
              <i className="bi bi-chat"></i>
              <span>{props.comments?.lenght}</span>
            </section>
          </CardFooter>
        </div>
        <img src={props.image} alt="Imagem" />
      </CardBody>
    </CardContainer>
  );
}

Card.propTypes;
