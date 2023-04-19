import ClipLoader from "react-spinners/ClipLoader";
import "../Articles/Articles.css";

function Spinner() {
	return (
		<ClipLoader
			className="react-spinner"
			color={"black"}
			size={100}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	);
}

export default Spinner;