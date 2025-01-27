import React from 'react'
import Link from 'next/link'
import '../components/components.css';

export default function page() {
  return (
    <div>
         {/* Contact Page........................... */}
      <section className="contant" id="contact">
        <div className="main-text">
          <span>Ask me Question</span>
          <h2>Contact Me</h2>
        </div>

        <form action="#" className="">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Address" />
          <input type="number" placeholder="Phone Number" />

          <textarea name="" id="" cols={30} rows={10} placeholder="Your Message">
             </textarea>
             <div className="btn-box formBtn">
              <button type="submit" className="btn">Send Message</button>
             </div>
        </form>
      </section>
    </div>
  )
}
