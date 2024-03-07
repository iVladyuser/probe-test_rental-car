import { ProgressBar } from "react-loader-spinner";
import { StyledLoader } from "./Loader.styled";

const Loader = () => {
	return (
		<StyledLoader>
			<ProgressBar
				visible={true}
				height="80"
				width="80"
				color="#0b44cd"
				ariaLabel="progress-bar-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		</StyledLoader>
	);
};

export default Loader;
