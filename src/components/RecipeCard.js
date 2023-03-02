import CustomImage from "./CustomImage"
import { Link } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import { useState } from "react";

export default function RecipeCard({recipe, setCurrentRecipe, showDetails, setShowDetails}){
    
    function setRecipe(){
        setCurrentRecipe(recipe);
        setShowDetails(!showDetails);
    }

    

    return (
        <>
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.shortDesc}</p>
                {/* <a className="view-btn" href="#!" onClick={()=>viewRecipe()}>VIEW RECIPE</a> */}
                <Link className="view-btn" onClick={()=>setRecipe()} >Click</Link>
            </div>
        </div>
        </>
    )
}