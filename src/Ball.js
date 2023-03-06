import "./App.css";
import "./App";

const Ball = (props) => {
  const spin = props.spin;
  return (
    <div className="parent-ball" style={{ transform: `rotateZ(${spin}deg)` }}>
      <div className="ball"></div>
    </div>
  );
};
export default Ball;
