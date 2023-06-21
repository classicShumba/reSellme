import heroBg from "../assets/images/hero-bg.png";
import Button from "../components/Button";
const Hero = () => {
  return (
    <div className="hero">
      <img src={heroBg} alt="resellme backgroound image" className="hero-img" />
      <div className="hero-inner">
      </div>
        <div className="hero-text">
            <h1>Buy and sell domains with no capital!</h1>
            <p>Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.</p>
            <div className="hero-btns">
                <Button title='sign up for free' clname='wt-btn' />
                <Button title='read about us' clname='gr-btn' />
            </div>
        </div>
    </div>
  );
};

export default Hero;
