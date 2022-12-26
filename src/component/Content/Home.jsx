import style from "../../css/Home.module.css";

function Home() {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.font1}>Hello, Welcome to my Page</h1>
        <h3 className={style.font2}>My Name is Raimindus</h3>
        <p className={style.font3}>I am a Junior Web Development </p>
      </div>
    </>
  );
}
export default Home;
