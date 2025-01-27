import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../components/components.css';
import FirstImg  from "../../../public/pro-img1.jpg"
import secondimg  from "../../../public/proj-img2.png"
import thirdImg  from "../../../public/proj-img-3.jpg"
import FourthImg  from "../../../public/proj-img-4.png"


export default function ProjectPage() {
  return (
    <div>


 {/* Projects-Section */}
 <section id="project" className="projects">
        <div className="main-text scroll-scale">
          <span>What I will Do For You</span>
          <h2>Latest Projects</h2>

        </div>

        <div className="container">
          <div className="filter-buttons">
        


            <div className="projects-gallery ">

              {/* 1st img */}
              <div className="proj-box">
                <div className="proj-img">
                  <Image src={FirstImg} alt=""></Image>
                </div>
                <div className="pro-content">
                  <h3>Programmer</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quibusdam laborum 
                    accusantium ea  maxime esse dolorum velit! Providen
                    </p>
                    <Link href="#"><i className='bx bx-link-external'></i></Link>
                </div>
              </div>

              {/* 2nd img */}

              <div className="proj-box">
                <div className="proj-img">
                  <Image src={secondimg} alt=""></Image>
                </div>
                <div className="pro-content">
                  <h3>UI/UX Designer</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quibusdam laborum 
                    accusantium ea  maxime esse dolorum velit! Providen
                    </p>
                    <Link href="#"><i className='bx bx-link-external'></i></Link>
                </div>
              </div>


              <div className="proj-box">
                <div className="proj-img">
                  <Image src={thirdImg} alt=""></Image>
                </div>
                <div className="pro-content">
                  <h3>Frontend Developer</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quibusdam laborum 
                    accusantium ea  maxime esse dolorum velit! Providen
                    </p>
                    <Link href="#"><i className='bx bx-link-external'></i></Link>
                </div>
              </div>


              <div className="proj-box">
                <div className="proj-img">
                  <Image src={FourthImg} alt=""></Image>
                </div>
                <div className="pro-content">
                  <h3>Web Developer</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quibusdam laborum 
                    accusantium ea  maxime esse dolorum velit! Providen
                    </p>
                    <Link href="#"><i className='bx bx-link-external'></i></Link>
                </div>
              </div>




        
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
