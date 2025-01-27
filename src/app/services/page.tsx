import React from 'react'
import Link from 'next/link'
import '../components/components.css';


export default function Servicespage() {
  return (
    <div>

         {/* Services......................... */}

      <section id="services" className="services">
        <div className="main-text ">
          <span>What I willl Do For You</span>
          <h2>Our Services</h2>
        </div>

        <div className="services-section ">
         


       
          <div className="service-box">
            <i className="bx bx-desktop servoice-icon  servoice-icon"></i>
            <h3>Web Development</h3>
            <p>
            I build responsive websites that are easy to use and optimized for all devices.
             I focus on both functionality and user experience.
            </p>
            <div className="btn-box service-btn">
              <Link href="https://hackathon-nextjs-e-comm-web.vercel.app/"  target="_blank" className="btn">
                Read More{" "}
              </Link>
            </div>
          </div>



          <div className="service-box">
            <i className="bx bxs-layer servoice-icon servoice-icon"></i>
            <h3>UI/UX Designer</h3>
            <p>
             I design simple, clean, and user-friendly interfaces. My goal is to create
             designs that enhance user interaction and engagement.
            </p>
            <div className="btn-box service-btn">
              <Link href="https://modern-web-using-figma.vercel.app/"  target="_blank" className="btn">
                Read More{" "}
              </Link>
            </div>
          </div>


{/* 3rd */}
          <div className="service-box">
            <i className="bx bx-code-alt servoice-icon  servoice-icon"></i>
            <h3>Frontend Developmen</h3>
            <p>
            I implement interactive elements and responsive layouts to bring designs
             to life. Ensuring smooth and dynamic user experiences is my focus.
            </p>
            <div className="btn-box service-btn">
              <Link href="https://flower-web-project.vercel.app/"  target="_blank" className="btn">
                Read More{" "}
              </Link>
            </div>
          </div>


{/* 4th */}
          <div className="service-box">
            <i className="bx bx-store-alt servoice-icon  servoice-icon"></i>
            <h3>E-Commerce Solutions</h3>
            <p>
             {` I help set up and customize e-commerce websites. From design to functionality, 
             I ensure your online store runs smoothly.`}
            </p>
            <div className="btn-box service-btn">
              <Link href="https://hackathon-nextjs-e-comm-web.vercel.app/"  target="_blank" className="btn">
                Read More{" "}
              </Link>
            </div>
          </div>

{/* 5th */}
          <div className="service-box">
            <i className="bx bx-bug-alt servoice-icon servoice-icon"></i>
            <h3> Bug Fixing & Optimization</h3>
            <p>
             {` I troubleshoot issues and enhance website performance. 
             My focus is on improving speed, fixing bugs, and ensuring stability.`}
            </p>
            <div className="btn-box service-btn">
              <Link href="#"  target="_blank" className="btn">
                Read More{" "}
              </Link>
            </div>
          </div>




          
{/* 6th */}
<div className="service-box">
            <i className="bx bx-user-circle servoice-icon servoice-icon"></i>
            <h3>Resume & Portfolio Design</h3>
            <p>
             {`  I design professional and visually appealing resumes and portfolios. 
             I ensure they effectively showcase your skills and experience.`}
            </p>
            <div className="btn-box service-btn">
              <Link href="https://simple-static-resume.vercel.app/"  target="_blank" className="btn">
                Read More{" "}
              </Link>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}
