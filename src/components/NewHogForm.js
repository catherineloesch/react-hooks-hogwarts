import React, { useState } from "react"


function NewHogForm({ addNewHog }) {
   const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    ["highest medal achieved"]: "",
    image: ""
   })
    

    function handleSubmit(event) {
        event.preventDefault()
        addNewHog(formData)
        setFormData({
            name: "",
            specialty: "",
            greased: false,
            weight: "",
            ["highest medal achieved"]: "",
            image: ""
           })
    }

    return (
        <div className="form-section">
            <h3>Add a new Hog:</h3>
            <form className="hog-form" onSubmit={handleSubmit}>
                <label>Name: <input type="text" value={formData.name} onChange={(event) => setFormData({...formData, name: event.target.value})}/>
                </label>
                <br></br>

                <label>Weight: <input type="text" value={(formData.weight)} onChange={(event) => setFormData({...formData, weight: event.target.value})}/>
                </label>
                <br></br>

                

                <label>Specialty: <input type="text" value={formData.specialty} onChange={(event) => setFormData({...formData, specialty: event.target.value})}/>
                </label>
                <br></br>
        
                <label>Highest Medal Achieved: <input type="text" value={formData["highest medal achieved"]} onChange={(event) => setFormData({...formData, ["highest medal achieved"]: event.target.value})}/>
                </label>
                <br></br>
                <br></br>

               

                <label>image: <input type="text" value={formData.image} onChange={(event) => setFormData({...formData, image: event.target.value})}/>
                </label>
                <br></br>

                <label>Greased: <input type="checkbox" checked={formData.greased} onChange={(event) => setFormData({...formData, greased: event.target.checked})}/>
                </label>
                <br></br>
            

                <label>
                <input type="submit"/>
                </label>
                <br></br>
            
            </form>
        </div>
    )
}

export default NewHogForm


