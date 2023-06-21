
import podcastPlatformWebapp  from '../assets/projectSection/podcastPlatformWebapp.png'
import typingSpeedTest from '../assets/projectSection/typingSpeedTest.png'
import youtubeClone from '../assets/projectSection/youtubeClone.png'
import abhiPortfolio from '../assets/projectSection/abhiPortfolio.png'
const ProjectSection = () => {


    return (
        <div className="projectSection" id='projects'>
            <h6>Projects <span style={{ fontSize: '35px', color: '#FE4E00' }}>•</span></h6>
            <div className="projectMainContainer">
                <div className="projectContainer projectContainer1"><img src={podcastPlatformWebapp}/></div>
                <div className="projectContainer projectContainer2"><img src={typingSpeedTest}/></div>
                <div className="projectContainer projectContainer3"><img src={youtubeClone}/></div>
                <div className="projectContainer projectContainer4"><img src={abhiPortfolio}/></div>
            </div>
        </div>
    )
}


export default ProjectSection


