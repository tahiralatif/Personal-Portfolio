import React from 'react'
import '../components/components.css';
import Profilepic from "../../../public/image.webp"
import Image from 'next/image';
import Link from 'next/link';

export default function Aboutpage() {
  return (
    <>
       <section className="about" id="about">
        <div className="img-about scroll-scale">
          <Image src={Profilepic} alt="abot-img" className="img "></Image>
          <div className="info-about1">
            <span>∞</span>
            <p>Ideas to Explore</p>
          </div>
          <div className="info-about2">
            <span>100%</span>
            <p>Growth</p>
          </div>
          <div className="info-about3">
            <span>Future</span>
            <p>Ready to Build</p>
          </div>
        </div>
        <div className="about-content scroll-scale">
          <span>Let me Inroduce My Self</span>
          <h2>About me</h2>
          <h3>A Story Of Good</h3>
          <p className="aboutp">
            {
              "I am a dedicated developer specializing in creating modern, responsive, and user-friendly web solutions. I focus on delivering impactful projects tailored to clients' needs. My goal is to turn ideas into scalable and efficient digital experiences."
            }
          </p>
          <div className="btn-box">
            <Link href="https://simple-static-resume.vercel.app/" target='_blank' className="btn">
              Read More.!
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}





