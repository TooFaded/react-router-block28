import BlueImg from "../../public/Blue.png";

function Blue() {
  return (
    <div className="blue">
      <h1>Blue</h1>
      <div className="blue-img-container">
        <img src={BlueImg} alt="Blue" />
      </div>
    </div>
  );
}

export default Blue;
