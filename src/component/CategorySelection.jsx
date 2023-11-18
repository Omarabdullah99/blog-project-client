/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const CategorySelection = ({onSelectCategory,activeCategory}) => {
    // console.log("category",selectedCategory,activeCategory)
const categories=["Health","Fintech","Startups","AI","Security","Enterprise","Growth","Apps","Work","Gadgets","Tech","Fintech"]
  return (
    <div className='px-4 mb-8 lg:space-x-4 flex flex-wrap items-center border-b-2 py-5 text-gray-400'>
    <button onClick={()=> onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? "": "active-button"}`}>All</button>
    {
        categories.map((category)=>(
            <button onClick={()=> onSelectCategory(category)} key={category} className={` mr-2 space-x-16 ${activeCategory === category ? "active-button" : " "}`}> {category}</button>
        ))
    }
    </div>
  )
}

export default CategorySelection