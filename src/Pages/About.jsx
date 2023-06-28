import "../styles/_about.scss";
import laptop from "../assets/images/laptop.webp";
import girl from "../assets/images/girl-in-glasses.webp";
import Button from "../components/Button";

const About = ({ data }) => {
  const abt = data;
  return (
    <div className="wrapper about">
      <div className="about-inner">
        <img src={laptop} alt="laptop" />
      </div>
      <div className="what">
        <img src={girl} alt="girl in glasses" />
        <div className="what-text">
          <h2>Wait, What?</h2>
          <p>
            Resellme allows for you to purchase domains through our platform
            without paying money upfront. All you need to do is have a client
            who will pay for the domain and you get to keep the profit deducted
            from the domain purchase price! Buying domains through the platforms
            is <strong>SUPER CHEAP</strong>
          </p>
          <Button clname="abt-btn" title="read more" />
        </div>
      </div>
      <div className="gt-started">
        <h2>{abt.title}</h2>
        <div className="strt-cards">
          {abt.start &&
            abt.start.map((start, index) => {
              return <div className="strt-crd" key={index}>
                <start.icon />
                <h3>{start.title}</h3>
                <p>{start.text}</p>
              </div>
              
            })}
        </div>
        <Button title={abt.button} clname={"strt-btn"} />
      </div>
    </div>
  );
};

export default About;
