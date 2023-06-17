import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="links">
          {social.map((item) => (
            <>
              <a href={item.href} target="_blank" rel="noopener noreferrer" data-aos='zoom-in'>{item.icon}</a>
            </>
          ))}
        </div>
        <p data-aos='zoom-in'>All Right Resceved 2023</p>
      </footer>
    </>
  )
}

export default Footer
