import "../css/header.css";

const Header = ({ showForm, handleShowForm }) => {
	const appTitle = "Shower Thoughts";

	return (
		<header className="header">
			<div className="logo">
				<i className="fa-solid fa-shower"></i>
				<h1>{appTitle}</h1>
			</div>
			<button
				className="btn cta btn-large btn-open"
				onClick={() => handleShowForm((show) => !show)}
			>
				{showForm ? "Close" : <i className="fa-solid fa-plus"></i>}
			</button>
		</header>
	);
};

export default Header;
