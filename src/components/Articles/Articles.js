import Article from "./Article";
import PropTypes from "prop-types";
import Spinner from "../App/Spinner";

function Articles({ searchResults, searchUsed, setArticleId, loading }) {
	if (searchUsed && !searchResults?.length) {
		return (
			<main>
				<p className="no-matching">No matching articles</p>
			</main>
		);
	} else {
		return (
			<main>
				{loading ? (
					<Spinner />
				) : (
					<>
						{searchResults.map((article, idx) => {
							return (
								<Article
									key={idx}
									id={idx}
									url={article.url}
									description={article.description}
									title={article.title || "No Title"}
									urlToImg={article.urlToImage}
									date={article.publishedAt.split("T")[0]}
									source={article.source.name}
									setArticleId={setArticleId}
								/>
							);
						})}
					</>
				)}
			</main>
		);
	}
}

Articles.propTypes = {
	searchResults: PropTypes.array,
	searchUsed: PropTypes.bool,
	setArticleId: PropTypes.func,
	loading: PropTypes.bool,
};

export default Articles;
