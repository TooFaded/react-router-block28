import RedImg from "../../public/Red.png";

function Red() {
  return (
    <div className="red">
      <h1>Red</h1>
      <div className="red-img-container">
        <img src={RedImg} alt="Red" />
      </div>
    </div>
  );
}

export default Red;
