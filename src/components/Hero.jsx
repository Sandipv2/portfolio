import profilePic from "../assets/pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100 hero-container">
        <div className="text-center text-white">
          <div className="mb-4">
            <img
              src={profilePic}
              alt="Vishal"
              className="rounded-circle profilePic"
            />
          </div>

          <div className="d-flex justify-content-center gap-3 mb-2 ">
            <a
              href="https://github.com/vmshall/"
              className="text-white"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-sabavat/"
              className="text-white"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a
              href="https://www.instagram.com/vixhal_sabavat/"
              className="text-white"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>

          <p className="mb-1" style={{ color: "#80d0c7" }}>
            v8shal19@gmail.com
          </p>
          <h1 className="fw-bold">Vishal Sabavat</h1>
          <p className="fst-italic">
            Electronics Engineering Student @ IIT Madras
          </p>

          <p className="mx-auto px-4 px-lg-0" style={{ maxWidth: "500px" }}>
            An Electronics Engineering student at IIT Madras with a passion for
            embedded design, firmware development, and circuit analysis. I love
            building efficient systems and solving real-world problems
            through technology.
          </p>

          <div className="d-flex justify-content-center mt-4 gap-3">
            <a href="#skills">
              <button className="btn btn-primary btn-lg px-4">Skills</button>
            </a>
            <a href="#projects">
              <button className="btn btn-outline-light btn-lg px-4">
                Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
