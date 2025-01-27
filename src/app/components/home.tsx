"use client";

import "./components.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Profilepic from "../../../public/image.webp";

export default function Homesection() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content scroll-scale ">
          <h1>{"Hi I'm Tahira Rajput"}</h1>
          <div className="change-text">
            <h3>{"   And I'm "}</h3>
            &nbsp;
            <h3>
              <Typewriter
                options={{
                  strings: [
                    "UI/UX Designer",
                    "Web Developer",
                    "Frontend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <span className="word">Web &nbsp; Developer</span>
              <span className="word">Frontend&nbsp; Developer</span>
              <span className="word">UI/UX &nbsp;Designer</span>
              <span className="word">Programmer</span>
            </h3>
            <p>
              Creative web designer and frontend developer, building impactful
              digital experiences.
            </p>
            <div className="info-box">
              <div className="email-info">
                <h5>Email:</h5>
                <span>tara3785581@gmail.com</span>
              </div>
              <div className="linkedin-info">
                <h5>LinkedIn:</h5>
                <span>Tahira Rajput</span>
              </div>
            </div>
            <div className="btn-box">
              {/* <Link href="#" className="btn">
                Download CV
              </Link> */}
              <Link href="https://www.linkedin.com/in/tahira-rajput-983aa82b6/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYQK0Nvn5Q%2BaBptOlD0Pvmg%3D%3D" className="btn">
                Hire Me Now!
              </Link>
            </div>
            <div className="social-icons">
              <Link href="#">
                <i className="bx bxl-facebook"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-instagram"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-linkedin-square"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-twitter"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-github"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-skype"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-image ">
          <div className="image-box">
            <Image src={Profilepic} alt="pic" className="image" />
          </div>
        </div>
      </section>





     


  
    </>
  );
}
