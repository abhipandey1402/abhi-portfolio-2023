import "../App.css";

const Navbar = () => {
  const contactMe = () => {
    window.open("mailto:pandeyabhi142002@gmail.com", "_blank");
  };

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          Abhi <span className="logoObj">●</span>
        </a>
      </div>
      <div>
        <ul className="navigation">
          <li>
            <a onClick={() => smoothScrollTo("skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => smoothScrollTo("about")}>About</a>
          </li>
          <li>
            <a onClick={() => smoothScrollTo("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => smoothScrollTo("contact")}>Contact</a>
          </li>
        </ul>
      </div>
      <button className="navbarBtn" onClick={contactMe}>
        Get in Touch
      </button>
    </div>
  );
};

export default Navbar;
