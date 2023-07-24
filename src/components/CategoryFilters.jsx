import "../css/category.css";

const CATEGORIES = [
	{ name: "all", color: "crimson" },
	{ name: "tech", color: "#008080" },
	{ name: "nsfw", color: "#db2777" },
	{ name: "news", color: "#eac500" },
	{ name: "web3", color: "#f97" },
	{ name: "memes", color: "#8b5ffa" },
	{ name: "anime", color: "#ef4444" },
	{ name: "nutter", color: "#cbf8e7" },
];

const CategoryFilters = () => {
	return (
		<aside>
			<ul>
				<div className="category-list">
					{CATEGORIES.map((cat, i) => (
						<li className="category" key={cat.color}>
							<button
								className="btn btn-category"
								style={{
									backgroundColor: cat.color,
									color: "#f0f0f0",
								}}
							>
								{cat.name}
							</button>
						</li>
					))}
				</div>
			</ul>
		</aside>
	);
};

export default CategoryFilters;
