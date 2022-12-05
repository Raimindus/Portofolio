import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import style from "../css/ServiceAndSkill.module.css";

// import style from "../css/ServiceAndSkill.module.css";

function skill({ image, title }) {
  return (
    <div className={style.container}>
      <Card className={style.card}>
        <CardImg src={image} />
        <Card.Body>
          <Card.Title>
            <div>{title}</div>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default skill;
