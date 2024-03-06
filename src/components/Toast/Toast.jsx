import { ToastContainer } from "react-toastify";

const TostBox = () => {
	return (
		<ToastContainer
			position="top-center"
			autoClose={2000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
		/>
	);
};

export default TostBox;
