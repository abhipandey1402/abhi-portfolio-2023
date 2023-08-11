import logo from "../assets/heroSection/coderMonkey.png"

const HeroSection = () => {


    return (
        <div className="heroSection">
            <div className="heroIntro">
                <div className="heroTitle">
                    Abhi <br /> Pandey
                </div>
                <div className="heroDesc">
                    <p>Hey There ! I am Abhi Pandey - A Self Taught Web Developer. <br /> Welcome to my Professional Portfolio</p>
                </div>
            </div>
            <div className="heroImg">
                <img src={logo}/>
            </div>
        </div>
    )
}

export default HeroSection
