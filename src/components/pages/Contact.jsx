import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"

export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content flexsb'>
            {contact.map((item) => (
              <div className='box' data-aos='zoom-in'>
                <i>{item.icon}</i>
                <p>{item.text1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
