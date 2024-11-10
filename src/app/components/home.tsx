"use client"; // Add this line at the very top

import { useEffect } from "react";
import "./components.css";
import Link from "next/link";
import Image from "next/image";
import Profilepic from "../../../public/home-img.webp";

export default function Homesection() {
  useEffect(() => {
    // Ensure DOM manipulation happens after component mounts
    const words = document.querySelectorAll(".word") as NodeListOf<HTMLElement>;
    words.forEach((word) => {
      let letters = word.textContent ? word.textContent.split("") : [];
      word.textContent = "";
      letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    const changeText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord =
        currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

      // Apply animation for current word
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out"; // Apply 'out' class for animation
        }, i * 80); // Delay each letter
      });

      // Transition to next word
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in"; // Apply 'in' class after delay
        }, 340 + i * 80); // Delay each letter for smooth transition
      });

      // Update currentWordIndex for the next word
      currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    // Start text change animation
    changeText();
    const interval = setInterval(changeText, 3000); // Set interval to change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>{"Hi I'm Tahira Rajput"}</h1>
        <div className="change-text">
          <h3>{"   And I'm "}</h3>
          <h3>
            <span className="word">Web Developer</span>
            <span className="word">Frontend Developer</span>
            <span className="word">UI/UX Designer</span>
            <span className="word">Programmer</span>
          </h3>
          <p>
            Creative web designer and frontend developer, crafting impactful
            digital experiences to help brands shine online
          </p>
          <div className="info-box">
            <div className="email-info">
              <h5>Email:</h5>
              <span>tara3785581@gmail.com</span>
            </div>
            <div className="linkedin-info">
              <h5>LinkedIn:</h5>
              <span>linkedin.com/in/tahira-rajput-983aa82b6</span>
            </div>
          </div>
          <div className="btn-box">
            <Link href="#">Download CV</Link>
            <Link href="#">Hire Me Now!</Link>
          </div>
          <div className="social-icons">
          

            <Link href="#"><i className="bx bxl-facebook"></i></Link>
            <Link href="#"><i className="bx bxl-instagram"></i></Link>
            <Link href="#"><i className="bx bxl-linkedin-square"></i></Link>
            <Link href="#"><i className="bx bxl-twitter"></i></Link>
            <Link href="#"><i className="bx bxl-github"></i></Link>
            <Link href="#"><i className="bx bxl-skype"></i></Link>
          </div>
        </div>
      </div>
      <div className="home-image">
        <div className="image-box">
          <Image src={Profilepic} alt="pic" className="image" />
        </div>
      </div>
    </section>
  );
}
