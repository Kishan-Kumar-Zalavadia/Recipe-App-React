import { useState } from "react"
import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
import RecipeDetails from "../components/RecipeDetails"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem eligendi magnam explicabo dolores quod harum veniam suscipit maxime ratione officia nam cum minus corporis tenetur nesciunt facere fugiat illo illum, earum recusandae sint voluptas! Rerum enim excepturi dolor eveniet reiciendis cupiditate fugiat harum maiores, alias sit provident laboriosam, repellendus quibusdam architecto tempore error rem quod. Harum nihil necessitatibus labore tempora odio vero facilis pariatur libero voluptatibus aspernatur ducimus blanditiis, corporis vel ipsum, velit suscipit excepturi porro maxime totam consectetur odit ipsam amet nisi deserunt! Veritatis soluta quod error repellat quas sed maxime nam ex ipsa nemo officia, eius corporis repudiandae impedit accusamus quos. Porro quisquam id, voluptates corporis, at quia culpa delectus magnam doloribus dignissimos voluptas autem enim? Labore quaerat cum delectus dolore autem voluptas incidunt maxime minus tempora molestiae, amet nostrum odio suscipit natus, praesentium ducimus quod cumque at. Iusto accusantium expedita id esse. Mollitia quidem minima earum ea animi deserunt iste totam placeat labore aut repellendus maiores alias rem nostrum ratione, esse fugit! Fugit expedita sit vitae reprehenderit, perspiciatis dolorum deserunt dolores pariatur minus quasi beatae assumenda numquam aut, culpa quaerat! Asperiores laboriosam, esse voluptatum provident praesentium quis cupiditate aliquam! Amet nisi quam quibusdam cupiditate accusantium modi?"
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem eligendi magnam explicabo dolores quod harum veniam suscipit maxime ratione officia nam cum minus corporis tenetur nesciunt facere fugiat illo illum, earum recusandae sint voluptas! Rerum enim excepturi dolor eveniet reiciendis cupiditate fugiat harum maiores, alias sit provident laboriosam, repellendus quibusdam architecto tempore error rem quod. Harum nihil necessitatibus labore tempora odio vero facilis pariatur libero voluptatibus aspernatur ducimus blanditiis, corporis vel ipsum, velit suscipit excepturi porro maxime totam consectetur odit ipsam amet nisi deserunt! Veritatis soluta quod error repellat quas sed maxime nam ex ipsa nemo officia, eius corporis repudiandae impedit accusamus quos. Porro quisquam id, voluptates corporis, at quia culpa delectus magnam doloribus dignissimos voluptas autem enim? Labore quaerat cum delectus dolore autem voluptas incidunt maxime minus tempora molestiae, amet nostrum odio suscipit natus, praesentium ducimus quod cumque at. Iusto accusantium expedita id esse. Mollitia quidem minima earum ea animi deserunt iste totam placeat labore aut repellendus maiores alias rem nostrum ratione, esse fugit! Fugit expedita sit vitae reprehenderit, perspiciatis dolorum deserunt dolores pariatur minus quasi beatae assumenda numquam aut, culpa quaerat! Asperiores laboriosam, esse voluptatum provident praesentium quis cupiditate aliquam! Amet nisi quam quibusdam cupiditate accusantium modi?"
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem eligendi magnam explicabo dolores quod harum veniam suscipit maxime ratione officia nam cum minus corporis tenetur nesciunt facere fugiat illo illum, earum recusandae sint voluptas! Rerum enim excepturi dolor eveniet reiciendis cupiditate fugiat harum maiores, alias sit provident laboriosam, repellendus quibusdam architecto tempore error rem quod. Harum nihil necessitatibus labore tempora odio vero facilis pariatur libero voluptatibus aspernatur ducimus blanditiis, corporis vel ipsum, velit suscipit excepturi porro maxime totam consectetur odit ipsam amet nisi deserunt! Veritatis soluta quod error repellat quas sed maxime nam ex ipsa nemo officia, eius corporis repudiandae impedit accusamus quos. Porro quisquam id, voluptates corporis, at quia culpa delectus magnam doloribus dignissimos voluptas autem enim? Labore quaerat cum delectus dolore autem voluptas incidunt maxime minus tempora molestiae, amet nostrum odio suscipit natus, praesentium ducimus quod cumque at. Iusto accusantium expedita id esse. Mollitia quidem minima earum ea animi deserunt iste totam placeat labore aut repellendus maiores alias rem nostrum ratione, esse fugit! Fugit expedita sit vitae reprehenderit, perspiciatis dolorum deserunt dolores pariatur minus quasi beatae assumenda numquam aut, culpa quaerat! Asperiores laboriosam, esse voluptatum provident praesentium quis cupiditate aliquam! Amet nisi quam quibusdam cupiditate accusantium modi?"
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem eligendi magnam explicabo dolores quod harum veniam suscipit maxime ratione officia nam cum minus corporis tenetur nesciunt facere fugiat illo illum, earum recusandae sint voluptas! Rerum enim excepturi dolor eveniet reiciendis cupiditate fugiat harum maiores, alias sit provident laboriosam, repellendus quibusdam architecto tempore error rem quod. Harum nihil necessitatibus labore tempora odio vero facilis pariatur libero voluptatibus aspernatur ducimus blanditiis, corporis vel ipsum, velit suscipit excepturi porro maxime totam consectetur odit ipsam amet nisi deserunt! Veritatis soluta quod error repellat quas sed maxime nam ex ipsa nemo officia, eius corporis repudiandae impedit accusamus quos. Porro quisquam id, voluptates corporis, at quia culpa delectus magnam doloribus dignissimos voluptas autem enim? Labore quaerat cum delectus dolore autem voluptas incidunt maxime minus tempora molestiae, amet nostrum odio suscipit natus, praesentium ducimus quod cumque at. Iusto accusantium expedita id esse. Mollitia quidem minima earum ea animi deserunt iste totam placeat labore aut repellendus maiores alias rem nostrum ratione, esse fugit! Fugit expedita sit vitae reprehenderit, perspiciatis dolorum deserunt dolores pariatur minus quasi beatae assumenda numquam aut, culpa quaerat! Asperiores laboriosam, esse voluptatum provident praesentium quis cupiditate aliquam! Amet nisi quam quibusdam cupiditate accusantium modi?"
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem eligendi magnam explicabo dolores quod harum veniam suscipit maxime ratione officia nam cum minus corporis tenetur nesciunt facere fugiat illo illum, earum recusandae sint voluptas! Rerum enim excepturi dolor eveniet reiciendis cupiditate fugiat harum maiores, alias sit provident laboriosam, repellendus quibusdam architecto tempore error rem quod. Harum nihil necessitatibus labore tempora odio vero facilis pariatur libero voluptatibus aspernatur ducimus blanditiis, corporis vel ipsum, velit suscipit excepturi porro maxime totam consectetur odit ipsam amet nisi deserunt! Veritatis soluta quod error repellat quas sed maxime nam ex ipsa nemo officia, eius corporis repudiandae impedit accusamus quos. Porro quisquam id, voluptates corporis, at quia culpa delectus magnam doloribus dignissimos voluptas autem enim? Labore quaerat cum delectus dolore autem voluptas incidunt maxime minus tempora molestiae, amet nostrum odio suscipit natus, praesentium ducimus quod cumque at. Iusto accusantium expedita id esse. Mollitia quidem minima earum ea animi deserunt iste totam placeat labore aut repellendus maiores alias rem nostrum ratione, esse fugit! Fugit expedita sit vitae reprehenderit, perspiciatis dolorum deserunt dolores pariatur minus quasi beatae assumenda numquam aut, culpa quaerat! Asperiores laboriosam, esse voluptatum provident praesentium quis cupiditate aliquam! Amet nisi quam quibusdam cupiditate accusantium modi?"
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem eligendi magnam explicabo dolores quod harum veniam suscipit maxime ratione officia nam cum minus corporis tenetur nesciunt facere fugiat illo illum, earum recusandae sint voluptas! Rerum enim excepturi dolor eveniet reiciendis cupiditate fugiat harum maiores, alias sit provident laboriosam, repellendus quibusdam architecto tempore error rem quod. Harum nihil necessitatibus labore tempora odio vero facilis pariatur libero voluptatibus aspernatur ducimus blanditiis, corporis vel ipsum, velit suscipit excepturi porro maxime totam consectetur odit ipsam amet nisi deserunt! Veritatis soluta quod error repellat quas sed maxime nam ex ipsa nemo officia, eius corporis repudiandae impedit accusamus quos. Porro quisquam id, voluptates corporis, at quia culpa delectus magnam doloribus dignissimos voluptas autem enim? Labore quaerat cum delectus dolore autem voluptas incidunt maxime minus tempora molestiae, amet nostrum odio suscipit natus, praesentium ducimus quod cumque at. Iusto accusantium expedita id esse. Mollitia quidem minima earum ea animi deserunt iste totam placeat labore aut repellendus maiores alias rem nostrum ratione, esse fugit! Fugit expedita sit vitae reprehenderit, perspiciatis dolorum deserunt dolores pariatur minus quasi beatae assumenda numquam aut, culpa quaerat! Asperiores laboriosam, esse voluptatum provident praesentium quis cupiditate aliquam! Amet nisi quam quibusdam cupiditate accusantium modi?"
        }
    ]

    const [currentRecipe, setCurrentRecipe] = useState({});
    const [showDetails, setShowDetails] = useState(false);
    const [search , setSearch] = useState();

    const searchedRecipies = [];
    var newRecipies = [...recipes];
    recipes.map(recipe=>{
        const recipeTitle = recipe.title.toLowerCase();
        if(recipeTitle.includes(search && search.toLowerCase()))
            searchedRecipies.push(recipe)
            
        })
        // console.log(searchedRecipies)
        if(search)
        newRecipies = searchedRecipies;

    return (
        <div>
            <PreviousSearches setSearch={setSearch}/>
            {showDetails && <RecipeDetails currentRecipe={currentRecipe} setShowDetails={setShowDetails}/>}
            {!showDetails &&<div className="recipes-container">
                {/* <RecipeCard /> */}
                {newRecipies.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} setCurrentRecipe={setCurrentRecipe} showDetails={showDetails} setShowDetails={setShowDetails}/>
                ))}
            </div>}
        </div>
    )
}