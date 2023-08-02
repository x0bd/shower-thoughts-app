import "../css/factList.css";
import supabase from "../supabase";

import React from "react";

const FactList = ({ setFacts, facts, categories }) => {
	if (facts.length === 0) {
		return <p className="message">Go and Shower 🚿</p>;
	}

	return (
		<section>
			<ul className="facts-list">
				{facts.map((fact) => (
					<Fact
						fact={fact}
						key={fact.id}
						categories={categories}
						setFacts={setFacts}
					/>
				))}
			</ul>
		</section>
	);
};

const Fact = ({ fact, categories, setFacts }) => {
	const handleVote = async () => {
		const { data: updatedFact, error } = await supabase
			.from("thoughts")
			.update({ upVotes: fact.upVotes + 1 })
			.eq("id", fact.id)
			.select();

		console.log(updatedFact);
		if (!error)
			setFacts((facts) =>
				facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
			);
	};

	return (
		<li className="fact">
			<p>{fact.text}</p>
			<span
				className="tag"
				style={{
					backgroundColor: categories.find(
						(cat) => cat.name === fact.category
					).color,
				}}
			>
				{fact.category}
			</span>
			<div className="vote-buttons">
				<button onClick={handleVote}>😂 {fact.upVotes}</button>
				<button>🤮 {fact.downVotes}</button>
			</div>
		</li>
	);
};

export default FactList;
