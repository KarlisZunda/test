import Header from "../components/Header/Header";
import Articles from "../components/Articles/Articles";
import PropTypes from "prop-types";
import ErrorBoundary from "../components/App/ErrorBoundary";

function Home({
	toggleFilter,
	articles,
	isShown,
	setSearchResults,
	setSearchUsed,
	searchResults,
	searchUsed,
	setArrayOfFiltersUsed,
	arrayOfFiltersUsed,
	setArticleId,
	loading,
}) {
	return (
		<div className="container">
			<ErrorBoundary>
				<Header
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
			</ErrorBoundary>
			<ErrorBoundary>
				<Articles searchResults={searchResults} searchUsed={searchUsed} setArticleId={setArticleId} loading={loading} />
			</ErrorBoundary>
		</div>
	);
}

Home.propTypes = {
	toggleFilter: PropTypes.func,
	articles: PropTypes.array,
	isShown: PropTypes.bool,
	setSearchResults: PropTypes.func,
	setSearchUsed: PropTypes.func,
	searchUsed: PropTypes.bool,
	searchResults: PropTypes.array,
	setArrayOfFiltersUsed: PropTypes.func,
	arrayOfFiltersUsed: PropTypes.array,
	setArticleId: PropTypes.func,
	loading: PropTypes.bool,
};

export default Home;
