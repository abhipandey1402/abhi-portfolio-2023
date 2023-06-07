import html from '../assets/skillSection/html5.png'
import css from '../assets/skillSection/css.png'
import js from '../assets/skillSection/js.png'
import tailwind from '../assets/skillSection/tailwind.png'
import reactjs from '../assets/skillSection/reactjs.png'
import redux from '../assets/skillSection/redux.png'
import spring from '../assets/skillSection/spring.png'
import restAPI from '../assets/skillSection/restAPI.png'
import mysql from '../assets/skillSection/mysql.png'
import maven from '../assets/skillSection/maven.png'
import hibernate from '../assets/skillSection/hibernate-icon.png'
import dbms from '../assets/skillSection/dbms.png'
import java from '../assets/skillSection/java.png'

const SkillSection = () => {


    return (

        <div>
            <div className="skillSection">
                <h6>Variable Skill Set <span style={{ color: '#fe4e00', fontSize: '35px' }}>•</span></h6>
                <p className="frontendTitle">Front End</p>
                <div className="frontSkills">
                    <img src={html} /><p>HTML</p>
                    <img src={css} /><p>CSS</p>
                    <img src={tailwind} /><p>Tailwind CSS</p>
                    <img src={js} /><p>JavaScript</p>
                    <img src={reactjs} /><p>ReactJS</p>
                    <img src={redux} /><p>Redux</p>
                </div>
                <p className="frontendTitle">Back End</p>
                <div className="frontSkills">
                    <img src={spring} /><p>Spring</p>
                    <img src={spring} /><p>Spring Boot</p>
                    <img src={mysql} /><p>MySQL</p>
                    <img src={dbms} /><p>DBMS</p>
                    <img src={restAPI} style={{ backgroundColor: 'white' }} /><p>REST API</p>
                    <p>Hibernate</p>
                    <img src={maven} /><p>Maven</p>
                </div>
                <p className="frontendTitle">Languages</p>
                <div className="frontSkills" >
                    <img src={java} /><p>Java</p>
                    <img src={js} style={{ marginLeft: '200px' }} /><p>JavaScript</p>
                </div>
            </div>
        </div>
    )
}


export default SkillSection
