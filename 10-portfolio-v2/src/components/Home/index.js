import React from "react";

import video from "./video/video.mp4";
import { homeBg } from "../../assets/image";

// IMPORTING REACT REVEAL
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { Link } from "react-scroll";

const Home = () => {
  // SCROLLING VARIABLES
  // const ScrollDuration = 1200;
  // const ScrollDelay = 500;

  return (
    <>
      <Fade>
        <div id="About" className="HomeContainer">
          <video poster={homeBg} autoPlay loop muted src={video} />
        </div>
      </Fade>
      <div className="AboutUS">
        <div className="text-center">
          <Fade delay={2100} right cascade>
            <h1>
              Hey there! I'm
              <span style={{ fontWeight: 800 }}> SALMAAN </span>
            </h1>
          </Fade>
          {/* <Fade duration={2000} delay={2400} right cascade> */}
          <h3>
            A creative MERN stack Web developer-designer.
            {/* I love learing new things and to explore. */}
          </h3>
          {/* </Fade> */}
          {/* <!--===================== BLOB BUTTON START  =====================--> */}
          <a href="mailto:leosalmaan5@gmail.com">
            <Flip delay={2600} duration={3200} bottom>
              <div class="buttons">
                {/* <Link
                  to="bottomfooter"
                  smooth={true}
                  delay={ScrollDelay}
                  duration={ScrollDuration}
                  spy={true}
                >
                  <button class="blob-btn">
                    Contact me
                    <span class="blob-btn__inner">
                      <span class="blob-btn__blobs">
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                      </span>
                    </span>
                  </button>
                </Link> */}
                <br />
              </div>
            </Flip>
          </a>
          {/* <!--===================== BLOB BUTTON END  =====================--> */}
        </div>
      </div>
    </>
  );
};

export default Home;
