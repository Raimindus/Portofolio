import Navbar from "../component/Navbar";
import React from "react";
// import css from "../assets/skill/css.png";
// import html from "../assets/skill/html.png";
// import js from "../assets/skill/js.png";
// import react from "../assets/skill/react.png";
import Content from "../component/Content";

function LandingPage() {
  // const imgGallery = [
  //   { id: "0", src: css, title: "CSS" },
  //   { id: "1", src: html, title: "HTML" },
  //   { id: "2", src: js, title: "Javascript" },
  //   { id: "3", src: react, title: "ReactJS" },
  // ];
  return (
    <>
      <div>
        <Navbar />
        <Content />
      </div>
    </>
  );
}

export default LandingPage;
