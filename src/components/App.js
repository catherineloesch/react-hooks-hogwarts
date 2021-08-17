import React, { useState } from "react";
import Nav from "./Nav";
import NewHogForm from "./NewHogForm";
import HogFilter from "./HogFilter";
import GreasedBox from "./GreasedBox";
import HogTile from "./HogTile";

import hogs from "../porkers_data";


function App() {
    const [hogsDisplayed, setHogsDisplayed] = useState(hogs)
	const [greasedHogs, setGreasedHogs] = useState(hogs.filter((hog) => (hog.greased === true)))
	const [sortFilter, setSortFilter] = useState("all")

	function onChecked(checked) {
		setGreasedHogs(hogsDisplayed.filter((hog) => (hog.greased === true)))
		if (checked) {setHogsDisplayed(greasedHogs)} else {
			setHogsDisplayed(hogs)
		}
	}

	function handleSortChange(event) {
		setSortFilter(event.target.value)
		sortHogs(event.target.value)
    }
	
	function addNewHog(newHog){
		setHogsDisplayed(() => [...hogsDisplayed, newHog])
	}

    function sortHogs(sortBy) {
        setHogsDisplayed(hogsDisplayed.sort((a, b)=>{
                if (a[sortBy] < b[sortBy]) {
                 return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return 1;
                }
                return 0
            }))
		}

	return (
		<div className="App">
			<Nav />
			<div className="main">
				<div className="filters">
					<GreasedBox onChecked={onChecked}/>
					<HogFilter  handleChange={handleSortChange}/>
				</div>
				<p className="hog-tiles">{hogsDisplayed.map((hog) => <HogTile hog={hog} key={hog.name}/>)}</p>
				<NewHogForm className="hog-form" addNewHog={addNewHog}/>
			</div>

		</div>
	);
}

export default App;
