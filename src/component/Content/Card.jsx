import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import style from "../../css/Card.module.css";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function skill({ image, title }) {
  const options = {
    speed: 1000,
    max: 30,
    glare: true,
    "max-glare": 1,
  };
  return (
    <div className={style.container}>
      <Tilt className={style.tilt} options={options}>
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
