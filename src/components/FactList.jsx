import "../css/factList.css";

import React from "react";

const FactList = ({ facts, categories }) => {
	return (
		<section>
			<ul className="facts-list">
				{facts.map((fact) => (
					<Fact
						fact={fact}
						key={fact.id}
						categories={categories}
					/>
				))}
			</ul>
		</section>
	);
};

const Fact = ({ fact, categories }) => {
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
				<button>😂 {fact.upVotes}</button>
				<button>🤮 {fact.downVotes}</button>
			</div>
		</li>
	);
};

export default FactList;
