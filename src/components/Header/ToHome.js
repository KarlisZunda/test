import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

function ToHome({ resetUI }) {
	const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} className="chevron-left-icon" />;

	return (
		<>
			<Link to="/" className="to-home" onClick={resetUI}>
				{chevronLeft}Home
			</Link>
			<Outlet />
		</>
	);
}

ToHome.propTypes = {
	resetUI: PropTypes.func,
};

export default ToHome;
