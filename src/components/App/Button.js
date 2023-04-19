import "../Header/Header.css";
import PropTypes from "prop-types";

function Button({ buttonContent, type, className, toggleFilter }) {
	return (
		<button
			className={className}
			type={type}
			onClick={() => {
				toggleFilter();
			}}
		>
			{buttonContent}
		</button>
	);
}

Button.propTypes = {
	buttonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	type: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	className: PropTypes.string,
	toggleFilter: PropTypes.func,
	changeBtnContent: PropTypes.func,
};

export default Button;
