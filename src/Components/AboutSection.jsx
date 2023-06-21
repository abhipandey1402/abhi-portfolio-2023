import instagramQR from "../assets/socialSection/instagramQR.png";
import github from "../assets/socialSection/github.png";
import leetcode from "../assets/socialSection/leetcode.png";

const AboutSection = () => {
  return (
    <div id="about">
      <div className="aboutSection">
        <h6>
          About Me{" "}
          <span
            style={{
              color: "#fe4e00",
              marginBottom: "0px",
              fontSize: "35px",
              paddingBottom: "0px",
            }}
          >
            •
          </span>
        </h6>
        <div className="innerAboutSection">
          <div className="aboutContainer1">
            <div>
              A Frontend Developer with a passion for creating visually
              appealing and user-friendly websites. Specializing in React and
              Redux, <br />I deliver seamless user experiences with clean,
              efficient code. <br />
              <br /> I thrive on challenges and enjoy collaborating with teams
              to bring ideas to life.
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "50px",
              }}
              className="instaBox"
            >
              <img src={instagramQR} className="instaQR" />
              <div className="instaDesc">
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    marginBottom: "10px",
                  }}
                >
                  @abhipandey1402
                </p>
                <p>Scan my Instagram QR Code!</p>
              </div>
            </div>
          </div>
          <div className="aboutContainer2">
            <span
              style={{
                marginTop: "30px",
                fontSize: "30px",
                fontFamily: "kenia",
              }}
            >
              Github
            </span>
            <a
              href="https://github.com/abhipandey1402"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} className="github" />
            </a>
            <span style={{ fontFamily: "kenia", fontSize: "30px" }}>
              Leetcode
            </span>
            <a
              href="https://leetcode.com/abhipandey1402"
              target="_blank"
              rel="noreferrer"
            >
              <img src={leetcode} className="leetcode" />
            </a>
          </div>
        </div>
      </div>
      <div className="horLine">
        <p>HTML ● CSS ● WEB DEVELOPMENT ● ReactJs ● Redux ● JavaScript</p>
      </div>
      <div className="horLine1">
        <p>WEB DEVELOPMENT ● HTML ● CSS ● JavaScript ● ReactJs ● Redux</p>
      </div>
    </div>
  );
};

export default AboutSection;
