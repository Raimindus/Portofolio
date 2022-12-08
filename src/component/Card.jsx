import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import style from "../css/Card.module.css";
import Tilt from "react-vanilla-tilt";

function skill({ image, title }) {
  return (
    <div className={style.container}>
      <Tilt className={style.tilt} options={{ glare: true, "max-glare": 1 }}>
        <Card className={style.card}>
          <div className={style.content}>
            <CardImg src={image} />
            <Card.Body>
              <Card.Title>
                <div>{title}</div>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>
      </Tilt>
    </div>
  );
}

export default skill;
