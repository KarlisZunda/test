import PropTypes from "prop-types";
import { useEffect } from "react";
import "../Header.css";

function Filter({ articles, setSearchResults, setFilterOn, arrayOfFiltersUsed, setArrayOfFiltersUsed, searchUsed }) {
	const sourceArray = articles.map((article) => {
		return article.source.name;
	});
	const uniqueSources = sourceArray.filter((value, index, array) => array.indexOf(value) === index);

	//Filter by source
	const filterBySource = (e) => {
		const filterSource = e.target.innerHTML;
		if (arrayOfFiltersUsed.includes(filterSource)) {
			e.target.style.textDecoration = "none";
			e.target.style.fontWeight = "400";
			e.target.style.border = "none";
			setArrayOfFiltersUsed(arrayOfFiltersUsed.filter((filter) => filter !== filterSource));
		} else {
			e.target.style.textDecoration = "underline";
			e.target.style.fontWeight = "500";
			e.target.style.border = "1.5px solid black";
			setArrayOfFiltersUsed([].concat(arrayOfFiltersUsed, filterSource));
		}
	};

	useEffect(() => {
		const value = document.querySelector(".search").value.toLowerCase();
		if (!arrayOfFiltersUsed?.length) {
			setFilterOn(false);
			if (!searchUsed) {
				setSearchResults(articles);
			} else {
				console.log(555);
				setSearchResults(
					articles.filter((article) => article.title !== null && article.title.toLowerCase().includes(value))
				);
			}
		} else {
			setFilterOn(true);
			if (!searchUsed) {
				setSearchResults(articles.filter((article) => arrayOfFiltersUsed.includes(article.source.name)));
			} else {
				setSearchResults(
					articles.filter(
						(article) =>
							arrayOfFiltersUsed.includes(article.source.name) &&
              article.title !== null &&
              article.title.toLowerCase().includes(value)
					)
				);
			}
		}
	}, [arrayOfFiltersUsed]);

	return (
		<section className="filters">
			{uniqueSources?.map((source, idx) => {
				if (source !== undefined) {
					if (arrayOfFiltersUsed.includes(source)) {
						return (
							<button
								style={{ textDecoration: "underline", fontWeight: "500", border: "1.5px solid black" }}
								key={idx}
								onClick={filterBySource}
							>
								{source}
							</button>
						);
					} else {
						return (
							<button onClick={filterBySource} key={idx}>
								{source}
							</button>
						);
					}
				}
			})}
		</section>
	);
}

Filter.propTypes = {
	articles: PropTypes.array,
	searchResults: PropTypes.array,
	setSearchResults: PropTypes.func,
	setFilterOn: PropTypes.func,
	arrayOfFiltersUsed: PropTypes.array,
	setArrayOfFiltersUsed: PropTypes.func,
	searchUsed: PropTypes.bool,
};

export default Filter;
