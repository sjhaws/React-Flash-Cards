import React from "react"
import Cards from "./Cards"

const List = ({ items, todoClick}) => (
  <div>
    <ul>
      { items.map( 
        item => <Cards key={item.id} {...item} todoClick={todoClick} />
      )}
    </ul>
  </div>
)

export default List