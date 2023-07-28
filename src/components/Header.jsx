import Logo from "../assets/logo.png";
import "../css/header.css";

const Header = ({ showForm, handleShowForm }) => {
	const appTitle = "Shower Thoughts";

	return (
		<header className="header">
			<div className="logo">
				{/* <img src={Logo} alt="Shower Thoughts" /> */}
				<h1>🚿</h1>
				<h1>{appTitle}</h1>
			</div>
			<button
				className="btn cta btn-large btn-open"
				onClick={() => handleShowForm((show) => !show)}
			>
				{showForm ? "Close" : "➕"}
			</button>
		</header>
	);
};

export default Header;
