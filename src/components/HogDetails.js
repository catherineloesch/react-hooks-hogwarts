import React from "react"

function HogDetails({hog}) {

    const greased = hog.greased ? "yes" : "no"

    return (
        <div>
            <div>Specialty: {hog.specialty}</div>
            <div>Weight: {hog.weight}</div>
            <div>Greased: {greased}</div>
            <div>Highest Medal Achieved: {hog["highest medal achieved"]}</div>
        </div>
    )
}


export default HogDetails