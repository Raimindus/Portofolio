import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";

// import style from "../css/ServiceAndSkill.module.css";

function skill({ image, title }) {
  return (
    <div>
      <Card style={{ width: "10rem" }}>
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
