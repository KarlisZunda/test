import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Button from "../App/Button";
import { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Filter from "./Filter/Filter";

function Navigation({
	toggleFilter,
	articles,
	isShown,
	setSearchResults,
	searchUsed,
	setSearchUsed,
	searchResults,
	setArrayOfFiltersUsed,
	arrayOfFiltersUsed,
}) {
	const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />;
	const chevronDown = <FontAwesomeIcon icon={faChevronDown} className="chevron-down-icon" />;
	const chevronUp = <FontAwesomeIcon icon={faChevronUp} className="chevron-up-icon" />;

	//Button content
	const [btnContent, setBtnContent] = useState();

	useEffect(() => {
		if (isShown) {
			console.log(arrayOfFiltersUsed);
			setBtnContent(
				<Fragment>
					<p>Close Filters</p>
					{chevronUp}
				</Fragment>
			);
		} else {
			console.log(arrayOfFiltersUsed);
			setBtnContent(
				<Fragment>
					<p>Show Filters</p>
					{chevronDown}
				</Fragment>
			);
		}
	}, [isShown]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const [filterOn, setFilterOn] = useState(false);
	//Search filter
	const searchFilter = () => {
		const value = document.querySelector(".search").value.toLowerCase();
		if (!value && !filterOn) {
			setSearchUsed(false);
			setSearchResults(articles);
			return;
		}
		if (!value) {
			setSearchUsed(false);
			setSearchResults(articles.filter((article) => arrayOfFiltersUsed.includes(article.source.name)));
		} else {
			setSearchUsed(true);
			if (filterOn) {
				setSearchResults(
					articles.filter(
						(article) =>
							arrayOfFiltersUsed.includes(article.source.name) &&
              article.title !== null &&
              article.title.toLowerCase().includes(value)
					)
				);
			} else {
				setSearchResults(articles.filter((article) => article.title !== null && article.title.toLowerCase().includes(value)));
			}
		}
	};

	return (
		<section className="news-nav">
			<h2>News</h2>
			<div className="navigation">
				<form className="item1" onSubmit={handleSubmit}>
					<input type="text" placeholder="Search by title" className="search" />
					<button type="Submit" className="search-btn" onClick={searchFilter}>
						{searchIcon}
					</button>
				</form>
				<Button className="filter-button" buttonContent={btnContent} toggleFilter={toggleFilter} />
			</div>
			{isShown && (
				<Filter
					articles={articles}
					setSearchResults={setSearchResults}
					searchResults={searchResults}
					setFilterOn={setFilterOn}
					arrayOfFiltersUsed={arrayOfFiltersUsed}
					setArrayOfFiltersUsed={setArrayOfFiltersUsed}
					searchUsed={searchUsed}
				/>
			)}
			<hr />
		</section>
	);
}

Navigation.propTypes = {
	toggleFilter: PropTypes.func,
	articles: PropTypes.array,
	isShown: PropTypes.bool,
	setSearchResults: PropTypes.func,
	setSearchUsed: PropTypes.func,
	searchUsed: PropTypes.bool,
	searchResults: PropTypes.array,
	setArrayOfFiltersUsed: PropTypes.func,
	arrayOfFiltersUsed: PropTypes.array,
};

export default Navigation;
