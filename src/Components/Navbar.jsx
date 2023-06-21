import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        Abhi <span className="logoObj">●</span>
      </div>
      <div>
        <ul className="navigation">
          <li>Skills</li>
          <li>About</li>
          <li>Projects</li>
          <li>Socials</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="navbarBtn">Get in Touch</button>
    </div>
  );
};

export default Navbar;
