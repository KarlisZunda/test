import PropTypes from "prop-types";
import { useState } from "react";
import "./Articles.css";
import { Link } from "react-router-dom";

function Article({ urlToImg, title, description, date, source, setArticleId, id }) {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<article className="article" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			<h2 className="first-title">{title}</h2>
			<div className="img-container">
				{isHovering && (
					<>
						<div className="article-date">{date}</div>
						<div className="article-source">{source}</div>
					</>
				)}
				<img className="article-img" src={urlToImg} alt={urlToImg} />
			</div>
			<div className="text-container">
				<h2 className="article-title">{title}</h2>
				<p className="article-description">{description}</p>
				<p className="read-more">
					<Link
						to={`/articles/${id}`}
						className="read-more"
						onClick={() => {
							setArticleId(id);
						}}
					>
            Read more
					</Link>
				</p>
			</div>
		</article>
	);
}

Article.propTypes = {
	urlToImg: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	date: PropTypes.string,
	source: PropTypes.string,
	setArticleId: PropTypes.func,
	id: PropTypes.number,
};

export default Article;
