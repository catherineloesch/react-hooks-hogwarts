import React, { useState } from "react"

function GreasedBox({ onChecked }) {

    const [greasedSelected, setGreasedSelected] = useState(false)

    function handleCheckBoxChange(event) {
        setGreasedSelected(event.target.checked)
        onChecked(event.target.checked)
    }

    return (
    <label> only show greased
		<input
			type="checkbox"
			onChange={handleCheckBoxChange}
			checked={greasedSelected}
			/>
	</label> )
}



export default GreasedBox