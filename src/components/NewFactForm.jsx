import { useState } from "react";
import "../css/newFacts.css";
import supabase from "../supabase";

const NewFactForm = ({ setFacts, setShowForm, CATEGORIES }) => {
	const [text, setText] = useState("");
	const [source, setSource] = useState("http://example.com");
	const [category, setCategory] = useState("");
	const textLength = text.length;
	const [error, setError] = useState(false);
	const [isUploading, setIsUploading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (text && source && category && textLength <= 200) {
			setIsUploading(true);
			const { data: newFact, error } = await supabase
				.from("thoughts")
				.insert([{ text, source, category }])
				.select();

			setIsUploading(false);

			setFacts((facts) => [newFact[0], ...facts]);

			setText("");
			setSource("http://example.com");
			setCategory("");

			setShowForm(false);
		} else {
			setError(true);
			setTimeout(() => setError(false), 2000);
		}
	};

	return (
		<form
			className="fact-form"
			onSubmit={handleSubmit}
			style={error ? { color: "#ef4444", fontWeight: "900" } : {}}
		>
			<input
				type="text"
				value={
					error ? "Internal Error, please try again 😥" : text
				}
				placeholder="yes, share that shower thought lol..."
				onChange={(e) => setText(e.target.value)}
				disabled={isUploading}
			/>
			<span>{200 - textLength}</span>

			<select
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				disabled={isUploading}
			>
				{CATEGORIES.map((cat) => (
					<option value={cat.name} key={cat.name}>
						{cat.name.toUpperCase()}
					</option>
				))}
			</select>
			<button
				onClick={handleSubmit}
				className="btn cta hidden btn-large"
				disabled={isUploading}
			>
				Post
			</button>
		</form>
	);
};

export default NewFactForm;
