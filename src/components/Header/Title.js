import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Header.css";
import PropTypes from "prop-types";

function Title({ resetUI }) {
	const homeIcon = <FontAwesomeIcon icon={faHouse} className="house-icon" />;

	return (
		<section className="title">
			<hr />
			<div className="flex">
				<Link to="/" style={{textDecoration: "none", color: "black"}} onClick={resetUI} >{homeIcon}</Link>
				<Link to="/" style={{textDecoration: "none", color: "black"}} onClick={resetUI} ><h1>SimpleNews</h1></Link>
			</div>
			<hr className="bottom-hr" />
		</section>
	);
}

Title.propTypes = {
	resetUI: PropTypes.func,
};

export default Title;
