import github from "../assets/footer/github.png";
import linkedin from "../assets/footer/linkedin.png";
import twitter from "../assets/footer/twitter.png";
import email from "../assets/footer/email.png";
import insta from "../assets/footer/insta.png";
import spotify from "../assets/footer/spotify.png";
import signature from "../assets/footer/abhiSignature.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ marginBottom: "50px", color: "#fff" }} />
      <div className="footerContainer">
        <div className="footerLeft">
          <h6 style={{ fontFamily: "bayon" }}>
            Let's work together on <br /> your next project
          </h6>
          <p className="developedByOnPC">
            Designed and Developed by{" "}
            <span
              style={{
                fontWeight: "400",
                fontFamily: "bayon",
                fontSize: "20px",
              }}
            >
              Abhi
            </span>{" "}
            © 2023
          </p>
        </div>
        <div className="footerRight">
          <div>
            <img
              src={signature}
              style={{ width: "100px" }}
              className="signature"
            />
          </div>
          <div className="links">
            <a
              href="https://github.com/abhipandey1402"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} />
            </a>
            <a
              href="https://linkedin.com/in/abhipandey1402"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} style={{ border: "none" }} />
            </a>
            <a
              href="https://twitter.com/abhipandey1402"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} />
            </a>
            <a
              href="mailto:pandeyabhi142002@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={email} />
            </a>
            <a
              href="https://instagram.com/abhipandey1402"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} />
            </a>
            <a
              href="https://open.spotify.com/user/s76ywpmpd894sbwy57exgfghi?si=fc3147fc52ec4724"
              target="_blank"
              rel="noreferrer"
            >
              <img src={spotify} style={{ border: "none" }} />
            </a>
          </div>
        </div>
      </div>
      <p className="developedByOnPhone">
        Designed and Developed by{" "}
        <span
          style={{
            fontWeight: "400",
            fontFamily: "bayon",
            fontSize: "20px",
          }}
        >
          Abhi
        </span>{" "}
        © 2023
      </p>
    </div>
  );
};

export default Footer;
