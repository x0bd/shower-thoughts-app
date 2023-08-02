import { useEffect, useState } from "react";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import CategoryFilters from "./components/CategoryFilters";
import FactList from "./components/FactList";
import supabase from "./supabase";

const CATEGORIES = [
	{ name: "all", color: "crimson" },
	{ name: "tech", color: "#008080" },
	{ name: "nsfw", color: "#db2777" },
	{ name: "news", color: "#eac500" },
	{ name: "awful", color: "#f97" },
	{ name: "memes", color: "#8b5ffa" },
	{ name: "anime", color: "#ef4444" },
	{ name: "shitpost", color: "#1eeba3" },
];

const initialFacts = [
	{
		id: 1,
		text: "This line and scene from Rick and Morty lives rent-free in my head - `N-NO, I DON'T WANT TO SEE YOUR POG COLLECTION.`",
		source: "http://example.com",
		category: "memes",
		upVotes: 4500,
		downVotes: 31,
		createdIn: 2022,
	},
	{
		id: 2,
		text: "Goku is very lucky that his opponents came to fight him in order from weakest to strongest",
		source: "http://example.com",
		category: "anime",
		upVotes: 7000,
		downVotes: 23,
		createdIn: 2023,
	},

	{
		id: 5,
		text: "Margarine is ONE MOLECULE away from plastic; and shares 27 ingredients with paint. Bon Appetit!",
		source: "http://example.com",
		category: "awful",
		upVotes: 1600,
		downVotes: 34,
		createdIn: 2023,
	},

	{
		id: 4,
		text: "Never wear a Rick and Morty T-shirt that says 'Welcome Back To Reality!!' while going to a birthday of a 1 year old.",
		source: "http://example.com",
		category: "shitpost",
		upVotes: 770,
		downVotes: 2,
		createdIn: 2023,
	},

	{
		id: 3,
		text: "Waking up from a good dream and then going back to sleep and the dream picks up where it left off is better than winning the lottery or having sex ",
		source: "http://example.com",
		category: "shitpost",
		upVotes: 1167,
		downVotes: 3,
		createdIn: 2023,
	},
];

const App = () => {
	const [showForm, setShowForm] = useState(false);
	const [facts, setFacts] = useState([]);
	const [isLoading, SetIsLoading] = useState(false);
	// useEffect

	useEffect(() => {
		async function getThoughts() {
			SetIsLoading(true);
			const { data: thoughts, error } = await supabase
				.from("thoughts")
				.select("*")
				.order("upVotes", { ascending: false })
				.limit(100);

			if (!error) setFacts;
			else alert("ERROR, Check Your Internet Connection");
			setFacts(thoughts);
			SetIsLoading(false);
		}
		getThoughts();
	}, []);

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
				{isLoading ? (
					<Loader />
				) : (
					<FactList facts={facts} categories={CATEGORIES} />
				)}
			</main>
		</>
	);
};

const Loader = () => {
	return <p className="message">loading...</p>;
};

export default App;
