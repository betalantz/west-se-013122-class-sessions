import React, {useState} from "react";
import Header from "./Header";
import HogList from './HogList'
import Filter from './Filter'

import hogsData from "../porkers_data";

function App() {

	const [hogs, setHogs] = useState(hogsData)
	const [showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState("name")

	const hogsToDisplay = hogs
		.filter(hog => (showGreased ? hog.greased: true))
		.sort((hog1, hog2) => {
			if (sortBy === "weight") {
				return hog1.weight - hog2.weight
			} else {
				return hog1.name.localeCompare(hog2.name)
			}
		})

	return (
		<div className="App">
			<Header />
			<Filter 
			  showGreased={showGreased}
			  onCheckGreased={setShowGreased}
			  sortBy={sortBy}
			  onChangeSortBy={setSortBy}
			/>
			<HogList hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
