import Home from "../component/Content/Home";
import AboutMe from "../component/Content/AboutMe";
import style from "../css/Content.module.css";

function Content() {
  return (
    <div className={style.content}>
      <Home />
      <AboutMe />
    </div>
  );
}

export default Content;
