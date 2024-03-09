import { Backdrop, Box, Fade, Modal } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

const ModalWrapper = ({ isOpen, handleClose, children }) => {
	return (
		<Modal
			aria-labelledby="Car info popup"
			aria-describedby="More info about car"
			open={isOpen}
			onClose={handleClose}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}>
			<Fade in={isOpen}>
				<Box sx={style}>{children}</Box>
			</Fade>
		</Modal>
	);
};

export default ModalWrapper;
