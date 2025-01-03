import netflixPic from "../assets/netflix.png";
import sidCupGolf from "../assets/sidcupgolf.png";
import nikesPic from "../assets/nikes.png";

function Projects() {
  return (
    <div className="container text-center my-5" id="projects">
      <h2 className="mb-5 fw-bold section-title">Featured Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 mb-4">
            <a href="https://mynetflixindia.vercel.app/" target="_blank">
              <img src={netflixPic} alt="Netflix" className="card-img-top" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Netflix Clone</h5>
              <p className="card-text">
                Built a Netflix clone using pure HTML and CSS, replicating the
                homepage layout and styling. Focused on desktop view with static
                layout.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-4">
            <a href="https://mysidcupgolf.vercel.app/" target="_blank">
              <img
                src={sidCupGolf}
                alt="MySidCupGolf"
                className="card-img-top"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">SidCupGolf</h5>
              <p className="card-text">
                Developed a fully responsive website for Sidcup Family Golf
                using HTML, CSS, and JavaScript. Implemented GSAP for smooth
                animations and custom cursor for enhanced user interaction.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-4">
            <a href="https://mynikes.vercel.app/" target="_blank">
              <img src={nikesPic} alt="Netflix" className="card-img-top" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Nikes Shoes</h5>
              <p className="card-text">
                Built a shoes e-commerce website using HTML, CSS, and
                JavaScript. Designed product cards with hover effects and shoe
                details. Integrated a simple form for user interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
