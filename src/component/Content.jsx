import Home from "../component/Content/Home";
import AboutMe from "../component/Content/AboutMe";
import style from "../css/Content.module.css";

function Content() {
  return (
    <div className={style.content}>
      <div className={style.component}>
        <Home />
      </div>
      <div className={style.component}>
        <AboutMe />
      </div>
    </div>
  );
}

export default Content;
