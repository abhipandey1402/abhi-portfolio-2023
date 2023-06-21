import html from "../assets/skillSection/html5.png";
import css from "../assets/skillSection/css.png";
import js from "../assets/skillSection/js.png";
import tailwind from "../assets/skillSection/tailwind.png";
import reactjs from "../assets/skillSection/reactjs.png";
import redux from "../assets/skillSection/redux.png";
import spring from "../assets/skillSection/spring.png";
import restAPI from "../assets/skillSection/restAPI.png";
import mysql from "../assets/skillSection/mysql.png";
import maven from "../assets/skillSection/maven.png";
import dbms from "../assets/skillSection/dbms.png";
import java from "../assets/skillSection/java.png";

const SkillSection = () => {
  return (
    <div id="skills">
      <div className="skillSection">
        <h6>
          Variable Skill Set{" "}
          <span style={{ color: "#fe4e00", fontSize: "35px" }}>•</span>
        </h6>
        <p className="frontendTitle">Front End</p>
        <div className="frontSkills">
          <div className="skillsImg">
            <img src={html} />
            <p>HTML</p>
          </div>
          <div className="skillsImg">
            <img src={css} />
            <p>CSS</p>
          </div>
          <div className="skillsImg">
            <img src={tailwind} />
            <p>Tailwind CSS</p>
          </div>
          <div className="skillsImg">
            <img src={js} />
            <p>JavaScript</p>
          </div>
          <div className="skillsImg">
            <img src={reactjs} />
            <p>ReactJS</p>
          </div>
          <div className="skillsImg">
            <img src={redux} />
            <p>Redux</p>
          </div>
        </div>
        <p className="frontendTitle">Back End</p>
        <div className="frontSkills">
          <div className="skillsImg">
            <img src={spring} />
            <p>Spring</p>
          </div>
          <div className="skillsImg">
            <img src={spring} />
            <p>Spring Boot</p>
          </div>
          <div className="skillsImg">
            <img src={mysql} />
            <p>MySQL</p>
          </div>
          <div className="skillsImg">
            <img src={dbms} />
            <p>DBMS</p>
          </div>
          <div className="skillsImg">
            <img src={restAPI} style={{ backgroundColor: "white" }} />
            <p>REST API</p>
          </div>
          <div className="skillsImg">
            <p>Hibernate</p>
          </div>
          <div className="skillsImg">
            <img src={maven} />
            <p>Maven</p>
          </div>
        </div>
        <p className="frontendTitle">Languages</p>
        <div className="frontSkills">
          <div className="skillsImg">
            <img src={java} />
            <p>Java</p>
          </div>
          <div className="skillsImg">
            <img src={js}/>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
