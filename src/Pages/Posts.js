import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "./Pages.css";

function Posts({ articles, articleId, setArticleId }) {
	const { id } = useParams();
	const article = articles[articleId];

	useEffect(() => {
		setArticleId(+id);
	}, [id]);

	if (isNaN(+id) || id < 0 || id > 19) {
		return <Navigate to="/404" />;
	}
	if (articles.length) {
		const urlToImg = article.urlToImage;
		const publishmentTime = article.publishedAt.split("T").join(" ").slice(0, -4);
		return (
			<div className="post-container">
				<h1>{article.title}</h1>
				<p className="article-author">Author: {article.author}</p>
				<img src={urlToImg} alt={article.urlToImage} />
				<p className="article-time">{publishmentTime}</p>
				<p className="article-content">{article.content}</p>
			</div>
		);
	}
}

Posts.propTypes = {
	articleId: PropTypes.number,
	articles: PropTypes.array,
	setArticleId: PropTypes.func,
};

export default Posts;
