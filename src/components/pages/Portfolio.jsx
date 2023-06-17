import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { portfolio } from "../data/dummydata"
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(portfolio)
      return
    }
  }

  return (
    <>
      <article>
        <div className='container'>
          <Heading title='Portfolio' />
          <div className='catButton'>
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
              <div className='box' data-aos='fade-up'>
                <div className='img'>
                  <iframe width="100%" height={item.height} src={item.cover} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
