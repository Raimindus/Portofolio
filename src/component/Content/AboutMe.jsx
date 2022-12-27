import React, { useEffect, useRef } from "react";
import style from "../../css/AboutMe.module.css";

const text = [
  "Hello, welcome to my page! My name is Raimindus and I am a junior web developer.",
  "I spend most of my time in front of my computer, so you can easily find me online most of the time.",
  "I recently completed my training at a bootcamp as a front-end engineer.",
];

let i = 0;
let j = 0;
function typing(text, element) {
  if (j < text.length) {
    if (i < text[j].length) {
      element.innerHTML += text[j].charAt(i);
      i++;
      setTimeout(() => typing(text, element), 100);
    } else {
      // reset i and increment j to move to the next paragraph
      i = 0;
      j++;
      // add a new line after each paragraph
      element.innerHTML += "<br>";
      // use setTimeout to add a delay between paragraphs
      setTimeout(() => typing(text, element), 1500); // increase the delay by 50%
    }
  }
}

function AboutMe() {
  const textElement = useRef(null); // create a reference to the element

  useEffect(() => {
    typing(text, textElement.current);
  }, []);

  return (
    <div className={style.box}>
      <h1 className={style.font}>About Me</h1>
      <div className={style.overlay}>
        <p ref={textElement} className={style.font}></p>
      </div>
    </div>
  );
}

export default AboutMe;
