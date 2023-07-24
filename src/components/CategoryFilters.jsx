import "../css/category.css";

const CategoryFilters = ({ CATEGORIES }) => {
	return (
		<aside>
			<ul>
				<div className="category-list">
					{CATEGORIES.map((cat) => (
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
