import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Posts from "../../Pages/Posts";
import NotFound from "../../Pages/NotFound";
import axios from "axios";
import Title from "../Header/Title";
import ToHome from "../Header/ToHome";
import ErrorBoundary from "./ErrorBoundary";

function App() {
	// Set state
	const [articleId, setArticleId] = useState();
	const [articles, setArticles] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [arrayOfFiltersUsed, setArrayOfFiltersUsed] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const date = new Date();
		const todaysDate = `${date.getFullYear}`;
		const getArticles = async () => {
			setLoading(true);
			const response = await axios.get(
				`https://newsapi.org/v2/everything?q=tesla&from=${todaysDate}&sortBy=publishedAt&apiKey=cb19121d24464b3ab3175fb493267e68`
			);
			setLoading(false);
			setArticles(response.data.articles.slice(0, 20));
			setSearchResults(response.data.articles.slice(0, 20));
		};
		getArticles();
	}, []);

	// Toggle filter
	const [searchUsed, setSearchUsed] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const toggleFilter = () => {
		setIsShown((current) => !current);
	};

	//Reset func
	const resetUI = () => {
		setSearchUsed(false);
		setIsShown(false);
		setSearchResults(articles);
		setArrayOfFiltersUsed([]);
	};

	return (
		<>
			<ErrorBoundary>
				<Title resetUI={resetUI} />
			</ErrorBoundary>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							toggleFilter={toggleFilter}
							articles={articles}
							isShown={isShown}
							setSearchResults={setSearchResults}
							setSearchUsed={setSearchUsed}
							searchUsed={searchUsed}
							searchResults={searchResults}
							setArrayOfFiltersUsed={setArrayOfFiltersUsed}
							arrayOfFiltersUsed={arrayOfFiltersUsed}
							setArticleId={setArticleId}
							loading={loading}
						/>
					}
				/>
				<Route element={<ToHome resetUI={resetUI} />}>
					<Route
						path="/articles/:id"
						element={<ErrorBoundary><Posts articleId={articleId} articles={articles} setArticleId={setArticleId} /></ErrorBoundary>}
					/>
					<Route path="*" element={<NotFound />} />
					<Route path="/404" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
