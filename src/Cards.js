import React from "react"

const Cards = ({ id, name, cardClick }) => (
  <li
  //  onClick={ () => cardClick(id) }
  >
    {name}
  </li>
)

export default Cards