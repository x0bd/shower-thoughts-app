import { useState } from "react";
import "../css/newFacts.css";

const NewFactForm = ({ setFacts, setShowForm, CATEGORIES }) => {
	const [text, setText] = useState("");
	const [source, setSource] = useState("http://example.com");
	const [category, setCategory] = useState("");
	const textLength = text.length;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text && source && category && textLength <= 200) {
			const newFact = {
				id: Math.round(Math.random() * 10000),
				text,
				source,
				category,
				upVotes: 0,
				downVotes: 0,
				createdIn: new Date().getFullYear(),
			};

			setFacts((facts) => [newFact, ...facts]);

			setText("");
			setSource("http://example.com");
			setCategory("");

			setShowForm(false);
		} else {
			alert("Error 😂");
		}
	};

	return (
		<form className="fact-form" onSubmit={handleSubmit}>
			<input
				type="text"
				value={text}
				placeholder="yes, share that shower thought lol..."
				onChange={(e) => setText(e.target.value)}
			/>
			<span>{200 - textLength}</span>

			<select
				value={category}
				onChange={(e) => setCategory(e.target.value)}
			>
				{CATEGORIES.map((cat) => (
					<option value={cat.name} key={cat.name}>
						{cat.name.toUpperCase()}
					</option>
				))}
			</select>
			<button onClick={handleSubmit} className="btn btn-large">
				Post
			</button>
		</form>
	);
};

export default NewFactForm;
