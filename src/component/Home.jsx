import style from "../css/Home.module.css";
import pic4 from "../assets/pic4.svg";

function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.divContainer}>
          <h1 className={style.font1}>Hello, Welcome to my Page</h1>
          <h3 className={style.font2}>My Name is Raimindus</h3>
          <p className={style.font3}>I am a Junior Web Development </p>
        </div>
        <div>
          <img src={pic4} alt="gambar programmer" />
        </div>
      </div>
    </>
  );
}
export default Home;
