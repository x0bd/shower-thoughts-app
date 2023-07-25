import { useState } from "react";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import CategoryFilters from "./components/CategoryFilters";
import FactList from "./components/FactList";

const CATEGORIES = [
	{ name: "all", color: "crimson" },
	{ name: "tech", color: "#008080" },
	{ name: "nsfw", color: "#db2777" },
	{ name: "news", color: "#eac500" },
	{ name: "web3", color: "#f97" },
	{ name: "memes", color: "#8b5ffa" },
	{ name: "anime", color: "#ef4444" },
	{ name: "shitpost", color: "#1eeba3" },
];

const initialFacts = [
	{
		id: 1,
		text: "the I'm not interested in your PAWG collection line by Morty has to be the best throw-away lines in the series",
		source: "http://example.com",
		category: "nsfw",
		upVotes: 666,
		downVotes: 10,
		createdIn: 2022,
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
		text: "Elon Musk is cool, threads vs twitter is cool, he changed it from titter to X, what a cool person he is",
		source: "http://example.com",
		category: "tech",
		upVotes: 34,
		downVotes: 2,
		createdIn: 2023,
	},
];

const App = () => {
	const [showForm, setShowForm] = useState(false);
	const [facts, setFacts] = useState(initialFacts);

	return (
		<>
			<Header handleShowForm={setShowForm} showForm={showForm} />
			{showForm ? (
				<NewFactForm
					setFacts={setFacts}
					setShowForm={setShowForm}
					CATEGORIES={CATEGORIES}
				/>
			) : null}
			<main className="main">
				<CategoryFilters CATEGORIES={CATEGORIES} />
				<FactList facts={facts} categories={CATEGORIES} />
			</main>
		</>
	);
};

export default App;
