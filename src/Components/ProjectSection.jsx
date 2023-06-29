import podcastPlatformWebapp from "../assets/projectSection/podcastPlatformWebapp.png";
import typingSpeedTest from "../assets/projectSection/typingSpeedTest.png";
import youtubeClone from "../assets/projectSection/youtubeClone.png";
import abhiPortfolio from "../assets/projectSection/abhiPortfolio.png";

const ProjectSection = () => {
  return (
    <div>
      <div className="projectSection" id="projects">
        <h6>
          Projects <span style={{ fontSize: "35px", color: "#FE4E00" }}>•</span>
        </h6>
        <div className="projectMainContainer">
          <div
            className="projectContainer projectContainer1"
            onClick={() => {
              window.open(
                "https://podcast-platform-webapp.netlify.app/",
                "_blank"
              );
            }}
          >
            <img src={podcastPlatformWebapp} />
          </div>
          <div
            className="projectContainer projectContainer2"
            onClick={() => {
              window.open(
                "https://typing-speed-test-june.netlify.app/",
                "_blank"
              );
            }}
          >
            <img src={typingSpeedTest} />
          </div>
          <div
            className="projectContainer projectContainer3"
            onClick={() => {
              window.open(
                "https://abhipandey1402.github.io/youtube-clone/",
                "_blank"
              );
            }}
          >
            <img src={youtubeClone} />
          </div>
          <div
            className="projectContainer projectContainer4"
            onClick={() => {
              window.open("https://abhipandey.netlify.app/", "_blank");
            }}
          >
            <img src={abhiPortfolio} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
