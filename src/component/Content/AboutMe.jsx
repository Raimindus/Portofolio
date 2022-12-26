import React, { useEffect, useRef } from "react";
import style from "../../css/AboutMe.module.css";

const text = [
"Hello, welcome to my page! My name is Raimindus and I am a junior web developer.",
"I spend most of my time in front of my computer, so you can easily find me online most of the time.",
"I recently completed my training at a bootcamp as a front-end engineer.",
];

function AboutMe() {
const textElement = useRef(null); // create a reference to the element

useEffect(() => {
typing(text, textElement.current);
}, []);

return (
<div className="box">
<div className="overlay">
<h1 className={style.font}>About Me</h1>
<p ref={textElement} className={style.font}></p>
</div>
</div>
);
}

function typing(text, element) {
let i = 0;
let j = 0;

if (j < text.length) {
if (i < text[j].length) {
element.innerHTML += text[j].charAt(i);
i++;
requestAnimationFrame(() => typing(text, element));
} else {
// reset i and increment j to move to the next paragraph
i = 0;
j++;
// add a new line after each paragraph
element.innerHTML += "<br>";
//