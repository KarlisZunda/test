import PropTypes from "prop-types";
import "./Header.css";
import Navigation from "./Navigation";

function Header({
	toggleFilter,
	articles,
	isShown,
	setSearchResults,
	setSearchUsed,
	searchUsed,
	searchResults,
	setArrayOfFiltersUsed,
	arrayOfFiltersUsed
}) {
	return (
		<header>
			<Navigation
				toggleFilter={toggleFilter}
				articles={articles}
				isShown={isShown}
				setSearchResults={setSearchResults}
				setSearchUsed={setSearchUsed}
				searchUsed={searchUsed}
				searchResults={searchResults}
				setArrayOfFiltersUsed={setArrayOfFiltersUsed}
				arrayOfFiltersUsed={arrayOfFiltersUsed}
			/>
		</header>
	);
}

Header.propTypes = {
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

export default Header;
