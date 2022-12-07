import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import style from "../css/ServiceAndSkill.module.css";
import Tilt from "react-vanilla-tilt";

function skill({ image, title }) {
  return (
    <div className={style.container}>
      <Card className={style.card}>
        <Tilt className={style.tilt}>
          <CardImg src={image} />
          <Card.Body>
            <Card.Title>
              <div>{title}</div>
            </Card.Title>
          </Card.Body>
        </Tilt>
      </Card>
    </div>
  );
}

export default skill;
