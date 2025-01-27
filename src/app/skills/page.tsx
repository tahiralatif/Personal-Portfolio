
import React from 'react'

export default function Skillspage() {
  return (
    <div>
{/* Skills............... */}
<section id="skills" className="skills">
        <div className="main-text ">
          <span>Technical and Professional</span>
          <h2>My Skills</h2>
        </div>
        <div className="skill-main ">
          <div className="left-skill ">
            <h3>Technical Skills</h3>

            {/* TS......... */}

            <div className="skill-bar">
              <div className="info">
                <p>Typescrip</p>
                <p>90%</p>
              </div>
              <div className="bar">
                <span className="typescrip"></span>
              </div>
            </div>

            {/* js............... */}

            <div className="skill-bar">
              <div className="info">
                <p>JavaScrip</p>
                <p>80%</p>
              </div>
              <div className="bar">
                <span className="javascrip"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>HTML</p>
                <p>75%</p>
              </div>
              <div className="bar">
                <span className="html"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>CSS</p>
                <p>72%</p>
              </div>
              <div className="bar">
                <span className="css"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>Next.Js</p>
                <p>70%</p>
              </div>
              <div className="bar">
                <span className="nextjs"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>Tailwind.CSS</p>
                <p>75%</p>
              </div>
              <div className="bar">
                <span className="tailwindcss"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>Node.js</p>
                <p>60%</p>
              </div>
              <div className="bar">
                <span className="nodejs"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>Figma</p>
                <p>55%</p>
              </div>
              <div className="bar">
                <span className="figma"></span>
              </div>
            </div>
          </div>

          {/* Professional Skills Section */}
          <div className="right-skill scroll-scale">
            <h3>Professional Skills</h3>
            <div className="professional-skills">
              {[
                { skill: "Problem Solving", level: "90%" },
                { skill: "Team Collaboration", level: "85%" },
                { skill: "Time Management", level: "80%" },
                { skill: "Communication", level: "88%" },
              ].map((item, index) => (
                <div key={index} className="skill-box">
                  <div
                    className="skill-circle"
                    style={{ "--level": item.level } as React.CSSProperties}
                  >
                    <span>{item.level}</span>
                  </div>
                  <p>{item.skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
