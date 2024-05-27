import { BsFillArrowRightCircleFill } from "react-icons/bs";

import "./index.css";

const EngagingAndSpacious = () => (
  <div className="engaging-spacious">
    <h1 className="engaging-spacious-title">
      Engaging & Spacious School Campus
    </h1>
    <img
      src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/Decor/green-steps"
      alt="greenStepsDecor"
      className="engaging-spacious-decor"
    />
    <p className="engaging-spacious-des">
      Hise sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris
      augue, pulvinar quis luctus eget. Phasellus gravida lacus quis eros
      lobortis, nec dapibus quam gravida.
    </p>

    <div className="cards">
      <div className="card">
        <div className="card-img-container">
          <img
            src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/pc"
            alt="pc"
            className="card-img"
          />
        </div>
        <h1 className="card-title">Perfect UI Design</h1>
        <p className="card-des">
          Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut
          vitae ante ut mi vehicula vulputate.
        </p>
        <BsFillArrowRightCircleFill color="#000000" size={36} />
        <div className="card-border"></div>
      </div>

      <div className="card bg-green">
        <div className="card-img-container">
          <img
            src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/pc"
            alt="pc"
            className="card-img"
          />
        </div>
        <h1 className="card-title">Perfect UI Design</h1>
        <p className="card-des">
          Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut
          vitae ante ut mi vehicula vulputate.
        </p>
        <BsFillArrowRightCircleFill color="#000000" size={36} />
        <div className="card-border"></div>
      </div>

      <div className="card">
        <div className="card-img-container">
          <img
            src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/pc"
            alt="pc"
            className="card-img"
          />
        </div>
        <h1 className="card-title">Perfect UI Design</h1>
        <p className="card-des">
          Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut
          vitae ante ut mi vehicula vulputate.
        </p>
        <BsFillArrowRightCircleFill color="#000000" size={36} />
        <div className="card-border"></div>
      </div>
    </div>
  </div>
);

export default EngagingAndSpacious;
