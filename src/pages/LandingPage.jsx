import Navbar from "../component/Navbar";
import AboutMe from "../component/AboutMe";
import Card from "../component/Card";
import Home from "../component/Home";
import React from "react";
import style from "../css/LandingPage.module.css";
import css from "../assets/skill/css.png";
import html from "../assets/skill/html.png";
import js from "../assets/skill/js.png";
import react from "../assets/skill/react.png";

function LandingPage() {
  const imgGallery = [
    { id: "0", src: css, title: "CSS" },
    { id: "1", src: html, title: "HTML" },
    { id: "2", src: js, title: "Javascript" },
    { id: "3", src: react, title: "ReactJS" },
  ];
  return (
    <>
      <Navbar />
      <div>
        <section className={style.home}>
          <Home />
          <div className={style.backgroundContainer}>
            <AboutMe />
          </div>
          <div className={style.container}>
            <div className={style.text}>Skill :</div>
            <div className={style.container2}>
              {imgGallery.map((index) => (
                <div key={index.id}>
                  <Card image={index.src} title={index.title}></Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div></div>
      </div>
    </>
  );
}

export default LandingPage;
