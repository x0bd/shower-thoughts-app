import { useState } from "react";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";

const initialFacts = [
	{
		id: 1,
		text: "Threads vs Twitter is cool",
		source: "http://example.com",
		category: "tech",
		upVotes: 34,
		downVotes: 2,
		createdIn: 2023,
	},
	{
		id: 2,
		text: "I think 86, Dororo and Kakegurui are underrated and or misunderstood ",
		source: "http://example.com",
		category: "anime",
		upVotes: 100,
		downVotes: 23,
		createdIn: 2019,
	},
	{
		id: 3,
		text: "the I'm not interested in your PAWG collection line by Morty has to be the best throw-away lines in the series",
		source: "http://example.com",
		category: "nsfw",
		upVotes: 666,
		downVotes: 10,
		createdIn: 2022,
	},
];

const App = () => {
	const [showForm, setShowForm] = useState(true);
	const [facts, setFacts] = useState(initialFacts);

	return (
		<>
			<Header handleShowForm={setShowForm} showForm={showForm} />
			{showForm ? (
				<NewFactForm
					setFacts={setFacts}
					setShowForm={setShowForm}
				/>
			) : null}
		</>
	);
};

const CategoryFilters = () => {};

const FactList = () => {};

const Fact = () => {};

export default App;
