import { useState } from "react";
import { useEffect } from "react";
import RecipiesCard from "./RecipiesCard";

const Recipies = () => {
    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setRecipies(data));
        
    }, []);

    return (
        <div>
            <div className="text-center my-4">
                <h1 className="text-4xl font-bold text-center mb-4">
                    Our Recipes
                </h1>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur. Proin et feugiat
                    senectus vulputate netus pharetra rhoncus. Eget urna
                    volutpat curabitur aenean neque.
                </p>
            </div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <div className="grid grid-cols-2 gap-3 my-3">


                        {
                            recipies.map(recipie => <RecipiesCard key={recipie.recipe_id} recipie={recipie} ></RecipiesCard>)
                        }



                    </div>
                </div>
                <div className="flex-1">part-2</div>
            </div>
        </div>
    );
};

export default Recipies;
