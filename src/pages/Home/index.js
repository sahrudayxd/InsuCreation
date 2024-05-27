import CommonLayout from "../../components/CommonLayout";

import EngagingAndSpacious from "../../components/EngagingAndSpacious";
import EasyPerfectSolution from "../../components/EasyPerfectSolution";
import AppScreenshots from "../../components/AppScreenshots";
import HowAppWork from "../../components/HowAppWork";
import DesignedBy from "../../components/DesignedBy";

import "./index.css";

const heroContent = () => (
  <>
    <h1 className="hero-header">Best Mobile App Showcase</h1>
    <p className="hero-description">
      Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis massa
      nisi. Nullam porta lorem at volutpat euismod. Proin in ex nunc.
    </p>
    <button className="show-more-button">Read More</button>
  </>
);

const Home = () => {
  return (
    <CommonLayout>
      <div className="hero">
        <div className="hero-content-large">{heroContent()}</div>
        <div className="hero-img-container">
          <img
            className="hero-img"
            src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/home-hero"
            alt="hero"
          />
        </div>
      </div>
      <div className="hero-content-small">{heroContent()}</div>

      <div className="triangle-bg-img">
        <EngagingAndSpacious />
        <img
          className="my-decor-img"
          src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/Decor/my-decor"
          alt="my-decor"
        />
        <EasyPerfectSolution />
      </div>

      <HowAppWork />
      <DesignedBy />
      <AppScreenshots />
    </CommonLayout>
  );
};

export default Home;
