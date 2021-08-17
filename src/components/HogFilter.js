import React from "react"



function HogFilter({ handleChange }){

    return (
        <div>
            <label>Sort By </label>
            <select onChange={handleChange}>
                <option value="all" selected disabled>Sort By</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}


export default HogFilter

