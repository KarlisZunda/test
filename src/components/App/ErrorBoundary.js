import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
	state = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log(error, info);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback;
		}
		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	fallback: PropTypes.string,
	children: PropTypes.object,
};

export default ErrorBoundary;
