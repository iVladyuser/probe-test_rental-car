import { ThreeDots } from "react-loader-spinner";
import { StyledLoader } from "./Loader.styled";

const Loader = () => {
	return (
		<StyledLoader>
			<ThreeDots
				visible={true}
				height="80"
				width="80"
				color="#000"
				radius="9"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		</StyledLoader>
	);
};

export default Loader;
