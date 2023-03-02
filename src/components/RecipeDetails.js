import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CustomImage from './CustomImage'

export default function RecipeDetails({currentRecipe, setShowDetails}) {

  return (
    <>
        <div className="recipe-card">
            <CustomImage imgSrc={currentRecipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={currentRecipe.authorImg} alt=""/>
                <p className="recipe-title">{currentRecipe.title}</p>
                <p className="recipe-desc">{currentRecipe.longDesc}</p>
                <Link className='back-btn' onClick={()=>setShowDetails(false)}>Back</Link>
            </div>
        </div>
    </>
  )
}

